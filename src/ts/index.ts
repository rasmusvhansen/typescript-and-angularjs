import { module } from 'angular';
import { DogService } from './services/DogService';
import { dogs } from './components/dogs';
import { dogImage } from './components/dogImage';

export class OtherDep {
  initialize() {
    console.log('EXPENSIVE');
  }
}

module('ngAarhus', [])
  .service('dogService', DogService)
  .component('dogs', dogs)
  .component('dogImage', dogImage);
