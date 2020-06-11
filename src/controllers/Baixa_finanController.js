const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const idUsuario = request.headers.autorizacao;

        const { tipo_consulta } = request.body;

        if(tipo_consulta == 'RECEBER') {
            const financeiro = await connection('financeiro')
            .where('idUsuario', idUsuario)
            .where('tipo_titulo', 'RECEBER')
            .where('data_pagamento', null)
            .select('idFinanceiro', 'valor', 'data_vencimento');

             return response.json(financeiro);

        }
        if(tipo_consulta == 'PAGAR') {
            const financeiro = await connection('financeiro')
            .where('idUsuario', idUsuario)
            .where('tipo_titulo', 'PAGAR')
            .where('data_pagamento', null)
            .select('idFinanceiro', 'valor', 'data_vencimento',);

            return response.json(financeiro);
        }
        if(tipo_consulta == 'TUDO') {
            const financeiro = await connection('financeiro')
            .where('idUsuario', idUsuario)
            .select('idFinanceiro', 'valor', 'data_vencimento', 'data_pagamento', 'idPadrao');

            return response.json(financeiro);
        }
    },

    async update(request, response) {
        const { idFinanceiro } = request.params;
        const idUsuario = request.headers.autorizacao;
    
        const financeiro = await connection('financeiro')
        .where('idFinanceiro', idFinanceiro)
        .select('idUsuario')
        .first();

        if (financeiro.idUsuario != idUsuario) {
            return response.status(401).json({error: 'Operação não permitida.'});
        }
        const {data_pagamento, juros } = request.body;

        await connection('financeiro')
        .where('idFinanceiro', idFinanceiro)
        .update('data_pagamento', data_pagamento)
        .update('juros', juros)

        return response.status(204).send();
    }
}