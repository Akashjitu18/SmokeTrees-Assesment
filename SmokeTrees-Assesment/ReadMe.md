to ensure the working of the backend run command

node server.js

in the terminal we see:

MongoDB connected
Server is running on http://localhost:3000


Open Postman or a similar tool
Create a new POST request to http://localhost:3000/api/users/register

Set the body type to JSON and enter the following:

{
  "name": "Akash J",
  "address": "#123, 3rs cross, Nagarbhavi, Bangalore, Karnataka, India"
}


I have attacked the snapshot of postman to ensure the correct working of the backend 