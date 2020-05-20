
exports.up = function(knex) {
    return knex.schema.createTable('cliente', function (table) {
      table.increments('idCliente');
      table.string('nome').notNullable();
      table.varchar('cpf_cnpj').notNullable();
      table.string('email').notNullable();
      table.string('telefone').notNullable();
      table.string('cidade').notNullable();
      table.string('bairro').notNullable();
      table.varchar('cep').notNullable();
      table.string('rua').notNullable();
      table.varchar('n').notNullable();
      table.varchar('uf', 2).notNullable();

      table.varchar('idUsuario').notNullable();
      
      table.foreign('idUsuario').references('idUsuario').inTable('usuario');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('cliente');
  };