const connection = require('../database/connection');
const crypto = require('crypto');
const alg = 'aes-256-ctr';

module.exports = {
    async create(request, response) {
        const { login, senhaDigitada } = request.body;

        const usuario = await connection('usuario')
        .where('login', login)
        .select('idUsuario')
        .first();

        const valor = await connection('usuario')
        .where('login', login)
        .select('senha')
        .first();

        if(!usuario) {
            return response.status(400).json({ error: 'Não há um usuário com esse login!'});
        }else{
            const decipher = crypto.createDecipher(alg, senhaDigitada)
            const plain = decipher.update('2c1b3b6f', 'hex', 'utf8')
                if(senhaDigitada == plain) {
                    return response.json(usuario);
                }else{
                    return response.status(400).json({ error: 'Senha digitada é invalida!'});
          }
        }
    }
}