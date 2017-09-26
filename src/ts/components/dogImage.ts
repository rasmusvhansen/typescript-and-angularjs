import { IDog } from './../model/IDog';
import { DogService } from './../services/DogService';
import { IComponentOptions } from 'angular';

class DogImageController {
  breed: string;
  dogImage: string;

  constructor(private dogService: DogService) {}

  $onChanges() {
    if (this.breed) {
      this.dogService.getDogUrl(this.breed).then(url => (this.dogImage = url));
    }
  }
}

export const dogImage: IComponentOptions = {
  bindings: {
    breed: '<'
  },
  controller: DogImageController,
  template: `<img ng-src="{{$ctrl.dogImage}}" class="pull-right">`
};
