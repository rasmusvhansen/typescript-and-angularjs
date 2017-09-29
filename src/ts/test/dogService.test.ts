import { DogService } from '../services/DogService';
describe('dog service', () => {
  let service: DogService;
  let httpMock: jasmine.SpyObj<angular.IHttpService>;
  let logMock: jasmine.SpyObj<angular.ILogService>;

  beforeEach(() => {
    logMock = jasmine.createSpyObj('log', ['info']);
    httpMock = jasmine.createSpyObj('http', ['get']);
    httpMock.get.and.returnValue(
      Promise.resolve({ data: { message: { breedA: [], breedB: [] } } })
    );
    service = new DogService(httpMock, logMock);
  });

  describe('getDogs', () => {
    it('should query dog api', done => {
      service.getDogs().then(d => {
        expect(d.length).toBe(2);
        expect(httpMock.get).toHaveBeenCalledWith(
          'https://dog.ceo/api/breeds/list/all'
        );
        done();
      });
    });

    it('should log pointless message', () => {
      service.getDogs();
      expect(logMock.info).toHaveBeenCalled();
    });
  });
});
