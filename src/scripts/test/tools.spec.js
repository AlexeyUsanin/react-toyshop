import chai from 'chai';
import { sum } from './tools';
const { assert, expect } = chai;
chai.should();
describe('sum()', () => {
  it('sum(2, 3) should return 5', () => {
    assert.equal(sum(2, 3), 5);
  });

  it('test array', () => {
    expect([1, 2, 3].includes(2)).to.be.true;
  });

  it('cheking should', () => {
    sum(7, 5).should.equal(12);
  });

});
