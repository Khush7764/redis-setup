const redis = require("./redis-client");

async function init() {
	await redis.set("user:1", "Khushal");
	await redis.mset("user:1", "Khushal", "user:2", "Harsh");
	console.log(
		await redis.get("user:1"),
		await redis.mget("user:1", "user:2")
	);

	await redis.del("user:2");
	console.log(await redis.mget("user:1", "user:2"));

	await redis.set("user:3", "John", "EX", 8);
	console.log(redis.mget("user:1", "user:2", "user:3"));

	setTimeout(async () => {
		console.log(await redis.get("user:3"));
	}, 7000);

	setTimeout(async () => {
		console.log(await redis.get("user:3"));
	}, 10000);
}

init();
