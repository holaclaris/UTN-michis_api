import mysql2 from "mysql2/promise";

const dbConfig = {
    host: "localhost",
    user:"root",
    password: "",
    database: "gatos"
};

export const db = await mysql2.createConnection(dbConfig);

