import { DogService } from "./../services/DogService";
describe("dog service", () => {
  let service: DogService;
  let httpMock: angular.IHttpService & { get: jasmine.Spy };

  beforeEach(() => {
    httpMock = jasmine.createSpyObj("http", ["get"]);
    service = new DogService(httpMock);
    httpMock.get.and.returnValue(
      Promise.resolve({
        data: { message: { breedA: [], breedB: [] } }
      })
    );
  });

  describe("getDogs", () => {
    it("should query dog api", done => {
      service.getDogs().then(d => {
        expect(d.length).toBe(2);
        expect(httpMock.get).toHaveBeenCalledWith(
          "https://dog.ceo/api/breeds/list/all"
        );
        done();
      });
    });
  });
});
