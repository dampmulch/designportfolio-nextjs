// Helper function to handle asset paths with basePath
export function assetPath(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '/designportfolio-nextjs' : '';
  return `${basePath}${path}`;
}