<h1 align="center">Welcome to Use My TechStuff 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/BW-UseMyTechStuff/UseMyTechStuff-BE#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/BW-UseMyTechStuff/UseMyTechStuff-BE/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/BW-UseMyTechStuff/UseMyTechStuff-BE/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/brybrythecodingguy">
    <img alt="Twitter: brybrythecodingguy" src="https://img.shields.io/twitter/follow/brybrythecodingguy.svg?style=social" target="_blank" />
  </a>
</p>

> This is a hub where you can rent buy or sell your electronics. I am building out the backend. There is a team building out the fe you can check that out here

### 🏠 [Homepage](https://github.com/BW-UseMyTechStuff/UseMyTechStuff-BE#readme)

## Install

```sh
npm run server
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Bryce Soghigian**

* Twitter: [@brybrythecodingguy](https://twitter.com/brybrythecodingguy)
* Github: [@Bryce-Soghigian](https://github.com/Bryce-Soghigian)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/BW-UseMyTechStuff/UseMyTechStuff-BE/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Bryce Soghigian](https://github.com/Bryce-Soghigian).<br />
This project is [MIT](https://github.com/BW-UseMyTechStuff/UseMyTechStuff-BE/blob/master/LICENSE) licensed.
## Tables 
### Users Table
`users.text('username', 200).notNullable().unique();`</br>
`users.text('password', 200).notNullable();`</br>
`users.text('birthday').notNullable();`</br>
`users.text('email').notNullable();`</br>
### TechStuff Table</br>
`stuff.text('username', 200).unique();`</br>
`stuff.text('email', 200).unique();`</br>
`stuff.text('item', 50);`</br>
`stuff.text('description', 4000);`</br>
`stuff.text('price', 100)`</br>
`stuff.text('category',100);`</br>
`stuff.text('product-lifetime',200);`</br>
`stuff.text('model-num',35);`</br>
`stuff.text('features-1',2000);`</br>
`stuff.text('features-2',2000);`</br>
`stuff.text('features-3',2000);`</br>
`stuff.text('features-4',2000);`</br>
`stuff.text('features-5',2000);`</br>
`stuff.text('status',2000);`</br>
`stuff.text('warranty',200);`</br>
`stuff.text('sku-num',2000);`</br>
## Endpoints
# Base Url</br>
`https://use-my-techstuff.herokuapp.com/`</br>


# Auth-Routes</br>
**POST** `https://use-my-techstuff.herokuapp.com/api/auth/register`</br>
-Accepts a username and password. Posts it to the db</br>
**POST** `https://use-my-techstuff.herokuapp.com/api/auth/login`
-Accepts a previously registered username and password. </br>While logged in it creates a session.</br>
**GET** `https://use-my-techstuff.herokuapp.com/api/auth/logout`</br>
-Simple get request. Used to end your session and protect your restricted routes again.</br>
</br>

# Restricted-Routes</br>
-Restricted Routes Require you to be logged in to access them.</br>
**GET**` https://use-my-techstuff.herokuapp.com/api/users/`</br>
To be used for testing purposes only. This get retrieves every user</br> that has been registered. Passwords are protected via hashing using bcryptjs</br>
**POST** `https://use-my-techstuff.herokuapp.com/api/techstuff/newItem`</br>
Must be logged in to post a new item to the database.</br>
</br>
</br>
# Techstuff-routes</br>
**GET** `https://use-my-techstuff.herokuapp.com/api/techstuff/items`</br>
A get request that gets all the items posted to our database.</br>
**PUT** `https://use-my-techstuff.herokuapp.com/api/techstuff/:id`</br>
If you want to update an item use this endpoint. It requires an id.</br>

**POST**`https://use-my-techstuff.herokuapp.com/api/techstuff/newItem`</br>
posts a new item to the techStuff table </br>
**POST**`https://use-my-techstuff.herokuapp.com/api/charge`</br>
This endpoint is to add some credit card functionality to our web app. </br>
**POST**`https://use-my-techstuff.herokuapp.com/api/techstuff/img/upload`</br>
tHis endpoint is shaky but works</br>

