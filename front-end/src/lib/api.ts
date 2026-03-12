const DEFAULT_API_BASE_URL = "http://localhost:5000";

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");
const ensureLeadingSlash = (value: string) => (value.startsWith("/") ? value : `/${value}`);

export const API_BASE_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL,
);

export const apiUrl = (path: string) => `${API_BASE_URL}${ensureLeadingSlash(path)}`;

export const assetUrl = (path?: string) => {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  return `${API_BASE_URL}${ensureLeadingSlash(path)}`;
};
