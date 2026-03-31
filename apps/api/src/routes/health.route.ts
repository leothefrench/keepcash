import { FastifyInstance } from "fastify";
import { getHealth } from "../controllers/health.controller";

export async function healthRoutes(app: FastifyInstance) {
    app.get("/health", getHealth);
}
