import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('dogpark', { city: param });
      } else {
        return this.get('store').findAll('dogpark');
      }
    }
  }
});
