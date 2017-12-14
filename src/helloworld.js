function helloWorld() {
  return 'Hello world!';
}

function addNumbers( a, b = 3 ){
	return a+b;
}

function abc ( x, y, ...a ) {
    return ( x + y ) * a.length;
}
	
export { helloWorld, addNumbers, abc };
