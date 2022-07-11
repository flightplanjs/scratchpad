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

FROM node:gallium AS runner

WORKDIR /app
COPY . .
COPY --from=deps /workspace-install ./

# Compile shared libs
RUN npm run build:lib

WORKDIR /app/packages/result-app-nest

# Compile static assets
RUN npm run build
CMD ["npm", "run", "start:prod"]