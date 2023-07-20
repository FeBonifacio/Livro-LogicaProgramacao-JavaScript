
const express = require("express");
const router = express.Router();





const dbKnex = require("./data/db_config"); // dados de conexão com o banco de dados

// Método post é usado para inclusão
router.post("/", async (req, res) => {
    // faz a destruturação dos dados recebidos no corpo da requisção
    const { titulo, autor, ano, preco, foto } = req.body;

    // se algum dos campos nao foi passado, ira enviar uma msg de erro e retornar
    if (!titulo || !autor || !ano || !preco || !foto) { 
        res.status(400).json({ message:"Envie todas as informações!" })
        return;
    }

    // caso ocorra algum erro nainclusão, o programa ira capturar (catch) o error

    try{
        // insert, faz a inserção na tabela livros (e retorna o id do registro inserido)
        const novo = await dbKnex("livros").insert({ titulo, autor, ano, preco, foto });
        res.status(201).json({ id: novo[0] }); // statusCode indica Create
    } catch(e){
        res.status(400).json({ msg: e.message }); // retorna status de erro e msg
    }
});

// Método put é usado para alteração. id indica o registro a ser alterado
router.put("/:id", async (req, res) => {
    const id = req.params.id; // ou const { id } = req.params
    const { titulo, autor, ano, preco, foto } = req.body; // campo a ser alterado

    try {
        // altera o campo, no registro cujo id conicidir com o parametro passado
        await dbKnex("livros").update({ titulo, autor, ano, preco, foto }).where("id", id); // ou .where({ id})
        res.status(200).json();
    } catch (e) {
        res.status(400).json({ msg: e.message }); //retorna status de erro e msg
    }
});

// Método get é usado para consulta
router.get("/", async (req, res) => {
    try {
        // para obtert os livros pode-se utilizar .select().orderBy() ou apenas .orderBy()
        const livros = await dbKnex("livros").orderBy("id", "desc");
        res.status(200).json(livros);
    } catch (err) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
    }
});

// Método delete é usado para exclusão
router.delete("/:id", async (req, res) => {
    const { id } = req.params; // id do registro a ser excluído
    try {
        await dbKnex("livros").del().where({ id });
        res.status(200).json(); // stastusCode indica ok
    } catch (e) {
        res.status(400).json({ msg: e.message }); // retorna status de erro
    }
});

module.exports = router;