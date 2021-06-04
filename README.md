# ABB Interview Assignment

## Introductions

This assignment is consists of both back-end and front-end implementations. 

The Back-end is little socket.io server that will stream the parts measurments on client's connections. Data is mocked by using random numbers provided by a mock data layer.

The Front-end is a react-js application builded using functional components, hooks and the context api for state management.
Socket.io-client module is included for back-end integration.

#

## Running instructions
### <b>Back-End</b>
Make sure nodejs & npm are installed in the running environment
1. Open a command line into the abb-service directory
2. run `npm install` to install server dependencies.
3. run `npm start` to run the server. A log should show up displaying the server's running port.

Default running port is 3001, but you can set-up the PORT environment variable in the running machine if you need to run the server in a different port. Please bare in mind that the same port needs to be configured in the front end for the application to run without any issue.


### <b>Front-End</b>
Make sure nodejs & npm are installed in the running environment
1. Open a command line into the abb-ui directory
2. run `npm install` to install front-end dependencies.
3. run `npm start` app will be running on port 3000
4. Open a browser and go to http://localhost:3000

#

## Next steps

1. Include dependency injection to better architect the code and decouple its layers.
2. Front-End Core components can be moved to a library to be reused in other project.
3. Include Front-End routing to support future views. 
4. Improve Back-end loggin system for a better troubleshooting.
5. Add packaging tooling to minify and uglify code in orderder to make a production delivery.
