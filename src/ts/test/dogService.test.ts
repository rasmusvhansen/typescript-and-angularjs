import { DogService } from './../services/DogService';
describe('dog service', () => {
  let service: DogService;
  let httpMock: angular.IHttpService & { get: jasmine.Spy };
  let logMock: angular.ILogService & { info: jasmine.Spy };

  beforeEach(() => {
    httpMock = jasmine.createSpyObj('http', ['get']);
    logMock = jasmine.createSpyObj('log', ['info']);
    service = new DogService(httpMock, logMock);
    httpMock.get.and.returnValue(
      Promise.resolve({
        data: { message: { breedA: [], breedB: [] } }
      })
    );
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
