import Ember from 'ember';

export default Ember.ArrayController.extend({
	numRows: 100,
	columns: Ember.computed(function() {
	    var nameColumn = Ember.Table.ColumnDefinition.create({
	      columnWidth: 150,
	      textAlign: 'text-align-left',
	      headerCellName: 'Name',
	      getCellContent: function(row) {
	        return row['name'].toString();
	      }
	    });
	    var sizeColumn = Ember.Table.ColumnDefinition.create({
	      columnWidth: 100,
	      headerCellName: 'Size',
	      getCellContent: function(row) {
	        return row['size'].toFixed(2);
	      }
	    });
	    var createdAtColumn = Ember.Table.ColumnDefinition.create({
	      columnWidth: 100,
	      headerCellName: 'Created at',
	      getCellContent: function(row) {
	        return row['createdAt'].toDateString;
	      }
	    });
	    return [nameColumn, sizeColumn, createdAtColumn];
	})
});
