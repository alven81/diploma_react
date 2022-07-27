### Project in progress...
-----
# How to test:

## 1. Clone repo:

```js
git clone https://github.com/alven81/diploma_react.git
```
-----
## 2. Run project (use different terminals for json-server and projects)
### - for KREATIVE react edition:

```js
cd kreative
npm install --legacy-peer-deps     //install dependencies
npm run json    //run local json server
npm start       //start project
```

### - for KREATIVE react-native edition (use KREATIVE's json-server):

```js
cd kreative
npm install     //install dependencies
npm run json    //run local json server (for access to http://localhost:3004/)
npm start       //start project (for access to http://localhost:3000/)
cd ..
cd native
npm install     //install dependencies
npm start       //start project
w               //project adopted for web preview, so select web
```
- select mobile preview, dimensions for iPhone 12 Pro or analog in your browser.

Utils links:

https://reactnavigation.org/
