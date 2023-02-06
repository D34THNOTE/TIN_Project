# TIN_Project

This is a simple website with a few tabs(Products, Orders and Ordered products) where we can execute some basic operations applications with front-end and back-end are
known for. There is adding records(responsive, e.x. adding a new Order makes that "order" assignable to a new or existing "Ordered product"), editing and deleting them. 
The user can log in(using email: test@gmail.com, password: 123 ), without doing so the user is unable to view any records or perform any operations - there is 
a basic authorization model utilizing tokens

The project is made using React.js library for front-end and Node.js(Express) for back-end which utilizes MongoDB and MySQL databases "hosted" on the Docker application

To run:
1. Clone the repository
2. (while the Docker is running) Using command line while in the directory with the "docker-compose.yampl" file run "docker-compose up" - this will create a container in
your Docker with 3 entities - PhpMyAdming, MongoDB(not used by the app) and a MySql database running on port 3306
3. Before running the application make sure that the newly created MySql database is running(i.e. nothing occupies the 3306 port - that may especially be the case if
you are running another databse on the 3306 port, which the default MySql port)
4. (using command line)Run "npm start" command separately in "tin" folder(inside nodejs) and then in "tin-react-app"(inside reactjs)

4a. Alternatively, if you have Webstorm installed, you can open these projects in that application, then open package.json file and press the "run" 
button(green triangle), the one next to "start"

If done correctly at this point you should be able to see the website on URL http://localhost:8000/, it should open by itself when the React app is ready

If you're not logged in already or the token is invalid you can log in using:
email: test@gmail.com
password: 123
check the captcha checkbox, or don't and see the error when you try to log in!
