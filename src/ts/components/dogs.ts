import { IDog } from './../model/IDog';
import { DogService } from './../services/DogService';
import { IComponentOptions } from 'angular';

export class DogsController {
  selectedDog: IDog;
  dogs: IDog[];
  constructor(private dogService: DogService) {}

  $onInit() {
    return this.dogService.getDogs().then(dogs => (this.dogs = dogs));
  }

  selectDog(dog: IDog) {
    this.selectedDog = dog;
  }
}

export const dogs: IComponentOptions = {
  controller: DogsController,
  template: `<div>
  <div><h1>{{$ctrl.selectedDog.breed}}</h1></div>
  <dog-image breed="$ctrl.selectedDog.breed"></dog-image>
  
  <ul>
    <li ng-repeat="dog in $ctrl.dogs"><a href ng-click="$ctrl.selectDog(dog)">{{dog.breed}}</a>
      <ul ng-if="dog.subBreeds.length">
        <li ng-repeat="subBreed in dog.subBreeds">{{subBreed}}</li>
      </ul>
    </li> 
  </ul>  
  </div>`
};
