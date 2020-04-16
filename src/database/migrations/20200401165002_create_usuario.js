
exports.up = function(knex) {
  return knex.schema.createTable('usuario', function (table) {
    table.increments('idUsuario');
    table.string('login').notNullable();
    table.string('senha').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('cidade').notNullable();
    table.string('endereco').notNullable();
    table.varchar('n').notNullable();
    table.varchar('uf', 2).notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario');
};
