import Ember from 'ember';

const dogparkPropertyTypes = [
  'human',
  'dog'
];

export function dogparkType([type]/*, hash*/) {
  if (dogparkPropertyTypes.includes(type)){
    return 'Community';
  }
  return 'Standalone';
}

export default Ember.Helper.helper(dogparkType);
