const redis = require("./redis-client");

async function main() {
	const numbers = [1, 3, 5, 7, 9];
	await redis.rpush("user-list", numbers);

	const popped = await redis.lpop("user-list");
	console.log(popped);

	const all = await redis.lrange("user-list", 0, -1);
	console.log(all);

	const position = await redis.lpos("user-list", 5);
	console.log(position);
}

main();
