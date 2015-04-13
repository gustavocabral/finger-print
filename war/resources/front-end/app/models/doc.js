import DS from 'ember-data';

var Doc = DS.Model.extend({
  name: DS.attr('string'),
  size: DS.attr('integer'),
  updatedAt: DS.attr('date')
});

Doc.reopenClass({
	FIXTURES: [ { id: 1, name: 'Project budget', size: 12, updatedAt: '12/12/2012'},
	            { id: 2, name: 'Trip planning', size: 5, updatedAt: '11/11/2011'} ]
});

export default Doc;