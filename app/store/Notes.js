Ext.define('Demo.store.Notes', {
    extend: 'Ext.data.Store',

    alias: 'store.notes',

    storeId: 'notes',

    fields: [
        'id', 'text', 'done'
    ],

    data: { items: [
        { id: 1, text: "This is an item in the to-do list", done: false },
        { id: 2, text: "This is another item in the same to-do list", done: false },
        { id: 3, text: "Buy groceries", done: false },
        { id: 4, text: "Buy bread and milk", done: false }
    ]},

	sorters: [
		{ property: 'done', order: 'asc' }
	],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
