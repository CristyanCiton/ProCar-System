
exports.up = function(knex) {
    return knex.schema.createTable('orcamento', function (table) {
      table.increments('idOrcamento');
      table.float('valor').notNullable();
      table.date('data_pedido').notNullable();

      table.string('idUsuario').notNullable();
      table.string('idCliente').notNullable();
      table.string('idProduto').notNullable();

      table.foreign('idUsuario').references('idUsuario').inTable('usuario');
      table.foreign('idCliente').references('idCliente').inTable('cliente');
      table.foreign('idProduto').references('idProduto').inTable('produto');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('orcamento');
  };