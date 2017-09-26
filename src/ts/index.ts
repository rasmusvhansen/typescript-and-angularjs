import { dogImage } from './components/dogImage';
import { DogService } from './services/DogService';
import { dogs } from './components/dogs';

import { module } from 'angular';

module('ngAarhus', [])
  .service('dogService', DogService)
  .component('dogs', dogs)
  .component('dogImage', dogImage);
