## Local Dev Setup

### Domain and SSL Setup

To support local dev with `https://result-app.local` urls you will need to do the following.

Update your `/etc/hosts` file to have the following lines:

```
127.0.0.1	api.result-app.local
127.0.0.1	result-app.local
```

Then install [mkcert](https://github.com/FiloSottile/mkcert) and in root of the project run the following command:

```sh
mkcert -key-file dev.key -cert-file dev.crt "*.result-app.local" "result-app.local"
```

### ENV File

Copy the `.env.sample` file and fill in any of the variables with your personal secret values for the Result App project.
Use the ZSH env plugin or similar to keep these variables set in your shell session for best results.

### Docker Compose Setup

With your ENV vars set from above start the local dev environment with:

```sh
docker compose up -d
```

This will start all of the local services, but will only build a fresh copy of the UI and API on initial startup.

#### Docker Compose Rebuilds

The local dev setup is set to proxy to versions of the API/UI running on the host machine for fast development/debugging in a myriad of IDEs/workflows as well as faster file watching. However, versions of the UI and API are running in the local dev Docker environment to mimic production builds and to have a performant working backup running at all times even if you're not running instances on your host environment. These will be out of date from recent changes and must be rebuilt/restared manually. To rebuild then restart a service (in this example the ui service) run:

```sh
docker compose build ui && docker compose up -d
```