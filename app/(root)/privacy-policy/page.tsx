import { Document } from "@/components/server";

import { privacyPolicySections } from "@/constants";

const Page = () => (
  <Document title="Privacy Policy" sections={privacyPolicySections} />
);

export default Page;
