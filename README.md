# getting-started-with-typescript
# Install typescript globally
1. npm install -g typescript

# generate tsc.json configuration file
1. tsc --init

# build and run code (manually)
1. tsc
2. node dist/index.js 
3. npm add --save-dev @types/node // to use js package in typescript

# build and run code (webpack)
1. npm install webpack webpack-cli ts-loader webpack-dev-server -D
2. touch webpack.config.js
3. create a "build":"webpack" inside package.json file
```json
 "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
