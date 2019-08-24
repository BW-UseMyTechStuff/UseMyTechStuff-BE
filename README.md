# UseMyTechStuff-BE


#Endpoints 


#Auth routes
**POST /api/auth/register**
-Accepts a username and password. Posts it to the db
**POST /api/auth/login**
-Accepts a previously registered username and password. While logged in it creates a session.
**GET /api/auth/logout**
-Simple get request. Used to end your session and protect your restricted routes again.
#Restricted Routes
-Restricted Routes Require you to be logged in to access them.
**GET /api/users/**
To be used for testing purposes only. This get retrieves every user that has been registered. Passwords are protected via hashing using bcryptjs





