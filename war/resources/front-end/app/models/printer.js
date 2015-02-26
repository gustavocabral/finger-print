import DS from 'ember-data';

var Printer = DS.Model.extend({
  name: DS.attr('string'),
  online: DS.attr('boolean')
});

Printer.reopenClass({
    FIXTURES: [ { id: 1, name: 'HP - ApoloCoffeeBar', online: true},
                { id: 2, name: 'Cannon - Baratinho', online: true},
                { id: 3, name: 'Xerox - Manulengo', online: false} ,
                { id: 4, name: 'HP - ITBC', online: true}]
});

export default Printer;