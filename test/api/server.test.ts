import { app } from "../../src/server";


import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
describe("Test Server for api endpoints", () => {

    it("should return 200 for GET /status api ", (done) => {
        chai.request(app).get('/status')
            .then(res => {
                chai.expect(res.status).to.equal(200);
                done();
            })
    });

    it("should return 404 for GET /random-url", (done) => {
        chai.request(app).get('/random')
            .then(res => {
                chai.expect(res.status).to.eql(404);
                done();
            })
    });
});

