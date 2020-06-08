exports.up = function(knex) {
    return knex.schema.createTable('financeiro', function (table) {
      table.increments('idFinanceiro');
      table.varchar('numero_documento').notNullable();
      table.string('tipo_titulo').notNullable();
      table.date('data_lancamento').notNullable();
      table.date('data_emissao').notNullable();
      table.date('data_pagamento');
      table.date('data_vencimento').notNullable();
      table.float('valor').notNullable();
      table.float('juros');
      table.integer('idPadrao').notNullable();
      table.string('idUsuario').notNullable();
      table.string('idCliente');

      table.foreign('idUsuario').references('idUsuario').inTable('usuario');
      table.foreign('idCliente').references('idCliente').inTable('cliente');
      
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('financeiro');
  };