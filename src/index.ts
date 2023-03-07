import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

dotenv.config();

if(!process.env.PORT){
    process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

//App Configuration section

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api/menu/items", itemsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});