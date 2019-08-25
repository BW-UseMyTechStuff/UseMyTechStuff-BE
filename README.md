# UseMyTechStuff-BE


# Endpoints </br>


# Auth-Routes</br>
**POST /api/auth/register**</br>
-Accepts a username and password. Posts it to the db</br>
**POST /api/auth/login**
-Accepts a previously registered username and password. </br>While logged in it creates a session.
**GET /api/auth/logout**</br>
-Simple get request. Used to end your session and protect your restricted routes again.</br>
</br>

# Restricted-Routes</br>
-Restricted Routes Require you to be logged in to access them.</br>
**GET /api/users/**</br>
To be used for testing purposes only. This get retrieves every user</br> that has been registered. Passwords are protected via hashing using bcryptjs</br>
**POST /api/techstuff/newItem**</br>
Must be logged in to post a new item to the database.</br>
</br>
</br>
# Techstuff-routes</br>
**GET /api/techstuff/items**</br>
A get request that gets all the items posted to our database.</br>
**PUT /api/techstuff/:id**</br>
If you want to update an item use this endpoint. It requires an id.</br>
**POST /api/techstuff/newItem**</br>
posts a new item to the techStuff table </br>




