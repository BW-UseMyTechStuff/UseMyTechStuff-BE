# UseMyTechStuff-BE


# Base Url</br>
`https://use-my-techstuff.herokuapp.com/`</br>


# Auth-Routes</br>
**POST `https://use-my-techstuff.herokuapp.com/api/auth/register**`</br>
-Accepts a username and password. Posts it to the db</br>
**POST `https://use-my-techstuff.herokuapp.com/api/auth/login**`
-Accepts a previously registered username and password. </br>While logged in it creates a session.</br>
**GET `https://use-my-techstuff.herokuapp.com/api/auth/logout**`</br>
-Simple get request. Used to end your session and protect your restricted routes again.</br>
</br>

# Restricted-Routes</br>
-Restricted Routes Require you to be logged in to access them.</br>
`GET https://use-my-techstuff.herokuapp.com/api/users/`</br>
To be used for testing purposes only. This get retrieves every user</br> that has been registered. Passwords are protected via hashing using bcryptjs</br>
**POST `https://use-my-techstuff.herokuapp.com/api/techstuff/newItem**`</br>
Must be logged in to post a new item to the database.</br>
</br>
</br>
# Techstuff-routes</br>
**GET `https://use-my-techstuff.herokuapp.com/api/techstuff/items**`</br>
A get request that gets all the items posted to our database.</br>
**PUT `https://use-my-techstuff.herokuapp.com/api/techstuff/:id**`</br>
If you want to update an item use this endpoint. It requires an id.</br>
**POST `https://use-my-techstuff.herokuapp.com/api/techstuff/newItem**`</br>
posts a new item to the techStuff table </br>
**POST**`https://use-my-techstuff.herokuapp.com/api/charge`</br>
This endpoint is to add some credit card functionality to our web app. </br>
**Post**`https://use-my-techstuff.herokuapp.com/api/techstuff/img/upload`</br>
tHis endpoint is shaky but works</br>



