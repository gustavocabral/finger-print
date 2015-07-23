import DS from 'ember-data';

var Detail = DS.Model.extend({
	copies: DS.attr('int'),
  	fromPage: DS.attr('int'),
  	toPage: DS.attr('int'),
  	color: DS.attr('boolean'),
  	job: DS.belongsTo('job', { async: true }),
});

Detail.reopenClass({
    FIXTURES: [ { id: 1, job: 1, copies: 3, fromPage: 2, toPage: 4, color: true},
                { id: 2, job: 2, copies: 53, fromPage: 1, toPage: 1, color: false},
                { id: 3, job: 3, copies: 13, fromPage: 2, toPage: 3, color: true},
                { id: 4, job: 4, copies: 34, fromPage: 1, toPage: 40, color: false}]
});

export default Detail;