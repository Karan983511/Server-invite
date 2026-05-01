import { z } from "zod";

export const healthCheckResponse = z.object({
  status: z.string(),
});

export const getViewsResponse = z.object({
  count: z.number().int(),
});

// Named exports matching what @workspace/api-zod re-exports
export const HealthCheckResponse = healthCheckResponse;
export const GetViewsResponse = getViewsResponse;
