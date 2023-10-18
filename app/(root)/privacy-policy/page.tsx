import Document from "@/components/shared/Document";

import { privacyPolicySections } from "@/constants";

const Page = () => (
  <Document title="Privacy Policy" sections={privacyPolicySections} />
);

export default Page;
