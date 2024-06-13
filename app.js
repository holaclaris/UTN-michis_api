import express from "express";
import cors from "cors";
import { router } from "./routes/routes.js"

const app = express();
const PUERTO = process.env.PORT || 4000;

//Middleware - funciones intermedias entre peticiones y respuestas
app.use(express.json());  //Interpretar json
app.use(cors());          //Manejar origen cruzado
app.use(express.urlencoded({ extended:true })); //Recibir info de un formulario en formato objeto.

//Health-check para verificar que el servidor esta corriendo
app.get('/health', (req,res)=>{
    res.json({info: {status: "Ok", message:"Running"}})
});

app.use("/", router);


app.listen(PUERTO, ((err)=>{
    console.log(err? err: `Servidor escuchando en puerto http://localhost:${PUERTO}`)
}))