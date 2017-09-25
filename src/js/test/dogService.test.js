describe("dog service", () => {
  var service;
  var $httpBackend;

  beforeEach(module("ngAarhus"));

  beforeEach(
    inject(function(_$httpBackend_, dogService) {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET("https://dog.ceo/api/breeds/list/all")
        .respond(200, { message: { breedA: [], breedB: [] } });
      service = dogService;
    })
  );

  describe("getDogs", () => {
    it("should query dog api", done => {
      service.getDogs().then(d => {
        expect(d.length).toBe(2);
        done();
      });
      $httpBackend.flush();
    });
  });
});
