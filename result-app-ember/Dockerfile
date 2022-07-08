FROM node:gallium AS ui-builder

# Directory for static assets
RUN mkdir -p /var/http

# Temp Dir For Build Process
RUN mkdir -p /var/ui
COPY . /var/ui
WORKDIR /var/ui

# Install npm dependencies with host cache
RUN --mount=type=cache,target=/tmp/npm_cache npm install
# Compile static assets
RUN npm run build --environment development --output-path /var/http

# Copy static assets from build step to run container
FROM node:gallium
COPY --from=ui-builder /var/http /var/http

# Serves compiled static assets
RUN npm install -g http-server
WORKDIR /var/http
CMD ["http-server", "--proxy", "http://localhost:8080?"]
