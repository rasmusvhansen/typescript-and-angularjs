import { IDog } from "./../model/IDog";
import { DogService } from "./../services/DogService";
import { IComponentOptions } from "angular";

class DogsController {
  dogs: IDog[];
  constructor(private dogService: DogService) {
    this.dogService.getDogs().then(dogs => (this.dogs = dogs));
  }
}

export const dogs: IComponentOptions = {
  controller: DogsController,
  template: `<div>
  <div><h1>{{$ctrl.breed}}</h1></div>
  <dog-image breed="$ctrl.breed"></dog-image>
  
  <ul>
    <li ng-repeat="dog in $ctrl.dogs"><a href ng-click="$ctrl.breed=dog.breed">{{dog.breed}}</a>
      <ul ng-if="dog.subBreeds.length">
        <li ng-repeat="subBreed in dog.subBreeds">{{subBreed}}</li>
      </ul>
    </li>
  </ul>  
  </div>`
};
