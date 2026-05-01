import type { z } from "zod";
import type { healthCheckResponse, getViewsResponse } from "../api";

export type HealthStatus = z.infer<typeof healthCheckResponse>;
export type ViewCount = z.infer<typeof getViewsResponse>;
