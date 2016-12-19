import Ember from 'ember';

let dogparks = [{
  id: 'off-leash',
  title: 'Marymoore Dog Park',
  city: 'Seattle',
  image: 'http://www.blackcatwhitecatphotography.com/pics/dogs/marymoor/MarymoorDogs04.jpg'
}, {
  id: 'on-leash',
  title: 'Seward Park',
  city: 'Seattle',
  image: 'http://www.activelynorthwest.com/wp-content/uploads/2013/05/Week20_SewardPark.jpg'
}, {
  id: 'on-leash',
  title: 'Greenlake Park',
  city: 'Seattle',
  image: 'http://activelifestylesnw.com/wp-content/uploads/2015/06/greenlakePath2.jpg'
}];

export default Ember.Route.extend({
  model() {
    return dogparks;
  }
});
