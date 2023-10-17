import { getResources, getResourcesPlaylist } from "@/sanity/actions";
import { ImageProps } from "next/image";

/**
 * A utility type to prettify an object of type T.
 * @template T - The type to prettify.
 */
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Resource = Awaited<ReturnType<typeof getResources>>[0];

export type ResourcePlaylist = Awaited<
  ReturnType<typeof getResourcesPlaylist>
>[0];

interface CommonProps {
  id?: string;
  downloadLink?: string;
}

interface CommonParams {
  query: string;
  category: string;
  page: number;
}

export type DownloadButtonProps = Required<CommonProps>;

export type ResourceCardProps = Required<CommonProps> & {
  title: string;
  image: string;
  downloadNumber: number;
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

export type GetResourcesParams = CommonParams;

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

export type LegalDocumentProps = {
  title: string;
  sections: DocumentSectionProps[];
};

export type NavLink = {
  name: string;
  href: string;
  target?: string;
};
