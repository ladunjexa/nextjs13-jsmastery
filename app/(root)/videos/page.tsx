import SearchForm from "@/components/shared/SearchForm";
import Filters from "@/components/shared/Filters";
import ContentCard from "@/components/shared/ContentCard";
import Header from "@/components/atoms/Header";

import { getResources, getResourcesPlaylist } from "@/sanity/actions";

import type { Resource, ResourcePlaylist } from "@/types";

export const revalidate: number = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const resources: Resource[] = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: 1,
    type: "video",
  });

  const resourcesPlaylist: ResourcePlaylist[] = await getResourcesPlaylist({
    type: "video",
  });

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-lightbanner bg-cover bg-center text-center dark:bg-banner">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-slate-950 dark:text-white">
            Computer Science Resources
          </h1>
        </div>
        <SearchForm />
      </section>

      <Filters />

      {((searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            query={searchParams?.query || ""}
            category={searchParams?.category || ""}
          />
          <div className="mt-12 flex w-full flex-wrap justify-center gap-7 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((resource: Resource) => (
                <ContentCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.category}
                  link={resource.link}
                  isVideo
                />
              ))
            ) : (
              <p className="body-regular text-slate-950 dark:text-white-400">
                No resources found.
              </p>
            )}
          </div>
        </section>
      )) ||
        (resourcesPlaylist?.length > 0 && (
          <>
            {resourcesPlaylist.map((playlist: ResourcePlaylist) => (
              <section
                key={playlist._id}
                className="flex-center mt-6 w-full flex-col sm:mt-20"
              >
                <h1 className="heading3 self-start text-slate-950 dark:text-white-800">
                  {playlist.title}
                </h1>
                <div className="mt-12 flex w-full flex-wrap justify-center gap-7 sm:justify-start">
                  {playlist.resources.map((resource: Resource) => (
                    <ContentCard
                      key={resource._id}
                      title={resource.title}
                      id={resource._id}
                      image={resource.image}
                      downloadNumber={resource.category}
                      link={resource.link}
                      isVideo
                    />
                  ))}
                </div>
              </section>
            ))}
          </>
        ))}
    </main>
  );
};

export default Page;
