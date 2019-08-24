# UseMyTechStuff-BE


#Endpoints </br>


#Auth routes</br>
**POST /api/auth/register**</br>
-Accepts a username and password. Posts it to the db</br>
**POST /api/auth/login**
-Accepts a previously registered username and password. </br>While logged in it creates a session.
**GET /api/auth/logout**</br>
-Simple get request. Used to end your session and protect your restricted routes again.</br>
#Restricted Routes</br>
-Restricted Routes Require you to be logged in to access them.</br>
**GET /api/users/**</br>
To be used for testing purposes only. This get retrieves every user</br> that has been registered. Passwords are protected via hashing using bcryptjs</br>





