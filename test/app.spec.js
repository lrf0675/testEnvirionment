var chai = require("chai");
var chaiHttp = require('chai-http');
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
const request = require('request-promise');
const mockReq = require('sinon-express-mock').mockReq;
const mockRes = require('sinon-express-mock').mockRes;
var expect = chai.expect;
chai.should();
chai.use(sinonChai);
chai.use(chaiHttp);
var app = require('../app/app');

describe('App Router Test Suite', function(){
  it('should return status 200 for users api',function(){
      chai.request(app).get('/user/:userId').end(function(err,res){
        res.should.have.status(200)
        done();
      })
  });

  it('should return status 200 for root api',function(){
    chai.request(app).get('/').end(function(err,res){
      res.should.have.status(200)
    })
  });



});