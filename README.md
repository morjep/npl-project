## Project description
This is a project for the Udacity front-end development nano-degree.

The project consists of a
- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack
- Service worker - Workbox
- External API - Meaningcloud

The solution allows you to enter an URL on the webpage, which will then be sent to the meaningcloud sentiment analysis API.
The results are then presented on the webpage.
## Usage instructions

- Clone the project to your desired folder
- Install the required dependencies using
```
npm -i --legacy-peer-deps
```
- Verify that there are no installation issues
- Create a new .env file in the root of your project
- Go to meanincloud site and get a developer API key
- Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- Open two terminals at the root of the project
- In terminal 1 start the node.js server with:
```
npm run start
```
- In terminal 2 start the dev version of the front-end with:
```
npm run build-dev
```
