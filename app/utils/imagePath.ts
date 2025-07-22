export function getImagePath(imagePath: string): string {
  // Return full URL for images hosted on luxuryhomehotel.com.tw/art/
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `https://luxuryhomehotel.com.tw/art/${cleanPath}`;
} 