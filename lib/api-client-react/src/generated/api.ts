import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import { customFetch } from "../custom-fetch";
import type { HealthStatus, ViewCount } from "@workspace/api-zod";

// ─── Health Check ─────────────────────────────────────────────────────────────

export type HealthCheckQueryKey = readonly ["/api/healthz"];

export const getHealthCheckQueryKey = (): HealthCheckQueryKey =>
  ["/api/healthz"] as const;

export const healthCheckFn = () =>
  customFetch<HealthStatus>("/api/healthz");

export const useHealthCheck = <TData = HealthStatus>(
  options?: Omit<UseQueryOptions<HealthStatus, Error, TData, HealthCheckQueryKey>, "queryKey" | "queryFn">
) =>
  useQuery({
    queryKey: getHealthCheckQueryKey(),
    queryFn: healthCheckFn,
    ...options,
  });

// ─── Get Views ────────────────────────────────────────────────────────────────

export type GetViewsQueryKey = readonly ["/api/views"];

export const getGetViewsQueryKey = (): GetViewsQueryKey =>
  ["/api/views"] as const;

export const getViewsFn = () =>
  customFetch<ViewCount>("/api/views");

export const useGetViews = <TData = ViewCount>(
  options?: Omit<UseQueryOptions<ViewCount, Error, TData, GetViewsQueryKey>, "queryKey" | "queryFn">
) =>
  useQuery({
    queryKey: getGetViewsQueryKey(),
    queryFn: getViewsFn,
    ...options,
  });
