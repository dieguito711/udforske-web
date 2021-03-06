// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {
    const {
        user_id, //string
        author,
        text,
    } = req.body;

    return await db
        .collection("quotes")
        .doc()
        .set(
            {
                user_id, //string
                author,
                text
            }
        )
        .then(() => {
            console.log("Firebase 4 - Post Creado");
            res.status(200).json({ message: 'Post Creado', text })
            res.end();
        })
        .catch((error) =>
            console.log("Hubo un error creando el post", error)
        );

};