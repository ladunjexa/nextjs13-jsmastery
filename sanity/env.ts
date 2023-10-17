export const apiVersion: string =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-09-19";

export const dataset: string = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId: string = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const token: string = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN,
  "NEXT_PUBLIC_SANITY_TOKEN"
);
export const useCdn: boolean = false;

function assertValue<T>(v: T | undefined, envVarName: string): T {
  if (v === undefined) {
    throw new Error(`Missing environment variable: ${envVarName}`);
  }

  return v;
}
