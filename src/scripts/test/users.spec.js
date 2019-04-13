import chai from 'chai';
import sinon from 'sinon';
import faker from 'faker';
import { getUsers } from './users';

const { assert, expect } = chai;
chai.should();

describe('getUsers()', () => {
  let stub;
  const testString = faker.lorem.word();

  const createStub = () => {
    stub = sinon.stub(window, 'fetch');
    stub.returns(Promise.resolve({
      json() { return Promise.resolve(testString); }
    }));

    return stub;
  };

  afterEach(() => {
    window.fetch.restore();
  });

  it('should call fetch()', () => {
    const stub = createStub();
    getUsers();

    expect(stub.called).to.be.true;
  });


  it('should call console.log with result if success', (done) => {
    const fakeConsole = sinon.stub(console, 'log');

    createStub();
    getUsers().then(() => {
      expect(fakeConsole.called).to.be.true;
      done(); 
    });

  });

  
});
