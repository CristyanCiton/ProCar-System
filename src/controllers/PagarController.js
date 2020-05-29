const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const idUsuario = request.headers.autorizacao;

        const financeiro = await connection('financeiro')
        .where('idUsuario', idUsuario)
        .select('*');

        return response.json(financeiro);
    },

    async create(request, response) {
        const { tipo_titulo, data_lancamento, data_emissao, data_vencimento, valor } = request.body;
        const idUsuario = request.headers.autorizacao;
        const idCliente = request.headers.auto;

        console.log(request.body);

        const [idFinanceiro] = await connection('financeiro').insert({
            tipo_titulo,
            data_lancamento,
            data_emissao,
            data_vencimento,
            valor,
            idCliente,
            idUsuario
            });

        return response.json({ idFinanceiro });
    },

    async delete(request, response) {
        const { idFinanceiro } = request.params;
        const idUsuario = request.headers.autorizacao;
    
        const financeiro = await connection('financeiro')
        .where('idFinanceiro', idFinanceiro)
        .select('idUsuario')
        .first();
    
        if (financeiro.idUsuario != idUsuario) {
            return response.status(401).json({error: 'Operação não permitida.'});
        }
    
        await connection('financeiro').where('idFinanceiro', idFinanceiro).delete();
    
        return response.status(204).send();
    }
}