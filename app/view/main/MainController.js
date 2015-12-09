/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Demo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onAddClicked: function (button) {
        Ext.getStore('notes').add( { text: 'Yet another item in the to-do list', done: false } );
    },

    onRemoveClicked: function (button) {
		var selectedRecords = this.getView().down( 'mainlist' ).getSelection();
		if ( selectedRecords && selectedRecords.length ) {
			Ext.Msg.confirm( 'Are you sure?', 'Item' + (selectedRecords.length > 1 ? 's' : '') + ' will be removed', 'onConfirm', this);
		} else {
			Ext.Msg.alert( 'No item is selected for removal' );
		}
    },

    onDoneClicked: function (button) {
		var selectedRecords = this.getView().down( 'mainlist' ).getSelection();
		if ( selectedRecords && selectedRecords.length ) {
			Ext.each( selectedRecords, function( item ) {
				item.set( 'done', true );
				item.commit();
			});
		} else {
			Ext.Msg.alert( 'No item is selected to mark as done' );
		}
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
			this.getView().down( 'mainlist' ).getStore().remove( this.getView().down( 'mainlist' ).getSelection() );
        }
    }
});
