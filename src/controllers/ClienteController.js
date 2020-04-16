const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const idUsuario = request.headers.autorizacao;

        const cliente = await connection('cliente')
        .where('idUsuario', idUsuario)
        .select('*');

        return response.json(cliente);
    },

    async create(request, response) {
        const { nome, email, whatsapp, cidade, endereco, n, uf } = request.body;
        const idUsuario = request.headers.autorizacao;

        const [idCliente] = await connection('cliente').insert({
            nome,
            email,
            whatsapp,
            cidade,
            endereco,
            n,
            uf,
            idUsuario
        });

        return response.json({ idCliente });
    },

    async delete(request, response) {
        const { idCliente } = request.params;
        const idUsuario = request.headers.autorizacao;

        const cliente = await connection('cliente')
        .where('idCliente', idCliente)
        .select('idUsuario')
        .first();

        if (cliente.idUsuario != idUsuario) {
            return response.status(401).json({error: 'Operação não permitida.'});
        }

        await connection('cliente').where('idCliente', idCliente).delete();

        return response.status(204).send();
    }
};