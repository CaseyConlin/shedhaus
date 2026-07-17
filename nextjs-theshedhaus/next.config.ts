import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const appRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Keep Turbopack scoped to this app folder to avoid scanning the parent workspace.
    root: appRoot,
  },
};

export default nextConfig;
