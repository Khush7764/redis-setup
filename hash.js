const redis = require("./redis-client");

async function main() {
	const user1 = {
		name: "Bob",
		// The field of a Redis Hash key can only be a string.
		// We can write `age: 20` here but ioredis will convert it to a string anyway.
		age: "20",
		description: "I am a programmer",
	};

	const user2 = {
		name: "John",
		// The field of a Redis Hash key can only be a string.
		// We can write `age: 20` here but ioredis will convert it to a string anyway.
		age: "22",
		description: "I am a pro programmer",
	};

	await redis.hset("user-hash:1", user1);
	await redis.hset("user-hash:2", user2);

	const name = await redis.hget("user-hash:1", "name");
	console.log(name); // "Bob"

	const age = await redis.hget("user-hash:1", "age");
	console.log(age); // "20"

	const all = await redis.hgetall("user-hash:1");
	console.log(all); // { age: '20', name: 'Bob', description: 'I am a programmer' }

	// or `await redis.hdel("user-hash:1", "name", "description")`;
	await redis.hdel("user-hash:1", ["name", "description"]);

	const exists = await redis.hexists("user-hash:1", "name");
	console.log(exists); // 0 (means false, and if it's 1, it means true)

	await redis.hincrby("user-hash:1", "age", 1);
	const newAge = await redis.hget("user-hash:1", "age");
	console.log(newAge); // 21

	await redis.hsetnx("user-hash:1", "age", 23);
	console.log(await redis.hget("user-hash:1", "age")); // 21, as the field "age" already exists.
}

main();
