
exports.up = function(knex) {
    return knex.schema.createTable('cliente', function (table) {
      table.increments('idCliente');
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('cidade').notNullable();
      table.string('endereco').notNullable();
      table.varchar('n').notNullable();
      table.varchar('uf', 2).notNullable();

      table.string('idUsuario').notNullable();

      table.foreign('idUsuario').references('idUsuario').inTable('usuario');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('cliente');
  };