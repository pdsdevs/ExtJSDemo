Ext.define('Demo.store.Notes', {
    extend: 'Ext.data.Store',

    alias: 'store.notes',

    fields: [
        'id', 'text'
    ],

    data: { items: [
        { id: 1, text: "This is an item in the to-do list" },
        { id: 2, text: "This is another item in the same to-do list" },
        { id: 3, text: "Buy groceries" },
        { id: 4, text: "Buy bread and milk" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
