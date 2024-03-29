###################################################################
# Stage 1: Install all workspaces (dev)dependencies               #
#          and generates node_modules folder(s)                   #
# ----------------------------------------------------------------#
# Notes:                                                          #
#   1. this stage relies on buildkit features                     #
#   2. depend on .dockerignore, you must at least                 #
#      ignore: all **/node_modules folders                        #
###################################################################

FROM node:gallium AS deps

WORKDIR /workspace-install
COPY package*.json /workspace-install
COPY packages/result-app-core/package.json /workspace-install/packages/result-app-core/package.json
COPY packages/result-app-db/package.json /workspace-install/packages/result-app-db/package.json
COPY packages/result-app-ember/package.json /workspace-install/packages/result-app-ember/package.json
COPY packages/result-app-nest/package.json /workspace-install/packages/result-app-nest/package.json

RUN --mount=type=cache,id=npm,target=/root/.npm \
  npm ci

FROM node:gallium AS ui-builder

# Directory for static assets
RUN mkdir -p /var/http

# Temp Dir For Build Process

WORKDIR /app
COPY . .
COPY --from=deps /workspace-install ./

# Compile shared libs
RUN npm run build:lib
WORKDIR /app/packages/result-app-ember

# Compile static assets
RUN npm run build -- --environment=local --output-path="/var/http"

# Copy static assets from build step to run container
FROM node:gallium
COPY --from=ui-builder /app /app
COPY --from=ui-builder /var/http /var/http

# Serves compiled static assets
RUN npm install -g http-server
WORKDIR /var/http
CMD ["http-server", "--proxy", "http://localhost:8080?", "-c-1"]
