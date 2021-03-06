import facebook from "../../../public/images/icons/facebook.svg";
import tiktok from "../../../public/images/icons/tiktok.svg";
import twitter from "../../../public/images/icons/twitter.svg";
import snapchat from "../../../public/images/icons/snapchat.svg";
import youtube from "../../../public/images/icons/youtube.svg";
import whatsapp from "../../../public/images/icons/whatsapp.svg";
import instagram from "../../../public/images/icons/insta.svg";

const icons = [
  {
    name: "instagram",
    image: instagram,
  },
  {
    name: "tiktok",
    image: tiktok,
    size:48
  },
  ,
  {
    name: "facebook",
    image: facebook,
  },
  {
    name: "twitter",
    image: twitter,
  },
  {
    name: "snapchat",
    image: snapchat,
  },
  {
    name: "youtube",
    image: youtube,
    size:48
  },

  {
    name: "whatsapp",
    image: whatsapp,
  },
];
import Image from "next/image";
export default function Traction({}) {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 m-3">
      {icons.map((icon) => {
        return (
          <Image layout="fixed" key={icon.name} src={icon.image} alt={icon.name} width={icon.size? icon.size : 36} height={icon.size? icon.size : 36} quality={100} />
        );
      })}
    </div>
  );
}
