Pre requisites : 
----------------
-->Basic knowleg on html, css, java script with ES6+ concepts  (url for this conepts : https://codequs.com/p/r1U2DMtHL)
--> Node , vs code for dveloping tools.


--> Install nestjs globally by run the command   " npm i -g @nestjs/cli " 
--> For to Create new Project run the command  : " nest new <prjectname> "


--> for to create new module run the command : " " nest g module <modulename>

--> for to import mongo db connection e hav to import mondoose . o the command is : npm install --save @nestjs/mongoose mongoose

--> Once the installation process is complete, we can import the MongooseModule into the root AppModule.

--> For to Create Schema we use @Schema Decorater.

--> Next we create schema inside the schema folder which as ceated by us.

--> next import that schema insid the module related to that.

--> in that module we register our schema in mongoose by using the mthod  " forFeature() " .
--> This method is provided by the mongoose. it is used for to regiter our model in db.

-> next we hav to inject our modle in service also by using @Injectable decorator.













