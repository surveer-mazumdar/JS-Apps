# RESTfulAPI

npm start

This is a secure RESTful API using node.js,express.js and JWT authentication
POST /api/v1/auth/register   (Register a User)
POST /api/v1/auth/login      (Login the user)
GET /api/v1/users/:userId    (Get logged in user details)


POST /api/v1/auth/register HTTP/1.1
Host: localhost:3000
Content-Type: application/json
cache-control: no-cache
Postman-Token: c7813ec8-af4c-43ec-9a5f-7d9534082fc7

{
	"name" : "Surveer Mazumdar",
	"email": "surveer.mazumdar@gmail.com",
	"password": "password"

}



POST /api/v1/auth/login HTTP/1.1
Host: localhost:3000
Content-Type: application/json
cache-control: no-cache
Postman-Token: a82fbdf0-4e9c-4d14-884e-e799f8ab94db

{
	"email": "surveer.mazumdar@gmail.com",
	"password": "password"

}

Response
{
    "status": true,
    "msg": "user login successfully",
    "email": "surveer.mazumdar@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNGU5MDI2MDQ4YWJjMTA5MGFjNjQ5YSIsImlhdCI6MTU2NTQzMDAwMywiZXhwIjoxNTY1NTE2NDAzfQ.leH6ilwfCkd5yuGgIt1v541Qrc8W5oCSCTLZn4YTZOk"
}


Get UserId from JWT Token

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNGU5MDI2MDQ4YWJjMTA5MGFjNjQ5YSIsImlhdCI6MTU2NTQzMDAwMywiZXhwIjoxNTY1NTE2NDAzfQ.leH6ilwfCkd5yuGgIt1v541Qrc8W5oCSCTLZn4YTZOk';
console.log(JSON.parse(atob(token.split('.')[1])))

[object Object] {
  exp: 1565516403,
  iat: 1565430003,
  id: "5d4e9026048abc1090ac649a"
}




GET /api/v1/users/5d4e9026048abc1090ac649a HTTP/1.1
Host: localhost:3000
Content-Type: application/json
x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNGU5MDI2MDQ4YWJjMTA5MGFjNjQ5YSIsImlhdCI6MTU2NTQzMDAwMywiZXhwIjoxNTY1NTE2NDAzfQ.leH6ilwfCkd5yuGgIt1v541Qrc8W5oCSCTLZn4YTZOk
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: 1264f8b2-18ac-4438-a3cd-a5aaaeb62faa,7ce22463-c322-4cf6-a3a0-8f75e1eecf8b
Host: localhost:3000
Accept-Encoding: gzip, deflate
Connection: keep-alive
cache-control: no-cache


{
    "status": true,
    "msg": " user fetched successfully",
    "data": {
        "_id": "5d4e9026048abc1090ac649a",
        "name": "surveer mazumdar",
        "email": "surveer.mazumdar@gmail.com"
    }
}