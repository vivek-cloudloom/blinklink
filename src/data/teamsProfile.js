import TextLink from "../components/common/TextLink";

const bitsPilani =
  "https://www.businessinsider.com/inside-most-exclusive-college-2017-6";
const asascapital = "http://www.asascapital.com/";
const imaginecup = "https://imaginecup.microsoft.com/en-us/compete/whycompete";
const dubaifuture =
  "https://www.dubaifuture.ae/initiatives/future-design-and-acceleration/dubai-future-accelerators/";
const amazon =
  "https://www.amazon.com/Science_-Technology-and-Modernity_-An-Interdisciplinary-Approach/dp/303080464X";
const ai = "https://ai.cs.cmu.edu/";
const scholar = "https://scholar.google.com/citations?user=4CgJzHcAAAAJ&hl=en";
const frontrow = "https://frontrow.co.in/";
const branch = "https://branch.io/";
const teamsProfile = [
  {
    name: "Kiran Kushal",
    designation: "Founder and CEO",
    imageUrl: "/images/teams/kiran.svg",
    linkedIn:"https://www.linkedin.com/in/kkushal",
    bio: (
      <>
        <TextLink link={bitsPilani}>Bits Pilani</TextLink> graduated computer
        science engineer, entrepreneur, and author with a history of building
        products that combine his passion for human behavior & cutting-edge
        tech. Kiran led the digital transformation of a $100M volume private
        equity business line at{" "}
        <TextLink link={asascapital}>Asas Capital</TextLink>. His Augmented
        Reality app was a finalist at{" "}
        <TextLink link={imaginecup}>Microsoft Imagine Cup</TextLink> – a
        world-leading engineering competition. The autonomous robotics company
        he coled received incubation from{" "}
        <TextLink link={dubaifuture}>Dubai Future Accelerator</TextLink>. Kiran
        is also{" "}
        <TextLink link={amazon}>
          co-author of an interdisciplinary textbook
        </TextLink>{" "}
        in Tech-History and Collective & Social Psychology.
      </>
    ),
  },

  {
    name: "Anudeep Sekhar",
    designation: "Cofounder and CTO",
    imageUrl: "/images/teams/anudeep.svg",
    linkedIn:"https://www.linkedin.com/in/anudeep-sekhar",
    bio: (
      <>
        Anudeep is a <TextLink link={bitsPilani}>Bits Pilani</TextLink> and{" "}
        <TextLink link={ai}>Carnegie Mellon</TextLink> University-educated
        engineer & researcher. A top researcher at CMU - the world's
        highest-ranked school of AI - he has developed products and issued{" "}
        <TextLink link={scholar}>publications</TextLink> in deep
        learning-powered surveillance, autonomous navigation, medical imaging,
        and liveliness detection. The autonomous robotics company he co-led
        received incubation from{" "}
        <TextLink link={dubaifuture}>Dubai Future Accelerator</TextLink>. At
        BlinkLink, Anudeep builds the models that productize influencer
        marketing industry
      </>
    ),
  },
  {
    name: "Rohan Sood",
    designation: "Cofounder and CMO",
    imageUrl: "/images/teams/rohan.svg",
    linkedIn:null,
    bio: (
      <>
        Rohan is a computer science engineer and performance marketer with
        successful marketing roles powered by a passion for behavioral science
        and growth hacking. As the growth lead for the EdTech company Frontrow,
        Rohan scaled a $950k ARR ($60 million valuation) to a $9.3 million ARR
        ($350 million valuation) business in 1 year. Before{" "}
        <TextLink link={frontrow}>Frontrow</TextLink>, Rohan handled Product
        Development at <TextLink link={branch}>branch.io</TextLink> - a $4
        billion deeplinking-attribution company.{" "}
      </>
    ),
  },
];

export default teamsProfile;
