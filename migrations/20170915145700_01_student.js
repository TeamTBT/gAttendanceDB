exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('rfid').notNullable();
    table.text('password');
    table.integer('partial');
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('student')
};
