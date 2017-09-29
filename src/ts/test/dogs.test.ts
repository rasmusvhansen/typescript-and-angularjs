import { DogsController } from '../components/dogs';
import { DogService } from '../services/DogService';
describe('dogs', () => {
  let ctrl: DogsController;
  let dogServiceMock: jasmine.SpyObj<DogService>;

  beforeEach(() => {
    dogServiceMock = jasmine.createSpyObj('dogsService', ['getDogs']);
    dogServiceMock.getDogs.and.returnValue(
      Promise.resolve([{ breed: 'A' }, { breed: 'B' }])
    );
    ctrl = new DogsController(dogServiceMock);
  });

  describe('getDogs', () => {
    it('should load dogs on initialization', done => {
      ctrl.$onInit().then(() => {
        expect(ctrl.dogs.length).toBe(2);
        expect(ctrl.dogs[0].breed).toBe('A');
        expect(ctrl.dogs[1].breed).toBe('B');
        done();
      });
    });
  });

  describe('selectDog', () => {
    it('should select the dog', () => {
      ctrl.selectDog({ breed: 'Doggo' });
      expect(ctrl.selectedDog.breed).toBe('Doggo');
    });
  });
});
