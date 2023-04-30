// var assert = require('assert');
// describe("my first test case",function(){
//     it("value check",function(){
//         assert.equal([1,2,3,4,5].indexOf(7),-1)
//     })
// })
var chai = require("chai")
// var assert = chai.assert
var should =chai.should()
var expect = chai.expect
describe("expect check",function(){
    var username = "Adfar";
        let myData = {
        item : [{
            id:1,name:"Adfar"
        }],
        title:"Educator",
        address:{
            country:"India",
            phoneNo:["7006525041","7006012345","675765656556"]
        }
    }
    it("phoneNo",function(){
        expect(myData).to.have.nested.property("address.phoneNo[2]")
    })
    it("country name",function(){
        expect(myData).to.have.nested.property("address.country")
    })
    it("phone value",function(){
        expect(myData).to.have.nested.include({"address.phoneNo[1]":"7006012345"})
    })
    it("country name",function(){
        expect(myData).to.have.nested.include({"address.country":"India"})
    })
    it("string check",function(){
     expect(username).to.be.a("string")
    })
    it("equal match",function(){
        expect(username).to.equal("Adfar")
    })
    it("length match",function(){
        expect(myData).to.have.property("item").with.lengthOf(1)
    })
    it("username length",function(){
        expect(username).to.lengthOf(5)
    })
    it("object keys matching",function(){
        expect(myData).to.have.all.keys("item","title","address")
    })
})
// describe('should check', () => {
//         var username = "Adfar";
//     let myData = {
//         item : [{
//             id:1,name:"Adfar"
//         }],
//         title:"Educator"
//     }
//     it("check string",function(){
//         username.should.be.a("string")
//     })
//     it("equal check",function(){
//         username.should.equal("Adfar")
//     })
//     it("length check",function(){
//         myData.should.have.property("item").lengthOf(1)
//     })
  
// })

// describe("aspect check",function(){
//     var username = "Adfar";
//     let myData = {
//         item : [{
//             id:1,name:"Adfar"
//         }],
//         title:"Educator"
//     }
//     it("check string",function(){
//         assert.typeOf(username,"string")
//     })
//     it("equal match",function(){
//         assert.equal(username,"Adfar")
//     })
//     it("length match",function(){
//         assert.lengthOf(myData.item,1)
//     })

// })