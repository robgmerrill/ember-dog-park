export default function() {
  this.namespace = '/api';

  this.get('/dogparks', function() {
    return {
      data: [{
        type: 'dogparks',
        id: 'off-leash',
        attributes: {
          title: 'Marymoore Dog Park',
          city: 'Seattle',
          type: 'dog',
          image: 'http://www.blackcatwhitecatphotography.com/pics/dogs/marymoor/MarymoorDogs04.jpg'
        }
      }, {
        type: 'dogparks',
        id: 'on-leash',
        attributes: {
          title: 'Seward Park',
          city: 'Seattle',
          type: 'human',
          image: 'http://www.activelynorthwest.com/wp-content/uploads/2013/05/Week20_SewardPark.jpg'
        }
      }, {
        type: 'dogparks',
        id: 'on-leash',
        attributes: {
          title: 'Greenlake Park',
          city: 'Seattle',
          type: 'human',
          image: 'http://activelifestylesnw.com/wp-content/uploads/2015/06/greenlakePath2.jpg'
        }
      }]
    };
  });
}
