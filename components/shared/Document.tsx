import Image from "next/image";

import type { DocumentProps, DocumentSectionProps } from "@/types";

const Document = ({ title, sections }: DocumentProps) => {
  return (
    <main className="inner-width flex-center paddings">
      <section className="nav-padding lg:w-[70%]">
        <h1 className="heading1 mb-6">{title}</h1>
        <div className="flex flex-col gap-20 py-12">
          {sections.map((section: DocumentSectionProps) => (
            <div key={section.title} className="flex flex-col gap-8">
              <div className="flex gap-4">
                {section.image && (
                  <Image
                    src={section.image}
                    width={30}
                    height={30}
                    alt="Feedback blue"
                  />
                )}
                <h4 className="base-bold text-black-100 dark:text-white">
                  {section.title}
                </h4>
              </div>
              <p
                className="paragraph-regular text-slate-950 dark:text-white-800"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
export default Document;
