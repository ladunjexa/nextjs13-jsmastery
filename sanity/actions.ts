import { groq } from "next-sanity";
import { readClient, writeClient } from "./lib/client";
import { buildQuery } from "./utils";

import type { DocTypeParams, GetResourcesParams } from "@/types";

/**
 * Fetch a list of resources based on search criteria.
 *
 * @param {GetResourcesParams} params - The parameters for fetching resources.
 * @param {string} params.query - The search query to filter resources by title or content.
 * @param {string | undefined} params.category - The category to filter resources by.
 * @param {number} params.page - The page number for paginated results.
 * @param {string} params.type - The type of resource to fetch.
 * @returns {Promise<Object[] | undefined>} A promise that resolves to an array of resource objects if found, or undefined if an error occurred.
 *
 * @throws {Error} Throws an error if there was an issue fetching the resources.
 */
export const getResources = async (
  params: GetResourcesParams
): Promise<Object[] | undefined | any> => {
  const { query, category, page, type }: GetResourcesParams = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type,
        query,
        category,
        page,
      })}{
        _id,
        title,
        link,
        "image": poster.asset->url,
        views,
        slug,
        category,
        association,
        bullets,
        sequel->{
          title,
          _id,

        }
      }`
    );

    return resources;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetch a playlist of resources.
 *
 * @returns {Promise<Object[] | undefined>} A promise that resolves to an array of resource playlist objects if found, or undefined if an error occurred.
 *
 * @throws {Error} Throws an error if there was an issue fetching the playlist.
 */
export const getResourcesPlaylist = async (
  params: DocTypeParams
): Promise<Object[] | undefined | any> => {
  const { type }: DocTypeParams = params;

  try {
    const resources = await readClient.fetch(
      groq`*[_type == "${
        type === "video" ? "videoPlaylist" : "resourcePlaylist"
      }"]{
        _id,
        title,
        resources[0...6]->{
          title,
          _id,
          link,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetch a resource by its unique ID.
 * @param {Object} params - The parameters for fetching the resource.
 * @param {string} params.id - The unique ID of the resource to retrieve.
 * @returns {Promise<Object | undefined>} A promise that resolves to the resource object if found, or undefined if not found or an error occurred.
 *
 * @throws {Error} Throws an error if there was an issue fetching the resource.
 */
export const getResourceById = async ({
  id,
}: {
  id: string;
}): Promise<Object | undefined> => {
  try {
    const resource = await readClient.fetch(
      groq`*[_type == "resource" && _id == "${id}"]{
        _id,
        title,
        link,
        "image": poster.asset->url,
        views,
        slug,
        category,
        association,
        bullets,
        sequel->{
          title,
          _id,
        }
      }`
    );

    return resource[0];
  } catch (error) {
    console.error(error);
  }
};

/**
 * Increment the download count of a resource by its unique ID.
 *
 * @param {Object} params - The parameters for incrementing the download count.
 * @param {string} params.id - The unique ID of the resource for which to increment the download count.
 *
 * @throws {Error} Throws an error if there was an issue incrementing the download count.
 */
export const newInteractById = async ({
  id,
}: {
  id: string;
}): Promise<void> => {
  try {
    const resource = await readClient.fetch(
      groq`*[_type == "resource" && _id == "${id}"]{
        views,
      }`
    );

    if (!resource || !resource[0] || resource.length === 0) {
      throw new Error(`Resource with ID ${id} not found.`);
    }

    const updatedValue = resource[0].views + 1;

    await writeClient.patch(id).inc({ views: updatedValue });
  } catch (error) {
    console.error(error);
  }
};
