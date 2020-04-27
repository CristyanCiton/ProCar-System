const connection = require('../database/connection');
const crypto = require('crypto');
const alg = 'aes-256-ctr';

module.exports = {
    async index (request, response) {
        const usuario = await connection('usuario').select('*');
    
        return response.json(usuario);
    },

    async create(request, response) {
        const { login, crip, cpf_cnpj, email, telefone, cidade, bairro, cep, rua, n, uf } = request.body;

        const cipher = crypto.createCipher(alg, crip)
        const senha = cipher.update(crip, 'utf8', 'hex')

        await connection('usuario').insert({
            login,
            senha,
            cpf_cnpj,
            email,
            telefone,
            cidade,
            bairro,
            cep,
            rua,
            n,
            uf
        });

    return response.json();
    },

    async delete(request, response) {
        const idUsuario = request.headers.autorizacao;

        const usuario = await connection('usuario')
        .where('idUsuario', idUsuario)
        .select('idUsuario')
        .first();

        if (usuario.idUsuario != idUsuario) {
            return response.status(401).json({error: 'Operação não permitida.'});
        }

        await connection('usuario').where('idUsuario', idUsuario).delete();

        return response.status(204).send();
    }
};