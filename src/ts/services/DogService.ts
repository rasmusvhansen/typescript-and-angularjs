import { IApiResponse } from './../model/IApiResponse';
import { IDog } from './../model/IDog';

export class DogService {
  constructor(
    private $http: angular.IHttpService,
    private $log: angular.ILogService
  ) {}

  getDogUrl(breed: string): angular.IPromise<string> {
    return this.$http
      .get<IApiResponse>(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.data.message);
  }

  getDogs(): angular.IPromise<IDog[]> {
    this.$log.info('Getting Dogs');

    return this.$http
      .get<IApiResponse>('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        const data = res.data.message;
        return Object.keys(data).map(k => ({ breed: k, subBreeds: data[k] }));
      });
  }
}
