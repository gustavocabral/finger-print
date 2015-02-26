import DS from 'ember-data';

var Document = DS.Model.extend({
  name: DS.attr('string'),
  size: DS.attr('integer'),
  createdAt: DS.attr('date')
});

Document.reopenClass({
	FIXTURES: [ { id: 1, name: 'Project budget', size: 12, createdAt: '12/12/2012'},
	            { id: 2, name: 'Trip planning', size: 5, createdAt: '11/11/2011'} ]
});

export default Document;