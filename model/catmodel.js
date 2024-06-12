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
    static async updateById(gatoId, partialCat) {  //CHEQUEAR
        let partialQuery = "";
        for (const key in partialCat) {
            partialQuery += `${key} = '${partialCat[key]}',`;
        }
        partialQuery = partialQuery.slice(0, -1);

        console.log(gatoId);
        console.log(partialQuery);
        const [info] = await db.query(
            `UPDATE gatos.gatos SET ${partialQuery} WHERE gatos.id = ?`,
            [gatoId]
        )
        return info.affectedRows;
    }
}
