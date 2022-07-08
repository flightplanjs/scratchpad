FROM node:gallium AS ui-dependencies

# Temp Dir For Build Process
RUN mkdir -p /var/ui
COPY package*.json /var/ui

# Install npm dependencies with host cache
WORKDIR /var/ui
RUN --mount=type=cache,target=/tmp/npm_cache npm install

FROM node:gallium AS ui-builder

# Directory for static assets
RUN mkdir -p /var/http

# Temp Dir For Build Process
COPY --from=ui-dependencies /var/ui /var/ui
COPY . /var/ui
WORKDIR /var/ui

# Compile static assets
RUN npm run build -- --environment=local --output-path="/var/http"

# Copy static assets from build step to run container
FROM node:gallium
COPY --from=ui-builder /var/http /var/http

# Serves compiled static assets
RUN npm install -g http-server
WORKDIR /var/http
CMD ["http-server", "--proxy", "http://localhost:8080?", "-c-1"]
