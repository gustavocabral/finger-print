import DS from 'ember-data';

var Printer = DS.Model.extend({
  name: DS.attr('string'),
  online: DS.attr('boolean')
});

export default Printer;