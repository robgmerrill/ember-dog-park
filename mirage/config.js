export default function() {
  this.namespace = '/api';

  let dogparks = [{
    type: 'dogparks',
      id: 'off-leash',
      attributes: {
        title: 'Marymoore Dog Park',
        city: 'Seattle',
        type: 'dog',
        image: 'http://www.blackcatwhitecatphotography.com/pics/dogs/marymoor/MarymoorDogs04.jpg',
        description: "This is the Disneyland of Dogparks!"
      }
    }, {
      type: 'dogparks',
      id: 'on-leash',
      attributes: {
        title: 'Seward park',
        city: 'San Diego',
        type: 'human',
        image: 'http://www.activelynorthwest.com/wp-content/uploads/2013/05/Week20_SewardPark.jpg',
        description: "A great place to walk your dog"
      }
    }, {
      type: 'dogparks',
      id: 'on-leash',
      attributes: {
        title: 'Greenlake Park',
        city: 'Portland',
        type: 'human',
        image: 'http://activelifestylesnw.com/wp-content/uploads/2015/06/greenlakePath2.jpg',
        description: "Great place to walk your dog!!"
      }
    }];


    this.get('/dogparks', function(db, request) {
        if(request.queryParams.city !== undefined) {
          let filteredDogparks = dogparks.filter(function(i) {
            return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
          });
          return { data: filteredDogparks };
        } else {
          return { data: dogparks };
        }
      });
    }
