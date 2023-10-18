import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Arrow from "@/components/atoms/Arrow";
import NextJsLogo from "@/components/atoms/NextJsLogo";
import Countdown from "@/components/newsletter/Countdown";

const Page = () => {
  const initialDate: number = new Date("2023-11-30T14:59:59").getTime();

  return (
    <main className="flex-center paddings min-h-screen flex-col text-slate-950 dark:text-white">
      <div className="fixed left-0 top-0 -z-50 h-[200px] w-[500px] bg-[rgba(138,135,250,0.10)] blur-[170px]" />
      <div className="fixed bottom-0 right-0 -z-50 h-[200px] w-[500px] bg-[rgba(138,135,250,0.10)] blur-[170px] max-md:hidden" />
      <NextJsLogo />
      <NextJsLogo isDark />
      <article className="flex-center nav-padding w-full max-w-[920px] flex-col text-center max-md:mt-10">
        <p className="sm:heading1 heading2 pb-9">
          The Ultimate{" "}
          <span className="text-gradient_blue-purple">Next.js 13.4 course</span>{" "}
          will be available in...
        </p>
        <Countdown initialDate={initialDate} />
        <p className="paragraph-regular w-full text-center text-slate-950 dark:text-white-400">
          Enter your email and I’ll give you a
          <span className="!font-bold"> special launch discount</span>!
        </p>
      </article>

      <form className="flex-center z-10 w-full max-w-[840px] flex-col pt-10">
        <div className="flex-center w-full gap-x-10 gap-y-6 pb-10 max-md:flex-col">
          <label className="paragraph-regular flex w-full flex-col gap-[10px] text-slate-950 dark:text-white-800">
            First Name
            <Input
              className="flex h-16 w-full rounded-[6px] border-slate-300 bg-slate-300 px-3 py-2 text-sm text-slate-950 !ring-0  !ring-offset-0 ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950  focus-visible:ring-offset-2 dark:border-black-400 dark:bg-black-300 dark:text-white dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
              type="text"
            />
          </label>
          <label className="paragraph-regular flex w-full flex-col gap-[10px] text-slate-950 dark:text-white-800">
            Email Address
            <Input
              className="flex h-16 w-full rounded-[6px] border-2 border-slate-300 bg-slate-300 px-3 py-2 text-sm text-slate-950 !ring-0 !ring-offset-0 ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950  focus-visible:ring-offset-2 dark:border-black-400 dark:bg-black-300 dark:text-white dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
              type="email"
            />
          </label>
        </div>
        <p className="small-regular max-w-3xl pb-8 text-left text-slate-950 dark:text-white-500 md:text-center">
          By clicking &apos;Notify me&apos; you agree to receive emails from JS
          Mastery. Your data is processed in accordance to our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>. You may
          unsubscribe at any time.
        </p>
        <Button
          className="flex-center inline-flex h-16 w-full items-center justify-center gap-2 rounded-[5px] bg-slate-900 bg-gradient-to-r from-[#389BFF] to-[#4C73FF] px-4 py-[14px] text-center text-[14px] font-semibold leading-[16px] text-slate-50 ring-offset-white transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:bg-slate-50 dark:ring-offset-slate-950 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300 md:max-w-[285px]"
          type="submit"
        >
          Notify Me
          <Arrow />
        </Button>
      </form>
    </main>
  );
};

export default Page;
