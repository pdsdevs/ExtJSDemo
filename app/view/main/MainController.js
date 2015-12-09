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
        Ext.getStore('notes').add( { text: 'Yet another item in the to-do list' } );
    },

    onRemoveClicked: function (button) {
		var selectedRecords = this.getView().down( 'mainlist' ).getSelection();
		if ( selectedRecords && selectedRecords.length ) {
			Ext.Msg.confirm( 'Are you sure?', 'Item' + (selectedRecords.length > 1 ? 's' : '') + ' will be removed', 'onConfirm', this);
		} else {
			Ext.Msg.alert( 'No item is selected for removal' );
		}
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
			Ext.getStore('notes').remove( this.getView().down( 'mainlist' ).getSelection() );
        }
    }
});
