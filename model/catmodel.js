import { db } from "../dbConnection.js";

export class CatModel {
    //Obtener todos los gatos
    static async getAll() {
        const [gatos, _info] = await db.query(
            `SELECT 
            gatos.id,
            gatos.nombre,
            gatos.sexo,
            gatos.raza,
            gatos.edad,
            gatos.descripcion,
            gatos.img
            FROM gatos.gatos
            `
        );
        return gatos.length ? gatos : null;
    }

    //Busqueda general por cualquier match
    //NOTA PARA EL FRONT: fetch(`http://localhost:4000/search-all?todo=${datoBuscado}`)

    static async searchByAny(datoBuscado) {
        const busqueda=`%${datoBuscado}%`

        const [gatos, _info] = await db.query(
            `SELECT * FROM gatos.gatos WHERE 
            (gatos.nombre LIKE ?) 
            OR (gatos.sexo LIKE ?) 
            OR (gatos.raza LIKE ?) 
            OR (gatos.edad LIKE ?) 
            OR (gatos.descripcion LIKE ?) 
            OR (gatos.img LIKE ?)`
            , [busqueda, busqueda, busqueda, busqueda, busqueda, busqueda]
        );
        return gatos.length ? gatos : null
    }


    //Buscar por raza
    static async searchByBreed(raza) {
        const [gatos, _info] = await db.query(
            `
            SELECT
            gatos.id,
            gatos.nombre,
            gatos.sexo,
            gatos.raza,
            gatos.edad,
            gatos.descripcion,
            gatos.img
            FROM gatos.gatos
            WHERE gatos.raza = ?
            `, [raza]
        );
        return gatos.length ? gatos : null
    }

    //Buscar por id
    static async searchById(gatoId) {
        const [gato, _info] = await db.query(
            `SELECT
            gatos.id,
            gatos.nombre,
            gatos.sexo,
            gatos.raza,
            gatos.edad,
            gatos.descripcion,
            gatos.img
            FROM gatos.gatos
            WHERE gatos.id = ?
            `, [gatoId]
        );
        return gato.length ? gato : null;
    }

    //Eliminar por id
    static async deleteById(gatoId) {
        const [info] = await db.query(
            `DELETE FROM gatos.gatos
            WHERE id = ?`, [gatoId]
        );
        return info.affectedRows;
    }

    //Crear nuevo gato
    static async createOne(gato) {
        const { nombre, sexo, raza, edad, descripcion, img } = gato;
        const [result, info] = await db.query(
            `INSERT INTO gatos.gatos (nombre, sexo, raza, edad, descripcion, img)
            VALUES
            (?,?,?,?,?,?)`, [nombre, sexo, raza, edad, descripcion, img]
        );
        return result ? result : null;
    }

    //Actualizar por id
    static async updateById(gatoId, partialCat) {
        let partialQuery = "";
        for (const key in partialCat) {
            partialQuery += `${key} = '${partialCat[key]}', `;
        }
        partialQuery = partialQuery.slice(0, -2);

        console.log(partialQuery);
        const [info] = await db.query(
            // `UPDATE gatos.gatos SET ${partialQuery} WHERE id = ?`, [gatoId]
            `UPDATE gatos.gatos SET ${partialQuery} WHERE id = ${gatoId}`
        )
        return info.affectedRows;
    }

}
