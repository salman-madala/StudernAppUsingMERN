Font End :
------------------

--> For to Create React app  we have to run  the command  : " npx create-react-app <appName> "

--> next we have to install router dom  for able to use routing in our application  . For this the command is   " npm i --save react-router-dom " 

--> here we have to import   " react-toastify " 

--> install  the  " axios  "  For : for making the api requests 

--> so now we install above three ata a time like the command  : " npm i -- save react-router-dom react-toastify axios "

--> next i create two folders one is components , pages

--> Inside pages i create About,AddEdit,Home.js,View.js .

--> Next i add some code snippets like "rafce"



--> Lets Work on the Routing :
------------------------------

--> For to Enable the route we need to bring some components from our  react-router-dom  which is already install before .

--> So now we import BroeserRouter,Switch,Route    fro the react-router-dom 

    Syntax : import {BrowserRouter , Switch, Router} from 'react-router-dom'
    ------

--> And add react toastify   also for that 

    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

--> Note :  here i use the reat-router-dom version os ^5.2.0  because here we can use Switch  tag .  After this version Switch tag is deffered.

--> next go to the header component an add the header code and import that inti main file which is app.js by using the syntax : <Header />

--> In Header.js file we import  useEffect, useState,Link,useLocation.
    1) useEffect : render the pag based on the url given in the  broserurl change.
    2) useLocation : it is used for to get the url from the browser.
    3) useState : hre w define the name of the Url.
    4) Link : it is used for to give the link (or) path .


--> Next we go the Home.js file 
--> In Home.js file we import the useEffect, useState,Link,anxios
    Axios : It is used for to make the api request.







Ex:  How to run Front End and Backend together in React.js and Express.js with 'concurrently' package :
      ---------------------------------------------------------------------------------------------------

--> Step 1: Install 'concurrently' by run the command  " npm install concurrently --save "
--> Step 2: Find the script start in package.json file . 
            By default the script looks like this  :  "start": "react-scripts start",
            First add concurrently to that script like this with backslashes and quote marks.
            "start": "concurrently \"react-scripts start\" ",
--> Step 3: "start": "concurrently \"react-scripts start\" \"cd backend && nodemon server\"",




















