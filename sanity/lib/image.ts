import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";

import type { Image, ImageUrlBuilder } from "sanity";

// Create an image builder instance
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

/**
 * Generate a URL for a given image using the Sanity image builder.
 * @param {Image} source - The Sanity image source object.
 * @returns {ImageUrlBuilder} - The URL of the formatted image.
 */
export const urlForImage = (source: Image): ImageUrlBuilder => {
  // Generate the image URL with auto-formatting and maximum fit
  return imageBuilder?.image(source).auto("format").fit("max");
};
