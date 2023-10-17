import { Footer } from "@/components/server";
import { Navbar } from "@/components/client";

const layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
