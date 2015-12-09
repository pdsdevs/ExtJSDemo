/**
 * This view is an example list of people.
 */
Ext.define('Demo.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Demo.store.Notes'
    ],

    title: 'To-Do List',

	allowDeselect: true,

	selModel: {
		selType: 'rowmodel',
		mode   : 'MULTI'
	},

    store: {
        type: 'notes'
    },

	tbar: [
		{ xtype: 'button', text: 'Add', handler: 'onAddClicked' },
		{ xtype: 'button', text: 'Remove', handler: 'onRemoveClicked' }
	],

    columns: [
        { text: 'Items', dataIndex: 'text', flex: 1 }
    ]
});
