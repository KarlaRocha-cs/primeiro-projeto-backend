const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://bit.ly/3LJLyOF',
        minibio: 'Desenvolvedora e Instrutora',
    },
    {
        nome: 'Karla Novato',
        imagem: 'https://bit.ly/3JCXBqP',
        Minibio: 'gerente de projetos',
    },
    {
        nome: 'Fernanda Falcao',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'diretora',
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)