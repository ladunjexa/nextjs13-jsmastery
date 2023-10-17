import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-center paddings max-w-screen-2xl mx-auto min-h-screen w-full flex-col overflow-hidden text-slate-950 dark:text-white">
      <div className="fixed left-0 top-0 h-[200px] w-[500px] bg-[rgba(138,135,250,0.10)] blur-[170px]" />
      <div className="fixed bottom-0 right-0 h-[200px] w-[500px] bg-[rgba(138,135,250,0.10)] blur-[170px] max-lg:hidden" />
      <section className="flex-between nav-padding w-full max-lg:flex-col">
        <div className="max-w-[650px]">
          <h1 className="sm:heading1 xs:heading2 heading3 whitespace-pre-wrap">
            <span className="text-gradient_blue-purple">Master </span>
            Modern Web Development With a
            <span className="text-gradient_blue-purple"> Project Based </span>
            Approach
          </h1>
          <p className="paragraph-regular text-slate-600 dark:text-white-400 max-w-[500px] pt-6">
            Gain real-world experience and land that dev job you've always
            imagined
          </p>
          <div className="flex w-full gap-[23px] pt-[34px] max-md:flex-col">
            <Link
              className="relative flex h-[62px]"
              href="/ultimate-next13-course"
            >
              <div className="absolute -bottom-1 -right-1.5 z-10 flex h-[52px] w-full rounded-[5px] bg-light-400 dark:bg-white" />
              <div className="flex-center body-semibold border-black-200 bg-primary z-20 h-full w-full gap-2 rounded-[5px] border-2 px-6 py-[18px]">
                Ultimate Next.js 13.5 Course
                <Image
                  src="/assets/icons/arrow_white.svg"
                  alt="arrow"
                  width={13}
                  height={10}
                />
              </div>
            </Link>
            <Link
              className="relative flex h-[62px]"
              href="/full-stack-web-development-bootcamp"
            >
              <div className="bg-white-400 dark:bg-black-200 absolute bottom-[-5px] right-[-8px] z-10 flex h-[52px] w-full rounded-[5px]" />
              <div className="flex-center body-semibold z-20 h-full w-full gap-2 rounded-[5px] bg-gradient-to-r from-[#854CFF] to-[#B573F8] px-6 py-[18px]">
                JSM Masterclass
                <Image
                  src="/assets/icons/arrow_white.svg"
                  alt="arrow"
                  width={13}
                  height={10}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full max-md:mt-10 md:max-w-[600px]">
          <div className="carousel-root">
            <div className="carousel carousel-slider w-full">
              <div className="slider-wrapper axis-horizontal">
                {/*
                // TODO: Add testimonial carousel component
                  */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-between relative w-full pt-4 max-lg:flex-col-reverse lg:pt-24">
        <div className="flex-center max-xs:flex-col gap-6 max-lg:pt-14">
          <Image
            src="/assets/images/trustpilot.webp"
            width={270}
            height={100}
            alt="Trust pilot review"
          />
          <div className="flex flex-col gap-2 md:gap-[5px]">
            <div className="flex-center w-full gap-5">
              <div className="flex-center w-full gap-5">
                <span className="flex-center gap-2">
                  <Image
                    src="/assets/icons/youtube.svg"
                    width={27}
                    height={20}
                    alt="Youtube"
                    className="max-md:h-2.5 max-md:w-4"
                  />
                  700k
                </span>
                <span className="flex-center gap-2">
                  <Image
                    src="/assets/icons/instagram.svg"
                    width={27}
                    height={20}
                    alt="Instagram"
                    className="max-md:h-3 max-md:w-3"
                  />
                  270k
                </span>
              </div>
            </div>
            <p className="body-medium whitespace-nowrap">
              Followers & subscribers
            </p>
          </div>
        </div>
        <Image
          src="/assets/images/github-star-jsm.webp"
          width={229}
          height={263}
          alt="Github star"
          className="right-36 top-[-70px] max-lg:mt-10 lg:absolute"
        />
      </section>
    </main>
  );
}
