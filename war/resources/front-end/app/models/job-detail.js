import DS from 'ember-data';

var JobDetail = DS.Model.extend({
  name: DS.attr('int'),
  online: DS.attr('boolean')
});

JobDetail.reopenClass({
    FIXTURES: [ { id: 1, name: 'HP - ApoloCoffeeBar', online: true},
                { id: 2, name: 'Cannon - Baratinho', online: true},
                { id: 3, name: 'Xerox - Mamulengo', online: false},
                { id: 4, name: 'HP - ITBC', online: true}]
});

export default JobDetail;