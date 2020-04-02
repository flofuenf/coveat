This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Terraform

NOTE: There's still no provider dependency support in Terraform v0.12. The docker provider depends on the `infrastructure/hcloud/` Hetzner VPS to deploy the images, hence the dependency.

The only workaround is to `terraform init` and `terraform apply` twice with the `-target` parameter, see https://github.com/hashicorp/terraform/issues/2430#issuecomment-195430847 for reference.


### SSH Key

Create an SSH Key for each domain:

```bash
$ ssh-keygen -t ed25519 -f ~/.ssh/eat.mealit.de
```

### Hetzner Floating IP

Next create a `floating_ip` and add a label `key=eat.mealit.de`. NOTE: this is used in terraform to assign the floating_ip to the new Hetzner VPS.

<div>
    <img src="doc/images/hetzner_floating_ip_1.png" width="350" alt="Hetzner Floating IP Step 1">
    <br>
    <img src="doc/images/hetzner_floating_ip_2.png" width="350" alt="Hetzner Floating IP Step 2">
    <br>
    <img src="doc/images/hetzner_floating_ip_3.png" width="350" alt="Hetzner Floating IP Step 3">
    <br>
</div>

### Hetzner Volume

Create a Hetzner volume for each domain and add the necessary label:

<div>
    <img src="doc/images/hetzner_volume_1.png" width="350" alt="Hetzner Volume Step 1">
    <br>
    <img src="doc/images/hetzner_volume_2.png" width="350" alt="Hetzner Volume Step 2">
    <br>
    <img src="doc/images/hetzner_volume_3.png" width="350" alt="Hetzner Volume Step 3">
    <br>
</div>

### Terraform Hetzner

Create the workspaces (you must be inside the `coveat-app/terraform` directory:

```bash
$ terraform workspace new eat

# Show workspaces

$ terraform workspace list
  default
* eat
```

Next, for `eat.mealit.de` execute:

```bash
$ terraform workspace select eat
$ export TF_VAR_hcloud_token='XXXX'
$ export TF_VAR_domain='eat.mealit.de'
```

then, continue with:

```bash
$ terraform init
$ terraform apply -target=module.infrastructure
```

NOTE: you need to login to the Hetzner server with your ssh key (either ~/.ssh/dev.mealit.de and ~/.ssh.admin.mealit.de) and accept the fingerprint

This typically means you need to start an ssh-agent:

```
$ ssh-agent
```

and add the ssh key:

```
$ ssh-add ~/.ssh/eat.mealit.de
```

Remove (old) fingerprint if you destroyed a Hetzner VPS and just created a new one:
```bash
$ ssh-keygen -R eat.mealit.de
```

If you can login with:
```bash
$ ssh root@eat.mealit.de
```

without a password (login) prompt continue with "deploying" the docker apps:

### Terraform Docker

```bash
$ terraform init
$ terraform apply -target=module.apps
```