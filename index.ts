import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../artifacts/api-server/src/app";

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Strip the /api prefix so Express routes match correctly
  return app(req as any, res as any);
}
