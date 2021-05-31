const firebase = require('../services/firebase')

async function readUserData() {
    try {
        return firebase.database().ref('usuarios').once('value')
    } catch (error) {
        return error;
    }
}

async function setAtleta(user) {
    let user_id = false;
    // let user_key = Math.random().toString(36).substr(2, 9);

    

    if (!user_id) {
        user_id = firebase
            .database()
            .ref()
            .child('usuarios')
            .push().key;
    }

    const user_data = {
        nome: user.nome,
        usuario: user.usuario,
        senha: user.senha,
        exp: user.exp,
        patente: user.patente,
        key: user_id
    }

    let updates = {}
    updates['/usuarios/' + user_id] = user_data;
    // updates2[`/usuarios/${user_id}`] = user_id;

    let usuario_ref = firebase.database().ref();
    usuario_ref.update(updates)
        .then(() => {
            return { success: true, message: "Ok" }
        })
        .catch((error) => {
            return { success: false, message: `Erro: ${error.message}` }
        })
}

async function updatePontos(exp, key) {
    let usuario_ref = firebase.database().ref('/usuarios/' + key)

    let updates = {}
    updates['/exp'] = exp;
    // updates['/key'] = key;
    // updates['/lastup'] = firebase.database.ServerValue.TIMESTAMP;

    usuario_ref.update(updates)
        .then(() => {
            return { success: true, message: "Ok" }
        })
        .catch((error) => {
            return { success: false, message: `Erro: ${error.message}` }
        })
}

module.exports = {
    readUserData,
    setAtleta,
    updatePontos
}