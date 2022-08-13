function hello() {
	return "hello";
}

function world() {
	return "world";
}

const arrayFunction = [hello, world];

const funcMap = {
	hello: hello,
	world: world,
};

// console.log(arrayFunction[0]);
console.log(funcMap["world"]());
