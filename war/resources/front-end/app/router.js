import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('job', {path: '/job/:id'}, function () {
        this.route('printers');
        this.route('job-details', {path: 'details'});
        //this.route('payment');
        //this.route('conclusion');
    });
});

export default Router;
