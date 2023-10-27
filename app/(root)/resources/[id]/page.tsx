import Link from "next/link";
import Image from "next/image";

import Arrow from "@/components/atoms/Arrow";
import DownloadButton from "@/components/atoms/DownloadButton";

import { getResourceById } from "@/sanity/actions";

import type { Resource } from "@/types";

const Page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;

  const resource: Resource = await getResourceById({
    id: params.id,
  });

  if (!resource) return null;

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding hero-height flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="flex flex-1 flex-col items-start justify-center">
          <p className="text-gradient_blue body-regular mb-2.5 text-center uppercase">
            Your Toolbox for Succes in {resource.association}
          </p>
          <h1 className="sm:heading2 heading3">{resource.title}</h1>
          {resource.bullets.length > 0 && (
            <div className="mt-6 text-[20px] text-slate-950 dark:text-white-800">
              <p>Familiarize yourself with the following contents:</p>
              <ul className="paragraph-regular [&>li]:ml-8 [&>li]:list-disc">
                {resource.bullets.map((bullet: string) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              ...this eBook is a must-have for any {resource.association}&apos;s
              student
            </div>
          )}
          <div>
            <DownloadButton link={resource.link} id={resource._id} />

            <div className="relative ml-28 mt-6 hidden h-[218px] w-[425px] lg:flex">
              {resource.sequel && (
                <Image src="/assets/images/arrow_trail.svg" alt="arrow" fill />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:mb-12 lg:justify-end lg:pr-12">
          <Image
            src={resource.image}
            width={384}
            height={440}
            alt="xyz"
            className="rounded-lg object-contain lg:rotate-12"
          />
        </div>
      </section>
      {resource.sequel && (
        <section className="mt-10 flex flex-col items-center">
          <h3 className="heading3 my-12 max-w-3xl text-center font-semibold">
            If you&apos;re interested in this eBook, you&apos;ll delve into the
            world of
            <span className="text-gradient"> {resource.sequel.title}</span>
          </h3>
          <div>
            <div className="flex-center inner-width frame w-full max-w-5xl flex-col px-0 py-16 sm:px-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className={`sm-box sm-box-${
                    i + 1
                  } bg-light dark:bg-black-100`}
                />
              ))}
              <article className="flex flex-col gap-12 p-10 max-sm:px-6 max-sm:py-0">
                <h2 className="sm:heading2 heading3 max-w-xl text-center">
                  <span className="text-gradient_yellow-orange">
                    Mastering in
                  </span>{" "}
                  {resource.association}: Exploring {resource.sequel.title}
                </h2>
                <Link
                  href={`/resources/${resource.sequel._id}`}
                  className="relative mx-auto flex h-[62px]"
                >
                  <div className="absolute -bottom-1 -right-1.5 z-10 flex h-[52px] w-full rounded-[5px] bg-light-400 dark:bg-white" />
                  <div className="flex-center sm:body-semibold small-bold z-20 h-full w-full gap-2 rounded-[5px] border-2 border-black-200 bg-primary px-6 py-[18px] !font-semibold">
                    Navigating to {resource.sequel.title}
                    <Arrow />
                  </div>
                </Link>
              </article>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Page;
