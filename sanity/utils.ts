import qs from "query-string";

import type { BuildQueryParams, UrlQueryParams } from "@/types";

/**
 * Build a query for Sanity to fetch resources from the database based on filtering and pagination.
 *
 * @param {BuildQueryParams} params - The query parameters.
 * @returns {string} - The constructed query string.
 */
export function buildQuery(params: BuildQueryParams): string {
  /**
   * Represents the parameters for building a query.
   * @typedef {Object} BuildQueryParams
   * @property {string} type - The type of data to query.
   * @property {string} query - The search query.
   * @property {string} category - The category to filter by.
   * @property {number} [page=1] - The page number for pagination.
   * @property {number} [perPage=10] - The number of items per page for pagination.
   */
  const {
    type,
    query,
    category,
    page = 1,
    perPage = 30,
  }: BuildQueryParams = params;

  const conditions: string[] = [`*[_type == "${type}"`];

  if (query) {
    conditions.push(`title match "${query}*"`);
  }

  if (category && category !== "all") {
    conditions.push(`category == "${category}"`);
  }

  // calculate pagination limits
  const offset: number = (page - 1) * perPage;
  const limit: number = perPage;

  return conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(" && ")})][${offset}...${limit}]`
    : `${conditions[0]}][${offset}...${limit}]`;
}

/**
 * Forms a URL query string based on the provided parameters.
 *
 * @param {UrlQueryParams} params - The URL query parameters.
 * @returns {string} The formatted URL query string.
 */
export function formUrlQuery(input: UrlQueryParams): string {
  /**
   * Represents the parameters for forming a URL query string.
   * @typedef {Object} UrlQueryParams
   * @property {string} params - The current URL query string.
   * @property {string} key - The key to add to the URL query string.
   * @property {string} value - The value to add to the URL query string.
   * @property {string[]} keysToRemove - The keys to remove from the URL query string.
   */
  const { params, key, value, keysToRemove }: UrlQueryParams = input;

  const currentUrl: qs.ParsedQuery<string> = qs.parse(params);

  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      delete currentUrl[keyToRemove];
    });
  } else if (key && value) {
    currentUrl[key] = value;
  }

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  );
}
