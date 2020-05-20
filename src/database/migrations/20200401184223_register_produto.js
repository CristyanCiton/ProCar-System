
exports.up = function(knex) {
    return knex.schema.createTable('produto', function (table) {
      table.increments('idProduto');
      table.string('descricao').notNullable();
      table.int('quantidade').notNullable();
      table.float('valor').notNullable();
      table.string('idUsuario').notNullable();

      table.foreign('idUsuario').references('idUsuario').inTable('usuario');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('produto');
  };
  