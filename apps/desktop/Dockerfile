# syntax=docker/dockerfile:1

ARG BUILD_CONFIGURATION=production

FROM node:22-alpine AS build
ARG BUILD_CONFIGURATION
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=${BUILD_CONFIGURATION}

FROM nginx:1.27-alpine AS runtime
COPY --from=build /app/dist/desktop/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
