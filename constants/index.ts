import type { DocumentSectionProps, NavLink } from "@/types";

/**
 * An array of resource types.
 * @type {NavLink[]}
 */
export const resourceTypes: NavLink[] = [
  { name: "Resources", href: "/resources" },
  { name: "Videos", href: "/videos" },
];

/**
 * An array of footer navigation links.
 * @type {NavLink[]}
 */
export const footerLinks: NavLink[] = [
  { name: "Terms & Conditions", href: "/terms-of-use" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

/**
 * An array of navigation links for the navbar.
 * @type {NavLink[]}
 */
export const navbarLinks: NavLink[] = [
  { name: "Studocs App", href: "https://studocs-app-showcase.vercel.app/" },
  { name: "🦄 Let's Connect", href: "https://ladunjexa.vercel.app/" },
  { name: "Videos", href: "/videos", target: "_self" },
  { name: "Resources", href: "/resources", target: "_self" },
];

/**
 * An array of existing playlist categories.
 * @type {string[]}
 */
export const filterOptions: string[] = [
  "all",
  "math",
  "computer science",
  "Software Engineering",
];

/**
 * An array of sections for the terms of use document.
 * @type {DocumentSectionProps[]}
 */
export const termsOfUseSections: DocumentSectionProps[] = [
  {
    title: "Terms",
    content: `
      By accessing this School, you are agreeing to be bound by these
      Terms of Use, all applicable laws and regulations, and agree that
      you are responsible for compliance with any applicable local laws.
      If you do not agree with any of these terms, you are prohibited
      from using or accessing this site. The materials contained in thes
      courses are protected by applicable copyright and trademark law.
      `,
  },
  {
    title: "Use License",
    content: `
      Permission is granted to temporarily download one copy of any
      downloadable materials on the School’s website for personal,
      non-commercial transitory viewing only. This is the grant of a
      license, not a transfer of title, and under this license you may
      not: modify or copy the materials; use the materials for any
      commercial purpose, or for any public display (commercial or
      non-commercial); attempt to decompile or reverse engineer any
      software contained on the School’s web site; remove any copyright
      or other proprietary notations from the materials; or transfer the
      materials to another person or 'mirror' the materials on any other
      server.
      <br />
      <br />
      This license shall automatically terminate if you violate any of
      these restrictions and may be terminated by Company at any time.
      Upon terminating your viewing of these materials or upon the
      termination of this license, you must destroy any downloaded
      materials in your possession whether in electronic or printed
      format.
      `,
  },
  {
    title: "JS Mastery Pro Courses",
    content: `
      By purchasing any courses available on the JS Mastery Pro
      platform, you’re eligible for indefinite access without further
      payment.
      <br />
      <br />
      In the future, JS Mastery Pro may release new courses. In that
      case, you would need to purchase access to those courses
      separately.
      `,
  },
  {
    title: "Refund Policy for Courses",
    content: `
      We offer a no questions asked refund policy. To request a refund,
      send us an email at contact@jsmastery.pro.
      `,
  },
  {
    title: "Refund Policy for the JSM Masterclass Experience",
    content: `
      You can receive a full refund during the first 7 days of the
      program. To request a refund, send us an email at
      contact@jsmastery.pro.
      <br />
      <br />
      Afterwards, you can choose to opt out of the program at any time
      and stop any payments.
      <br />
      <br />
      If you paid the full tuition upfront, you will receive a refund
      proportional to the time you haven’t yet spent in the Masterclass.
      <br />
      <br />
      For example, if you spent exactly two out of 6 months in the
      Masterclass program, and had to leave due to an emergency, you
      would receive a refund of (4/6 * tuition cost).
      `,
  },
];

/**
 * An array of sections for the privacy policy document.
 * @type {DocumentSectionProps[]}
 */
export const privacyPolicySections: DocumentSectionProps[] = [
  {
    title: "Privacy Policy",
    content: `
      This Privacy Policy governs the manner in which the School
      collects, uses, maintains and discloses information collected from
      users (each, a “Student”) of the School. This Privacy Policy
      applies to the School and all Courses offered by the School.
      `,
  },
  {
    title: "Personal identification information",
    content: `
      We may collect personal identification information from Students
      in a variety of ways, including, but not limited to, when Students
      enroll in the School or a Course within the School, subscribe to a
      newsletter, and in connection with other activities, services,
      features, or resources we make available in our School. Students
      may visit the School anonymously. We will collect personal
      identification information from Students only if they voluntarily
      submit such information to us. Students can refuse to supply
      personal identification information but doing so may prevent them
      from engaging in certain School related activities.
      `,
  },
  {
    title: "How we use collected information",
    content: `
      The School may collect and use Students’ personal identification
      information for the following purposes: To improve customer
      service - Information you provide helps us respond to your
      customer service requests and support needs more efficiently. To
      personalize user experience - We may use information in the
      aggregate to understand how our Students as a group use the
      services and resources provided in our School. To send periodic
      emails - We may use Student email addresses to send Students
      information and updates pertaining to their order. Student email
      addresses may also be used to respond to Student inquiries,
      questions, or other requests.
      `,
  },
  {
    title: "Sharing your personal information",
    content: `
      We do not sell, trade, or rent Student personal identification
      information to others.
      `,
  },
  {
    title: "Third party websites",
    content: `
      Student may find advertising or other content in our School that
      link to the websites and services of our partners, suppliers,
      advertisers, sponsors, licensors and other third parties. We do
      not control the content or links that appear on these websites and
      are not responsible for the practices employed by websites linked
      to or from our School. In addition, these websites or services,
      including their content and links, may be constantly changing.
      These websites and services may have their own privacy policies
      and customer service policies. Browsing and interaction on any
      other website, including websites which have a link to our
      Student, is subject to that website's own terms and policies.
      `,
  },
];
