exports.up = function(knex) {
	return knex.schema.createTable('stuff', (stuff => {
		stuff.increments();

		stuff.text('username', 200).notNullable().unique();
        stuff.text('email', 200).notNullable().unique();
        stuff.text('item', 50).notNullable();
        stuff.text('description', 4000);
        stuff.text('price', 100).notNullable();
        
	}));
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('stuff');
};