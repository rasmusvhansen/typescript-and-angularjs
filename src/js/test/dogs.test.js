describe('dogs', () => {
  let ctrl;
  let dogServiceMock;

  beforeEach(module('ngAarhus'));

  beforeEach(
    inject(function($controller) {
      dogServiceMock = jasmine.createSpyObj('dogsService', ['getDogs']);
      dogServiceMock.getDogs.and.returnValue(
        Promise.resolve([{ breed: 'A' }, { breed: 'B' }])
      );
      ctrl = $controller('DogsController', { dogService: dogServiceMock });
    })
  );

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
});
