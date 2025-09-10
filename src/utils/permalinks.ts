// Simple permalink utilities for JyotirSetu Blog

export function getHomePermalink(): string {
  return '/';
}

export function trimSlash(path: string): string {
  return path.replace(/^\/+|\/+$/g, '');
}

export function getAsset(path: string): string {
  return path;
}
