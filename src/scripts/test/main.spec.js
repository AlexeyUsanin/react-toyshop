import chai from 'chai';
import sinon from 'sinon';
const { expect, assert } = chai;
chai.should();
import { showMessage, getDay, getAdultUsers, getRandomUsers} from './main';
import { Product } from './main';

describe('Test main.js functions', () => {

  it('should return alert with text', () => {
    const stub = sinon.stub(window, 'alert');
    const text = 'hello';
    showMessage(text);
    expect(stub.called).to.be.true;
  });

  it('should return current day', () => {
    getDay().should.equal('Sunday');
  });

  it('should return getAdultUsers()', () => {
    const users = [{age: 15}, {age: 68}, {age: 38}, {age: 18}, {age: 22}, {age: 14}];
    const adultUser = getAdultUsers(users).length;
    expect(adultUser).to.equal(3);
  });
  
});