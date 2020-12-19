# sample-node-server
A demo nodejs service written in typescript


Service exposes two rest endpoints
1. Get /user :  to list all the users in the mongodb 'user' collection
2. Post /user : to add new users into the mongodb 'user' collection

Integrations used
1. Logging : Winston 
2. MongoDb : Mongoose
3. Unit/Api Test : Mocha, chai

Todo:
1. Dockerize the application
