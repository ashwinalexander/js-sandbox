let blah = () => {
	let b = null;
	let result = (b && -1) || 5;
	console.log(result);
};

blah();
