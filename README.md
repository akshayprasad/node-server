# node-server

NodeJS Restify middleware Server

## Installation

Example: macOS, windows, etc.


```js

    node -v                         // Check node version
    npm -v                          // Check npm version
    npm install npm -g              // To install the latest npm version
    
```

### Install node 

Visit the site https://nodejs.org/en/  and download machine specific node.

### Install dependencies

```js
    
    npm install     // Saves all the dependencies and will provide a node_modules

```

<br />

## Running and building

### To run entities

```js

    npm start  // Start the server

```
Note: 
<b>Once the server is up, access localhost:3001/</b>

#### Sample API's
1) http://localhost:3001/api/users/get
2) http://localhost:3000/api/users/get/1

To kill or stop the process that's running.
<ul>
    <li>use <b>Ctrl-c</b>.</li>
</ul>

### Production build

```js

    npm run serverbuild          // Generates the build the copies to server code to public folder
    npm run startbuildnode           // It will run in 3001 port by default 

```