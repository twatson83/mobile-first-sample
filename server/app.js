// @flow
import express from "express";
import http from "http";
import routes from "./routes";
import config from "./config";
import bodyParser from "body-parser";

export default function(callback : (Object) => void) : void {
    let app = express(),
        server = http.createServer(app);

    if (process.env.NODE_ENV === "production"){
        app.use(express.static('dist'));
    }

    app.use(bodyParser.json());
    app.use(express.static('client/public'));
    app.use(routes);

    server.listen(config.port, () => callback(app));
}