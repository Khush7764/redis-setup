# 🚀 Redis App with Node.js, Express & Redis Stack

A simple Node.js app using Express that fetches data from an external API and caches it in Redis (Redis Stack via Docker). Optimized for performance with `.env` support.

---

## 📦 Features

-   🔁 Caching with Redis using `ioredis`
-   📡 API request with Axios
-   🧠 Prevents redundant API calls
-   💡 Uses environment variables from `.env`
-   🐳 Redis Stack setup using Docker

---

## 🔧 Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or later)
-   [Docker](https://www.docker.com/)

---

## 🌱 Setup Environment

1. Create a `.env` file in the root folder:

    ```env
    REDIS_PASSWORD=<YOUR_PASSWORD>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

---

## 🐳 Run Redis Stack using Docker

1. Pull Redis Stack image:

    ```bash
    docker pull redis/redis-stack:latest
    ```

2. Run Redis Stack container:

    ```bash
    docker run -d \
      --name redis-stack \
      -p 6379:6379 \
      -p 8001:8001 \
      -e REDIS_PASSWORD=<YOUR_PASSWORD> \
      redis/redis-stack:latest
    ```

3. (Optional) Verify Redis is running:

    ```bash
    docker ps
    ```

4. (Optional) Access Redis CLI:

    ```bash
    docker exec -it redis-stack redis-cli -a admin
    ```

5. Redis Stack UI: [http://localhost:8001](http://localhost:8001)  
   Password: `admin`

---

## ▶️ Run the Application

```bash
node <filename>.js

```
