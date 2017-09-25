import { IDog } from "./../model/IDog";

export class DogService {
  constructor(private $http: angular.IHttpService) {}

  getDogUrl(breed: string): angular.IPromise<string> {
    return this.$http
      .get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.data["message"]);
  }

  getDogs(): angular.IPromise<IDog[]> {
    return this.$http.get("https://dog.ceo/api/breeds/list/all").then(res => {
      const data = res.data["message"];
      return Object.keys(data).map(k => ({ breed: k, subBreeds: data[k] }));
    });
  }
}
