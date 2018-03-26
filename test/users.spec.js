var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
const request = require('request-promise');
const mockReq = require('sinon-express-mock').mockReq;
const mockRes = require('sinon-express-mock').mockRes;
var expect = chai.expect;
chai.should();
chai.use(sinonChai);
var users = require('../app/users');


describe('Users API Test Suite', function(){

  describe('Get User by id',function(){
    it('should get specific user by the id', function(){
      var request = {
        params: {
          userId: 'userId=turner.lakeisha@gmail.com'
        }
      }

      var req = mockReq(request)
      var res = mockRes()
        users.getUsers(req,res)
        expect(req.params.userId).to.equal('userId=turner.lakeisha@gmail.com');
    });

    it('should throw an error for missing parameter',function(){
      var request = {
        params: {
          userId: 'turner.lakeisha@gmail.com'
        }
      }

      var req = mockReq(request)
      var res = mockRes()
      users.getUsers(req,res)
      console.log(req.params.userId)
      expect(req.params.userId).not.to.equal('userId=turner.lakeisha@gmail.com');
    });
  });
});