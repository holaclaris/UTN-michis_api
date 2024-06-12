import {CatModel} from "../model/catmodel.js";    //Import del modelo
import {validateCat, validatePartialCat} from "../validators/catSchema.js"; //Import del validador que usare en post y patch

 export class GatosController{
    static async getAllCats(req,res){
        const gatos = await CatModel.getAll();
        gatos
        ? res
            .status(200)
            .json({info: {status: 200, message: "Ok"}, data: gatos})
        : res
            .status(404)
            .json({info: {status: 404, message: "No encontrado"}});
        }

    //Filtrar por raza
        static async searchByBreed(req,res){
            const { raza } = req.query;
            const filteredByBreed = await CatModel.searchByBreed(raza);
            if (!filteredByBreed){
                res.json({ info: { status: 404, message: "No hay gatos de esa raza" } });
            } else {
              res.json({ info: { status: 200, message: "Ok" }, data: filteredByBreed });
            }

        }
    //Filtrar por id
        static async getById(req,res){
            const { gatoId } = req.params;
            const gato = await CatModel.searchById(gatoId);
            gato
             ? res
                .status(200)
                .json({info: {status: 200, message: "Ok"}, data: gato})
             : res
                .status(404)
                .json({info:{status: 404, message:"Gato no encontrado"}});
        }

    //Eliminar gato por id
        static async deleteById(req,res){
            const { gatoId } = req.params;
            const info = await CatModel.deleteById(gatoId);
            if (info>0){
                res.status(200).json({status: 200, message: "Gato eliminado"});
            } else {
                res.status(404).json({status: 404, message: "Gato no encontrado"});
            }
        }
    //Crear nuevo gato
    static async createCat(req,res){
        const {nombre, sexo, raza, edad, descripcion, img } = req.body;
        const validationResult = validateCat({
            nombre,
            sexo,
            raza,
            edad,
            descripcion,
            img
        });
        if (validationResult.error){
            res
            .status(422)
            .json({info:{status: 422, message: "Errores de validacion"},
             errors: validationResult.error.issues});
        }

        const gatoCreado = await CatModel.createOne({
            ...validationResult.data
        });
        gatoCreado
         ? res.status(201).json({info: {status: 201, message: "Gato creado!"},
        data: {...validationResult.data}
    })
        : res  
            .status(500)
            .json({info: {status: 500, message: "Error interno del servidor"}});
    }

 //Actualizar gato existente
    static async updateById(req,res){
        const { gatoId } = req.params;
        const esGato = await CatModel.searchById(gatoId);
        if (esGato === null){
            return res
                    .status(404)
                    .json({info:{status: 404, message: "Gato no encontrado"}});
        }

        const validationResult = validatePartialCat(req.body);
            if(validationResult.error){
                return res.status(422)
                          .json({info: {status: 422, message: "Errores de validacion"},
                        errors: validationResult.error.issues});
            }
            if(!Object.keys(validationResult.data).length){
                return res.status(422)
                          .json({info: {status: 422, message: "Debe incluir al menos un campo valido"}});
            }
            const gatoActualizado = await CatModel.updateById(
                gatoId,
                validationResult.data
            );
            gatoActualizado
            ? res.status(200).json({
                info: {status: 200, message: "Gato actualizado con exito!"},
            })
            : res.status(500)
                 .json({info:{status: 500, message: "Error interno del servidor"}});
    }

}
