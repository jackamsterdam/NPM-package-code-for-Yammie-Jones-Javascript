#!/usr/bin/env node
function splashScreen() {
    console.log(`
                                                                                         
o   o                         o              8                     o               8      
'b d'                                        8                     8               8      
 'b'  .oPYo. ooYoYo. ooYoYo. o8 .oPYo.       8oPYo. o    o         8 .oPYo. .oPYo. 8  .o  
  8   .oooo8 8' 8  8 8' 8  8  8 8oooo8 ooooo 8    8 8    8 ooooo   8 .oooo8 8    ' 8oP'   
  8   8    8 8  8  8 8  8  8  8 8.           8    8 8    8         8 8    8 8    . 8 'b.  
  8   'YooP8 8  8  8 8  8  8  8 'Yooo'       'YooP' 'YooP8       oP' 'YooP8 'YooP' 8  'o. 
::..:::.....:..:..:....:..:..:..:.....::::::::.....::....8 ::::::...::.....::.....:..::...
::::::::::::::::::::::::::::::::::::::::::::::::::::::ooP'.:::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::...:::::::::::::::::::::::::::::::::
__________________________________________________________________________

Server is running on localhost...
Paste this url into your browser to see last days orders:  http://localhost:3001/api/orders/
Go To Postman and add an order with  POST http://localhost:3001/api/orders/

Here is some dummy data you can use in Postman to get started :
***I am connecting to a ClearDB database hence each order ID increments by 10 instead of 1.***
POST:
{
  "price": 40.99,
  "orderDate": "2022-09-28 09:41:22",
  "customerName": "Jones",
  "deliveryAddress": "205 Hudson St, New York, NY 10013, United States",
  "phone": "0584594576"
}

Thanks for using!
   `)
}

module.exports = splashScreen;



