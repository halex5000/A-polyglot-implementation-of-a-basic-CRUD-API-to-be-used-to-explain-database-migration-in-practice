import process from 'node:process';
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

if (!process.env.PORT) {
	throw new Error('no PORT defined');
}

const port: number = Number.parseInt(process.env.PORT, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
