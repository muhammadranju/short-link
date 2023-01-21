require("dotenv").config();
const http = require("http");
const app = require("./app/app.js");
const PORT = process.env.PORT || 5400;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}}`);
});
