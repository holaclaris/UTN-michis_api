import { Router } from "express";
import {GatosController} from "../controllers/controllers.js";

export const router = Router();

//Ver todos los gatos
router.get("/", GatosController.getAllCats);

//Crear nuevo gato
router.post("/", GatosController.createCat);

//Actualizar por id
router.patch("/:gatoId", GatosController.updateById);

//Buscar por raza
router.get("/search", GatosController.searchByBreed);

//Buscar por id
router.get("/:gatoId", GatosController.getById);

//Eliminar por id
router.delete("/:gatoId", GatosController.deleteById);

