import { IDog } from '../model/IDog';
import { IApiResponse } from '../model/IApiResponse';
export class DogService {
  constructor(
    private $http: angular.IHttpService,
    private $log: angular.ILogService
  ) {}

  getDogs(): angular.IPromise<IDog[]> {
    this.$log.info('fetching dogs');
    return this.$http
      .get<IApiResponse>('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        this.$log.info('dogs fetched');
        const data = res.data.message;
        return Object.keys(data).map(function(k) {
          return { breed: k, subBreeds: data[k] };
        });
      });
  }

  getDogUrl(breed: string): angular.IPromise<string> {
    return this.$http
      .get<IApiResponse>(
        'https://dog.ceo/api/breed/' + breed + '/images/random'
      )
      .then(res => res.data.message);
  }
}
