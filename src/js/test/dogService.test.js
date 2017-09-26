describe('dog service', () => {
  var service;
  var $httpBackend;
  var logMock;

  beforeEach(module('ngAarhus'));

  beforeEach(function() {
    logMock = jasmine.createSpyObj('log', ['info']);
    module(function($provide) {
      $provide.value('$log', logMock);
    });
  });

  beforeEach(
    inject(function(_$httpBackend_, dogService) {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET('https://dog.ceo/api/breeds/list/all')
        .respond(200, { message: { breedA: [], breedB: [] } });
      service = dogService;
    })
  );

  describe('getDogs', () => {
    it('should query dog api', done => {
      service.getDogs().then(d => {
        expect(d.length).toBe(2);
        done();
      });
      $httpBackend.flush();
    });

    it('should log pointless message', () => {
      service.getDogs();
      expect(logMock.info).toHaveBeenCalled();
    });
  });
});
