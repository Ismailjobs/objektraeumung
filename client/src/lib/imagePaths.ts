/** Public raster assets use WebP (see scripts/optimize-images-to-webp.mjs). */
export const IMG_EXT = "webp" as const;

export function serviceHeroPath(imageFolder: string, filename = `hero.${IMG_EXT}`) {
  return `/services/${imageFolder}/${filename}`;
}

export function serviceContentPath(imageFolder: string, which: 1 | 2) {
  return `/services/${imageFolder}/content-${which}.${IMG_EXT}`;
}

export function serviceGalleryPath(serviceKey: string, index: number) {
  return `/services/${serviceKey}/gallery-${index}.${IMG_EXT}`;
}
