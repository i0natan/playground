require('mocha-testcheck').install();
const { expect } = require('chai');
const faker = require('faker');

console.log(faker.commerce.productName)
 
describe('Product service', () => {
  describe('Adding new' , ()=>{
    check.it('Add new product with random yet valid properties, always successful', gen.int, gen.return(faker.commerce.productName), (id, name) => {
      expect(addNewProduct(id, name).status).to.equal('approved');
    });
  })
});

const addNewProduct = (id, name)=>{
    console.log(id, name);
    return {id, name, status:"approved"}
}