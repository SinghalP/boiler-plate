import waitUntil from '../src/waitUntil';

describe( 'Wait Until', function () {

	var foo = null;

	beforeEach( function (){

		foo = {
			done : function (){
				console.log( '1' );
			}
		}
		
		window.$ = window.Handlebars = window.Swiper = function (){ /* sample function */ };

		spyOn( foo, 'done' );

	} );

	it( '$,Handlebars,Swiper', function () {
		//expect( helloWorld() ).toEqual( 'Hello world!' );
		waitUntil( [ '$', 'Handlebars', 'Swiper' ], foo.done, false );
		expect( foo.done ).toHaveBeenCalled();
	} );

	it( 'Any random variable', function () {
		//expect( helloWorld() ).toEqual( 'Hello world!' );
		waitUntil( [ 'QWERTY' ], foo.done, false );
		expect( foo.done ).not.toHaveBeenCalled();
	} );

	it( 'Body tag', function () {
		//expect( helloWorld() ).toEqual( 'Hello world!' );
		waitUntil( [ 'body' ], foo.done, true );
		expect( foo.done ).toHaveBeenCalled();
	} );


	it( 'Any random Selector', function () {
		//expect( helloWorld() ).toEqual( 'Hello world!' );
		waitUntil( [ '.QWERTY' ], foo.done, false );
		expect( foo.done ).not.toHaveBeenCalled();
	} );


} );