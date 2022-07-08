FROM node:gallium AS monorepo-dependencies

# Temp Dir For Build Process
RUN mkdir -p /var/monorepo
COPY package*.json /var/monorepo
COPY packages/result-app-core/package.json /var/monorepo/packages/result-app-core/package.json
COPY packages/result-app-db/package.json /var/monorepo/packages/result-app-db/package.json
COPY packages/result-app-ember/package.json /var/monorepo/packages/result-app-ember/package.json
COPY packages/result-app-nest/package.json /var/monorepo/packages/result-app-nest/package.json

# Install npm dependencies with host cache
WORKDIR /var/monorepo
RUN --mount=type=cache,target=/tmp/npm_cache npm install

FROM node:gallium AS lib-builder

# Temp Dir For Build Process
COPY --from=monorepo-dependencies /var/monorepo /var/monorepo
COPY . /var/monorepo
WORKDIR /var/monorepo

# Compile shared libs
RUN npm run build:lib

WORKDIR /var/monorepo/packages/result-app-nest

# Compile static assets
RUN npm run build
CMD ["npm", "run", "start:prod"]