exports.up = function(knex) {
	return knex.schema.createTable('stuff', (stuff => {
		stuff.increments();

		stuff.text('username', 200).unique();
        stuff.text('email', 200).unique();
        stuff.text('item', 50);
        stuff.text('description', 4000);
		stuff.text('price', 100)
		stuff.text('category',100);
		stuff.text('product-lifetime',200);
		stuff.text('model-num',35);
		stuff.text('features-1',2000);
		stuff.text('features-2',2000);
		stuff.text('features-3',2000);
		stuff.text('features-4',2000);
		stuff.text('features-5',2000);
		stuff.text('status',2000);
		stuff.text('warranty',200);
		stuff.text('sku-num',2000)
	}));
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('stuff');
};