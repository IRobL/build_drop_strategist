import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    alertThis: function() {
      // this.toggleProperty('isExpanded');
      // console.log("THIS IS ALERT");
      // Create a model and then save it to excersise the app
      // debugger;
      console.log("play around with the `store` object now :)");
      window.store = this.store;

      /*
      this.store.findRecord('author', 1).then( james => {
        console.log("in callback");
        window.book = this.store.createRecord('book',
          { title: "Ember and Coal", price: 9.99, author: james, publisher: james});
        window.book.save();
      });
      */

    }
  }
});
