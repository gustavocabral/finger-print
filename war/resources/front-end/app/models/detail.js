import DS from 'ember-data';

var Detail = DS.Model.extend({
  fromPage: DS.attr('int'),
  toPage: DS.attr('int'),
  numberCopies: DS.attr('int'),
  color: DS.attr('boolean')
});

Detail.reopenClass({
    FIXTURES: [ { id: 1, fromPage: 2, toPage: 23, numberCopies: 1, color: true},
                { id: 2, fromPage: 14, toPage: 15, numberCopies: 3, color: true}]
});

export default Detail;