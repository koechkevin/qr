import express, { Express, static as staticServe } from 'express';
import { createServer, Server } from 'http';
import path from 'path';
import { config as envConfig } from 'dotenv';

envConfig();

const app: Express = express();

const server: Server = createServer(app);

const DIST: string = path.resolve(__dirname, 'build');
app.use(staticServe(DIST));

const PORT: number = parseInt(process.env.PORT || '4000', 10);

server.listen(PORT, () => console.log(PORT));
