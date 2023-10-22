# Backend for diploma project [Yandex Practicum]

## Built with
 - Node.js
 - MongoDB 
 - Nginx

## Demo
Here is a working live demo :  https://mfilinov.nomoredomains.rocks/api/

frontend available on https://mfilinov.nomoredomains.rocks

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
###

1. Clone the repository and install dependencies:
```shell
git clone https://github.com/mfilinov/movies-explorer-api.git && cd movies-explorer-api
```
2. Put ssl certs to `ssl/` folder and change domain name in nginx configuration file

3. Build and start infrastructure via docker-compose
```shell
sudo docker-compose up -d --build
```

</details>

## To-do
- Rewrite on django rest framework :-)
