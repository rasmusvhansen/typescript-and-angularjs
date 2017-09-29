import { DogService } from '../services/DogService';
import { IDog } from '../model/IDog';
import { OtherDep } from '../index';
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

export const dogs: angular.IComponentOptions = {
  controller: DogsController,
  template: `<div>
      <div><h2>{{$ctrl.selectedDog.breed}}</h2></div>
      <dog-image breed="$ctrl.selectedDog.breed"></dog-image>
      <ul>
        <li ng-repeat="dog in $ctrl.dogs">
          <a href ng-click="$ctrl.selectDog(dog)">{{dog.breed}}</a>
          <ul ng-if="dog.subBreeds.length">
            <li ng-repeat="subBreed in dog.subBreeds">{{subBreed}}</li>
          </ul>
        </li> 
      </ul>	
    </div>`
};
