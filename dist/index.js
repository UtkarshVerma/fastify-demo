import Fastify from "fastify";
import fastifyRateLimit from "@fastify/rate-limit";
const app = Fastify();
await app.register(fastifyRateLimit, {
    max: 10,
    timeWindow: "1 minute",
});
app.get("/", (_request, reply) => {
    reply.send("Hello");
});
