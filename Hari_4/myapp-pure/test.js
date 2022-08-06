const a = [
	{
		id: 1,
		user: "Andi",
	},
	{
		id: 2,
		user: "Budi",
	},
];

const b = [
	{
		id: 3,
		user: "c",
	},
	{
		id: 4,
		user: "d",
	},
];

const c = [...a, ...b];

console.log(c);

// remove id 3
const d = c.filter((item) => item.id !== 3);
console.log(d);
