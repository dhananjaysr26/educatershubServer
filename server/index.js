import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express();

import appRouter from "./routes/approuter.js";

// env configuration
dotenv.config()

app.use(express.json())
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))
app.use(cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}));

// Database
const PORT = process.env.PORT;
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`DB Connected! Server Running on PORT:${PORT}`)))
    .catch((err) => console.log(err.message))

app.use(express.static('public'))
app.use(appRouter);