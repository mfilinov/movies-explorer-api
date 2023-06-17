# Backend for diploma project [Yandex Practicum]

## Built with
 - Node.js
 - MongoDB 
 - Nginx

## Demo
Here is a working live demo :  https://mfilinov.nomoredomains.rocks/api

## Routes

### Get current user info
`GET /users/me`

### Update current user info
`PATCH /users/me`

### Get list of favorites movies
`GET /movies`

### Save movie to favorites 
`POST /movies`

### Delete movie from favorites
`DELETE /movies/movieId`


<details>
<summary>
Scripts
</summary> <br />

> **Note**
> : it is also possible to start development with GitHub Codespaces, when navigating to `< > Code`, select `Codespaces` instead of `Local`. Click on either the `+`-sign or the `Create codespace on master`-button.

Amplication is using a monorepo architecture - powered by <a href="https://nx.dev">Nx Workspaces</a> - where multiple application and libraries exist in a single repository. To setup a local development environment the following steps can be followed:

###


1. Clone the repository and install dependencies:
```shell
git clone https://github.com/mfilinov/movies-explorer-api.git && cd movies-explorer-api
```
2. Running the required infrastructure
```shell
sudo docker-compose up -d
```

5. To start developing, run one or more of the applications available under `serve:[application]` scripts of the package.json.

```shell
# running the server component
npm run serve:server

# running the client component
npm run serve:client

# running the data-service-generator component
npm run serve:dsg

# running the git-pull-request-service component
npm run serve:git

# running the plugin-api component
npm run serve:plugins
```

</details>

## To-do
- Rewrite on django rest framework :-)
