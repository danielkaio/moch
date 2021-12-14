let chai = require('chai')
let chaiHttp = require('chai-http')
const { it } = require('mocha')
chai.use(chaiHttp)

const app = require('../app');
const request = chai.request(app);

let expect = chai.expect

describe("suite",()=>{
   it("meu teste",()=>{
       expect(1).to.equals(1);
      

   })
   it("deve retornar mensagem",(done)=>{
       request.get("/").end((error,res)=>{
          
        expect(res.body.message).to.equals("ola")
        done()
      
 
       })
   })
})
