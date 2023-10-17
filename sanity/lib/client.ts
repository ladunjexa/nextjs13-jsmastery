import { SanityClient, createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn, token } from "../env";

/**
 * Represents the configuration for a Sanity client.
 * @typedef {Object} SanityClientConfig
 * @property {string} apiVersion - The Sanity API version.
 * @property {string} dataset - The dataset name.
 * @property {string} projectId - The project ID.
 * @property {boolean} useCdn - Indicates whether to use the Content Delivery Network (CDN).
 * @property {string} [token] - Optional token for authentication.
 */

/**
 * Creates a read-only Sanity client.
 *
 * @type {SanityClient}
 */
export const readClient: SanityClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

/**
 * Creates a write-capable Sanity client with authentication token.
 *
 * @type {SanityClient}
 */
export const writeClient: SanityClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
  ignoreBrowserTokenWarning: true,
});
