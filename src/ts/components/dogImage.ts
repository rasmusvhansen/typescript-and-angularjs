import { DogService } from '../services/DogService';
export class DogImageController {
  dogImage: string;
  breed: string;
  constructor(private dogService: DogService) {}

  $onChanges() {
    if (this.breed) {
      this.dogService.getDogUrl(this.breed).then(url => (this.dogImage = url));
    }
  }
}

export const dogImage: angular.IComponentOptions = {
  bindings: {
    breed: '<'
  },
  controller: DogImageController,
  template: '<img ng-src="{{$ctrl.dogImage}}" class="pull-right">'
};
