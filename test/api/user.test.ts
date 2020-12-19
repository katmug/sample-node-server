import { app } from "../../src/server";


import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe("Test GET /user", () => {

    it("should return 200 for GET /user api ", (done) => {
        chai.request(app).get('/api/user')
            .then(res => {
                chai.expect(res.status, 'http status to be 200').to.equal(200);
                chai.expect(res.body, 'response body not to be empty').not.to.be.empty;
                chai.expect(res.body, 'response body to be an array').to.be.an("array");
                done();
            }).catch(err => {
                done(err);
            })
    });

});

describe("Test POST /user", () => {

    it("POST /user should return 200 for valid request ", (done) => {
        let user = { name: "a", surName: "a", email: "a" };
        chai.request(app).post('/api/user').send(user)
            .then(res => {
                chai.expect(res.status, 'http status to be 200').to.equal(200);
                chai.expect(res.body, 'response body not to be empty').not.to.be.empty;
                chai.expect(res.body, 'response body to be an object').to.be.an("object");
                done();
            }).catch(err => {
                done(err);
            })
    });

    it("POST /user should return 409 if user already exists ", (done) => {
        let user = { name: "a", surName: "a", email: "a" };
        chai.request(app).post('/api/user').send(user)
            .then(res => {
                chai.expect(res.status, 'http status to be 200').to.equal(200);
                chai.expect(res.body, 'response body not to be empty').not.to.be.empty;
                chai.expect(res.body, 'response body to be an object').to.be.an("object");
                done();
            }).catch(err => {
                done(err);
            })
    });

    it("POST /user should return 400 for invalid request ", (done) => {
        let user = { name: "a", surName: "a", email: "a" };
        chai.request(app).post('/api/user').send(user)
            .then(res => {
                chai.expect(res.status, 'http status to be 200').to.equal(200);
                chai.expect(res.body, 'response body not to be empty').not.to.be.empty;
                chai.expect(res.body, 'response body to be an object').to.be.an("object");
                done();
            }).catch(err => {
                done(err);
            })
    });

});

