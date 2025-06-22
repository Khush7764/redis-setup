const redis = require("./redis-client");

async function main() {
	const numbers = [2, 4, 6, 8, 10];
	await redis.sadd("user-set", numbers);

	const elementCount = await redis.scard("user-set");
	console.log(elementCount); // 5

	await redis.sadd("user-set", "1");
	const newElementCount = await redis.scard("user-set");
	console.log(newElementCount); // 4

	const isMember = await redis.sismember("user-set", 3);
	console.log(isMember); // 0 (means false, and if it's 1, it means true)
}

main();
