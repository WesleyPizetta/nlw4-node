import express from 'express';

const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica (só uma informação, por exemplo uma imagem)
 */

// 1 parametro => Rota (recurso)
// 2 parametro => Request/Response

 // http://localhost:3333/users
app.get("/", (request, response) => {
    return response.json({user: "Wes", age: 21, email: "wesleypizetta@hotmail.com", message: "E aí, beleza?"})
});

app.post("/", (req, res) => {
    // *dados recebidos para salvar
    return res.json({message: "Os dados do usuário foram salvos com sucesso!"})
})

app.listen(3333, () => console.log("Server rodando!"));