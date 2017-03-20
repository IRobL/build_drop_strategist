import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    alertThis: function() {
      // this.toggleProperty('isExpanded');
      console.log("THIS IS ALERT");
      // Create a model and then save it to excersise the app
      // debugger;
      let book = this.store.createRecord('book', {title: "test book"});
      book.save();
    }
  }
});
