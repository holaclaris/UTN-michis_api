import { Router } from "express";
export const router = Router();
import {GatosController} from "../controllers/controllers.js";

//Ver todos los gatos
router.get("/", GatosController.getAllCats);

//Crear nuevo gato
router.post("/", GatosController.createCat);

//Actualizar por id
router.patch("/:gatoId", GatosController.updateById);

//Buscar por raza
router.get("/search", GatosController.searchByBreed);

//Obtener gato por id
router.get("/:gatoId", GatosController.getById);

//Eliminar por id
router.delete("/:gatoId", GatosController.deleteById);

