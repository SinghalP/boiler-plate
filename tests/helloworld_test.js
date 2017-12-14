import {helloWorld,addNumbers,abc} from '../src/helloworld';

describe('Hello world', function () {
  it( 'says hello', function () {
    expect(helloWorld()).toEqual('Hello world!');
  });
  
  it( 'Adding 2 numbers', function (){
	  expect(addNumbers(1,3)).toEqual(4);
  } ); 

  it( 'test es6', function (){
  	expect( abc(1, 2, "hello", true, 7) ).toEqual( 9 );
  });
});