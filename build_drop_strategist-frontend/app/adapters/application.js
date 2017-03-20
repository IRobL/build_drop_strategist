import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

// Sick destructurizing...
// Ember.String.pluralize('blah')
const { String: { pluralize, underscore } } = Ember;

export default JSONAPIAdapter.extend({

  pathForType(type) {
    return pluralize(underscore(type));
  }

});
