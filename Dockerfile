FROM node:12.13.0-alpine as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package-lock.json package.json ./
RUN npm install --production

COPY src ./src
COPY public ./public

# PROD build
RUN npm run build

# the production environment
FROM nginx:1.17.5-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]