import { DogsController } from "./../components/dogs";
import { DogService } from "./../services/DogService";
describe("dogs", () => {
  let ctrl: DogsController;
  let dogsServiceMock: DogService & { getDogs: jasmine.Spy };

  beforeEach(() => {
    dogsServiceMock = jasmine.createSpyObj("dogsService", ["getDogs"]);
    dogsServiceMock.getDogs.and.returnValue(
      Promise.resolve([{ breed: "A" }, { breed: "B" }])
    );
    ctrl = new DogsController(dogsServiceMock);
  });

  describe("getDogs", () => {
    it("should load dogs on initialization", done => {
      ctrl.$onInit().then(() => {
        expect(ctrl.dogs.length).toBe(2);
        expect(ctrl.dogs[0].breed).toBe("A");
        expect(ctrl.dogs[1].breed).toBe("B");
        done();
      });
    });
  });
});
