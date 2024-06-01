import express from "express";
import cors from "cors";
import { router } from "./routes/routes.js"
const app = express();
const PUERTO = 4000;

app.use(express.json());
app.use(cors());

//Health-check para verificar que el servidor esta corriendo
app.get('/health', (req,res)=>{
    res.json({info: {status: "Ok", message:"Running"}})
})

app.use("/", router);

app.listen(PUERTO, ((err)=>{
    console.log(err? err: `Servidor escuchando en puerto http://localhost:${PUERTO}`)
}))