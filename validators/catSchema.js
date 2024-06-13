import z from "zod";
const catSchema = z.object({
    nombre: z
    .string({
        required_error: "Campo requerido",
    })
    .min(1),

    sexo: z
    .string({
        required_error: "Campo requerido",
    })
    .min(1),
    raza: z
     .string({
        required_error: "Campo requerido"
     })
     .min(2),
    edad: z
    .string({
        required_error: "Campo requerido"
    })
    .min(4),
    descripcion: z
    .string({
        required_error: "Campo requerido"
    })
    .min(3),
    img: z.string()
 });

 export function validateCat(object){
    return catSchema.safeParse(object);
 }
 export function validatePartialCat(object){
    return catSchema.partial().safeParse(object);
 }

