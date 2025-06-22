const express = require("express");
const axios = require("axios");
const objRedis = require("./redis-client");

const app = express();
const PORT = 3000;
const strCacheKey = "user:api";

app.get("/", async (req, res) => {
	try {
		const strCachedData = await objRedis.get(strCacheKey);

		if (strCachedData) {
			return res.status(200).json(JSON.parse(strCachedData));
		}

		const objResponse = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);

		await objRedis.set(
			strCacheKey,
			JSON.stringify(objResponse.data),
			"EX",
			3600
		); // Optional: Set 1-hour expiry

		return res.status(200).json(objResponse.data);
	} catch (objError) {
		console.error("Error fetching data:", objError?.message);
		return res.status(500).json({ error: "Something went wrong" });
	}
});

app.listen(PORT, () => {
	console.log(`🚀 Server running on PORT: ${PORT}`);
});
