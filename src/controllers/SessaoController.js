const connection = require('../database/connection');
const crypto = require('crypto');
const alg = 'aes-256-ctr';
const pwd = 'administracaoprocar';

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

        console.log(valor);

        if(!usuario) {
            return response.status(400).json({ error: 'Não há um usuário com esse login!'});
        }else{
            const decipher = crypto.createDecipher(alg, pwd)
            const plain = decipher.update(valor, 'hex', 'utf8')
                if(senhaDigitada == plain) {
                    return response.json(usuario);
                }else{
                    return response.status(400).json({ error: 'Senha digitada é invalida!'});
          }
        }
    }
}