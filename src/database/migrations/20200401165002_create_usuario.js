
exports.up = function(knex) {
  return knex.schema.createTable('usuario', function (table) {
    table.increments('idUsuario');
    table.string('login').notNullable();
    table.string('senha').notNullable();
    table.varchar('cpf_cnpj').notNullable();
    table.string('email').notNullable();
    table.string('telefone').notNullable();
    table.string('cidade').notNullable();
    table.string('bairro').notNullable();
    table.varchar('cep').notNullable();
    table.string('rua').notNullable();
    table.varchar('n').notNullable();
    table.varchar('uf', 2).notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario');
};
