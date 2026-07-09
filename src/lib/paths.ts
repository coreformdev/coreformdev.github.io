export function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (!basePath || path.startsWith("http") || path.startsWith("#")) {
    return path;
  }

  return `${basePath}${path}`;
}
