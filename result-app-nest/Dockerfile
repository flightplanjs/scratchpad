FROM node:gallium AS api-dependencies

# Temp Dir For Build Process
RUN mkdir -p /var/api
COPY package*.json /var/api

# Install npm dependencies with host cache
WORKDIR /var/api
RUN --mount=type=cache,target=/tmp/npm_cache npm install

FROM node:gallium AS api-builder

# Temp Dir For Build Process
COPY --from=api-dependencies /var/api /var/api
COPY . /var/api
WORKDIR /var/api

# Compile static assets
RUN npm run build

# Copy static assets from build step to run container
FROM node:gallium

RUN mkdir -p /var/api
COPY --from=api-builder /var/api/package*.json /var/api
COPY --from=api-builder /var/api/node_modules /var/api/node_modules
COPY --from=api-builder /var/api/dist /var/api/dist

# Serves compiled static assets
WORKDIR /var/api
CMD ["npm", "run", "start:prod"]
