# Yammie Restaurant Backend Project by Jack Amsterdam in JAVASCRIPT **&copy;**

CLI Commands for connecting to a server, which gives you last day's orders and option to add an order.

This repository shows how I made a global package in NPM. 

Please go here: https://www.npmjs.com/package/yammie-restaurant-backend-for-jones-by-jack-in-javascript

*If you git clone this respository you will need to connect your own database. If you download the package from NPM a database is already connected. 

If you had issues running the program or you enjoyed my project please contact me on Linkedin: https://www.linkedin.com/in/jack-amsterdam/

## Installation:

This is a global cli package so use flag -g

npm i -g yammie-restaurant-backend-for-jones-by-jack-in-javascript

To run type this in the terminal:

jackandjones

Now you have a running server with access to recent orders and option to add a new order

(through postman or React).

**I am connected to a ClearDB database hence each order ID increments by 10 instead of 1.

For help after you download type: jonesandjack --help

There is a javascript and typescript version of the code on my Github.

[https://github.com/jackamsterdam/Yammie-Restaurant-Jones-Backend-by-Jack-with-Javascript](https://github.com/jackamsterdam/Yammie-Restaurant-Jones-Backend-by-Jack-with-Javascript)   

[https://github.com/jackamsterdam/Yammie-Restaurant-Jones-Backend-by-Jack-with-Typescript](https://github.com/jackamsterdam/Yammie-Restaurant-Jones-Backend-by-Jack-with-Typescript)

**Summary:**

Yammie restaurant is expanding its services online and I was asked to build a REST API for the backend with Node.js for online orders. I then built the rest according to Node's Layered Architecture. This REST allows you to get all of last day's orders as well as add an order. Code is production ready.

The server is also deployed on Heroku - To see the last days orders go to:

[https://yammie-backend-jones-by-jack.herokuapp.com/api/orders](https://yammie-backend-jones-by-jack.herokuapp.com/api/orders)


### *Summary of stages I took in building this project:*

I made a Database in mySQL called YammieDB and I added a Table called orders. I then inserted  a couple of orders. Each order has an auto incremented order id , price, order date, customer name, phone and address for delivery.

I exported the database and put the file in the Database folder. To run the program in phpMyAdmin you need to import the file from this folder in the import tab in phpMyAdmin (after you ran Apache and mySQL on port 3306 using XAMPP).

#### In my Backend folder where node is I have the following Directory Structure dividing my files by Node's Layered Architecture ???????? ???????????? -

1. Utils folder -  with a config file - where all my configurations go so If I want to change anything in the future I only need to apply the changes here. I also have a file called log-helper which uses Winston library to log requests in the format I specified and I display all requests and errors in logger.log file for informative logging.
2. Middleware folder - with the following middleware's  - an error handler to catch all errors thrown from any layer ( a catch all for all errors), I have a log-requests file which is middleware that logs every request to the logger.log file. I also have a sanitize file to prevent xss attacks so users can't for example send me a string with a script tag - it  will strip the tags.
3. Model folder - this is how the data is coming and represented from the mySQL database YammieDB.

I built an OrderModel and an onlineOrderModel. So I am extending  the Base class OrderModel with  OnlineOrderModel to support orders that are online for Yammie restaurant. I also have an errorModel class for error handling. These classes are used because I do not want to work with object literals. These object's are repeating themselves multiple times in my code so I made a class and then I made instances of a class. For example with the errorModel I have a status and message  and this saves me from making mistakes e.g. writing statussss instead of status. Additionally I am turning the request.body which is a literal object into an instance of an OnlineOrderModel class so now that request.body has all the methods of that class (has all Joi validation methods for example). This makes my program more object oriented.

# **Layers:**

So, one of layered architecture's goals is to separate concerns among components. Another goal is to organize layers so they can perform a specific role within the app. I have the data access layer connecting to the database, business logic layer for all the logic and a controller layer with routes returning a response from the server.

Throughout the layers in each step I am returning a promise using async await syntax because it takes time for data to come back from the database and javascript is single threaded so I do not want to hog the call stack with each request.

4. Data access Layer folder - contains  a dal file that connects to the database. Since node's original functions in 2009  did not work with promises but with callbacks I had to  promisify the execute function. So the function returns a promise. I added a "values" parameter in order to prevent sql injections so characters will be escaped. Notice that my connection is using the config file so If you want to connect to a different database all you need is to change is the config file.
5. Business Logic Layer folder - contains order logic file that gets All the orders by last day and returns a promise and also adds a new order and returns a promise.
6. Controller Layer folder - contains orders controller - using express.Router() to have the routes here instead of in app.js. Contains two routes that frontend can surf too.

app.ts - Instead of having all the above in app.ts I separated everything into layers. Here we start a server and  listen on port 3001 for connections as defined in my **.env** file which holds my environment variables.

# **Security**

I am using cors package so React frontend project, which usually runs on http://localhost:3000, won't have a cross origin issue.

I am using expressRateLimit package to prevent DOS attacks and limiting to 10  clicks per second and if you exceed you get an HTTP error  code and message: 429 (Too Many Requests).

I am using sanitize middleware to prevent xss attacks. As well as log requests middleware to log all requests and errors to a logger.log file using the winston library for informative logging.

If path is not found than my server.use(*) middleware will throw a HTTP error code of  404 Route not found error.

At the end of the app.js file you can see the errors-handler middleware to catch all errors that came from all layers. (Throwing errors in business logic and using next(err) to pass error to the err middleware).

You can see that all request and all errors are caught and displayed in logger.log using winston library.

For example in logger.log file the errors are displayed like this (because of my log-helper and log-request files which this middleware was added in app.js):

info    2022-09-18 01:01:46 GET Request to /api/orders/  (Good route)

info    2022-09-18 01:02:07 GET Request to /api/productssss  (Bad Route)

info    2022-09-18 01:02:07 Route not found   (Error Message)

# **TESTING - relevant only if you git cloned my github repository**

Type in terminal: npm run test

Added tests folder: app.spec.js - Using mocha and chai I tested the REST API - /Get orders in last day and /Post new order, as well I tested with  error cases.

*Other options:*

Import  *"Yammie.postman_collection.json"*   to Postman and test the REST API there.  ( added edge cases of possible errors (400 Bad Request  and 404 Route not found)) All errors ended up in errors-handler middleware.

Another option - Need to download *"REST Client"* extension in VSCode and you can check the server with the  restCLientExt.http file I provided.

# **EDGE CASES:**

If there are no orders in the last day I return 200 with a message - 'No orders in the last day.

I added Joi validation when adding a new order:

???????????? ??????:

-Forbidden to add new ID - because POST with REST  adds a new Id from the database ( According to REST Architecture you are not supposed to send ID with POST)

-All fields are required besides order Id

-Price must be a number up to 100,000

-orderDate must be a date greater than today

-customerName must be a string with max 30 characters

-deliveryAddress must be a string with max 100 characters

-phone must be a string with max 15 characters (using varchar (not int) in mysql -because of 0.)

# Please check out my info:

https://www.linkedin.com/in/jack-amsterdam/

https://github.com/jackamsterdam

https://wakatime.com/@jackamsterdam

https://www.npmjs.com/~jackamsterdam

THANKS, AND HAVE A HAPPY DAY
