import { getResources, getResourcesPlaylist } from "@/sanity/actions";
import { ImageProps } from "next/image";

/**
 * A utility type to prettify an object of type T.
 * @template T - The type to prettify.
 */
// eslint-disable-next-line no-unused-vars
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Resource = Awaited<ReturnType<typeof getResources>>[0];

export type ResourcePlaylist = Awaited<
  ReturnType<typeof getResourcesPlaylist>
>[0];

interface CommonProps {
  id?: string;
  link?: string;
}

interface CommonParams {
  query: string;
  category: string;
  page: number;
}

interface DocTypeParams {
  type: "video" | "resource";
}

export type DownloadButtonProps = Required<CommonProps>;

export type ContentCardProps = Required<CommonProps> & {
  title: string;
  image: string;
  downloadNumber: number;
  isVideo?: boolean;
};

export type HeaderProps = Omit<CommonParams, "page">;

export type CountdownProps = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export type ThemeImageProps = Omit<
  ImageProps,
  "src" | "priority" | "loading"
> & {
  srcLight: string;
  srcDark: string;
};

export type GetResourcesParams = CommonParams & DocTypeParams;

export type BuildQueryParams = CommonParams & {
  type: string;
  perPage?: number;
};

export type UrlQueryParams = {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
};

export type DocumentSectionProps = {
  title: string;
  content: string;
  image?: string;
};

export type DocumentProps = {
  title: string;
  sections: DocumentSectionProps[];
};

export type NavLink = {
  name: string;
  href: string;
  target?: string;
};

export type ThemeOption = {
  value: string;
  label: string;
};
