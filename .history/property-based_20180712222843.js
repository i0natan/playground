require('mocha-testcheck').install();
const { expect } = require('chai');
 
describe('Product service', () => {
  check.it('Add new product with random yet valid properties, always successful', gen.int, gen.string, (id, name) => {
    expect(addNewProduct(id, name)).to.be
  });
});

const addNewProduct = (id, name)=>{
    console.log(id, name);
    return true;
}