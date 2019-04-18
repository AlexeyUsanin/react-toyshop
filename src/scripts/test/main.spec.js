import chai from 'chai';
import sinon from 'sinon';
const { expect } = chai;
chai.should();
import { showMessage, getDay, getAdultUsers, getRandomUsers} from './main';
import { days, defaultProduct, money, users } from './constants';
import { Product } from './main';

describe('Test main.js functions', () => {

  it('should return alert with text', () => {
    const stub = sinon.stub(window, 'alert');
    const text = 'hello';
    showMessage(text);
    expect(stub.called).to.be.true;
  });

  it('should return current day', () => {
    getDay().should.equal(days[new Date().getDay()]);
  });

  it('getAdultUsers() should return Array', () => {
    getAdultUsers().should.instanceof(Array);
  });
  
  it('getAdultUsers() should return users is older than 18 year', () => {
    expect(getAdultUsers(users)).to.deep.equal([{age: 28}, {age: 45}, {age: 68}, {age: 38}, {age: 22}]);  
  });

  describe('Test getRandomUser function', () => {
    let stubRandom = sinon.stub(Math, 'random');
    let stubRound = sinon.stub(Math, 'round');
    let middleUser = Math.round(users.length / 2);

    it('should return false if empty', () => {
      getRandomUsers().should.equal(false);
    });

    it('return first users if number bigger than 0.5', () => {
      stubRandom.returns(0.6);
      expect(getRandomUsers(users)).to.deep.equal(users.slice(0, middleUser));
      stubRandom.restore();
    });

    it('return last users if number smaller than 0.5', () => {
      stubRandom.returns(0.2);
      expect(getRandomUsers(users)).to.deep.equal(users.slice(middleUser, middleUser));
      stubRandom.restore();
    });
  });

  describe('Test Product class', () => {
    let product;
    let price;
    let title;

    beforeEach(() => {
      product = new Product();
    });

    it('should create class with title and price', () => {
      title = 'Orange';
      price = 14;
      product = new Product(title, price);
      product.title.should.equal(title);
      product.price.should.equal(price);
      console.log(product);
    });

    it('should return default title and price', () => {
      let title;
      let price;
      product = new Product(title, price);
      product.title.should.equal(defaultProduct);
      product.price.should.equal(10);
      console.log(product);
    });

    it('getPrice() should return price with money', () => {
      product.getPrice().should.equal('10$');
    });

    it('should throw error if empty value', () => {
      expect(product.setPrice).to.throw(Error, 'Price should be defined');
    });

    it('should set price if value bigger 10', () => {
      let value = 42;
      product.setPrice(value);
      product.value.should.equal(42);
    });

    it('should set default price if value smaller 10', () => {
      expect(product.setPrice(5)).should.not.to.equal(5);
    });
  });

});