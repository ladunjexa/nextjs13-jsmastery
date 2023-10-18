import { Document } from "@/components/server";

import { termsOfUseSections } from "@/constants";

const Page = () => (
  <Document title="Terms of Use" sections={termsOfUseSections} />
);

export default Page;
