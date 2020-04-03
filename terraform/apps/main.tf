provider "docker" {
  host = "ssh://root@${var.public_ip}:22"
  version = "2.5"
}

# declare any input variables

# create docker volume resource

# create docker network resource
resource "docker_network" "lunch-app-network" {
  name = "lunch-app-network"
}

# create traefik container
data "docker_registry_image" "lunch-app-traefik" {
  name = "traefik:v2.0.4"
}
resource "docker_image" "lunch-app-traefik" {
  name          = data.docker_registry_image.lunch-app-traefik.name
  pull_triggers = [data.docker_registry_image.lunch-app-traefik.sha256_digest]
}
resource "docker_container" "lunch-app-traefik" {
  name     = "lunch-app-traefik"
  image    = data.docker_registry_image.lunch-app-traefik.name
  command = [
    "--log.level=info",
    "--api.insecure=true",
    "--providers.docker=true",
    "--providers.docker.exposedbydefault=false",
    "--entrypoints.frontend.address=:80",
    "--entryPoints.frontend-secure.address=:443",
    "--certificatesresolvers.coveatapp.acme.httpchallenge=true",
    "--certificatesresolvers.coveatapp.acme.httpChallenge.entryPoint=frontend",
    #"--certificatesresolvers.coveatapp.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory",
    "--certificatesresolvers.coveatapp.acme.email=m.zirkenbach@gmx.de",
    "--certificatesresolvers.coveatapp.acme.storage=/letsencrypt/acme.json",
]
  restart  = "always"
  must_run = true
  ports {
    internal = "80"
    external = "80"
  }
  ports {
    internal = "443"
    external = "443"
  }
  ports {
    internal = "8080"
    external = "8080"
  }
  networks_advanced {
    name = docker_network.lunch-app-network.id
  }
  mounts {
    source = "/var/run/docker.sock"
    target = "/var/run/docker.sock"
    type = "bind"
    read_only = true
  }
  mounts {
    source = "/mnt/HC_Volume_${var.hcloud_volume_id}/letsencrypt/${var.domain}"
    target = "/letsencrypt"
    type = "bind"
    read_only = false
  }
}

# create frontend container
data "docker_registry_image" "coveat-app" {
  name = "m4rc0z/coveat-app:latest"
}
resource "docker_image" "coveat-app" {
  name          = data.docker_registry_image.coveat-app.name
  pull_triggers = [data.docker_registry_image.coveat-app.sha256_digest]
}
resource "docker_container" "coveat-app" {
  name          = "coveat-app"
  image         = data.docker_registry_image.coveat-app.name
  restart       = "always"
  must_run      = true
  ports {
    internal = "80"
    external = "3000"
    ip       = "127.0.0.1" # enable for security reasons
  }
  networks_advanced {
    name = docker_network.lunch-app-network.id
  }
  env = [
    "NODE_ENV=production",
  ]
  labels = {
    "id"=docker_image.coveat-app.id
    "traefik.enable"=true
    "traefik.http.middlewares.coveat-app-redirect-web-secure.redirectscheme.scheme"="https"
    "traefik.http.routers.frontend.middlewares"="coveat-app-redirect-web-secure"
    "traefik.http.routers.frontend.rule"="Host(`${var.domain}`)"
    "traefik.http.routers.frontend.entrypoints"="frontend"
    "traefik.http.routers.frontend-secure.rule"="Host(`${var.domain}`)"
    "traefik.http.routers.frontend-secure.tls"=true
    "traefik.http.routers.frontend-secure.tls.certresolver"="coveatapp"
    "traefik.http.routers.frontend-secure.entrypoints"="frontend-secure"
  }
}
