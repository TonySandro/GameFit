const Quest = require("../repository/quests");

cadastrarMissoes = async (req, res, next) => {
    try {
        const quests = req.body
        await Quest.setQuests(quests)
        return res.status(200).json({ message: "Nova missão cadastrada." })
    } catch (error) {
        next();
        return res.status(400).json({ message: error })
    }
},

    buscarMissoes = async (req, res, next) => {
        try {
            const quests = []
            const itens = await Quest.readQuestsData().then(res => {
                return res
            })
            // console.log('quests ', itens)

            itens.forEach(dados => {
                quests.push(
                    {
                        exercicios: dados.val().exercicios,
                        pontos: dados.val().pontos,
                        titulo: dados.val().titulo
                    }
                )
            });

            // console.log(quests)

            if (quests.length != 0) {
                return res.json(quests)
            }
            return res.status(400).json({ erro: "Nenhum dado encontrado." })
        } catch (error) {
            next();
            console.log(error)
            return res.status(500).json({ message: "Internal server error", error: error })
        }
    }

module.exports = {
    buscarMissoes,
    cadastrarMissoes
}