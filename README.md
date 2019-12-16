# Chatbot

Command to start local server [npm run dev] (In the folder chatbot)

**PORTS**
1. Backend: 5000
2. Frontend: 3000

# Softwares to Install

1. node.js [from the internet] (I used versoin 12.13.0)
2. Express [npm install express --save] (In the folder chatbot)
3. nodemon [npm install nodemon --save -dev] (In the folder chatbot)
4. Body Parser [npm install body-parser --save] (In the folder chatbot)
5. DialogFlow [npm install dialogflow --save] (In the folder chatbot)
6. NPX-React [npx create-react-app client] (In the folder chatbot)

**After this command the folder "client" will be created, inside "client" you'll find a folder titled "src", delete this folder. The main project folder that you cloned has a "src" folder as well, put this "src" inside the folder "client". In other words replace the "client/src" folder with the "chatbot/src" folder**

7. Concurrently [npm install concurrently --save-dev] (In the folder chatbot)
8. Proxy [npm install http-proxy-middleware --save-dev] (In the folder **client**)
9. Materialize [npm install materialize-css --save] (In the folder **client**)
10. Axios [npm install axios --save] (In the folder **client**)

You'll have to change the config/keys.js file because the googleClientEmail and the googlePrivateKey parameters used are for my Google Account
