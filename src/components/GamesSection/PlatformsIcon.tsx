import { PlatformProps } from "@/constants/type";

import { IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaAmazon,
  FaNeos,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

interface PlatformsIconProps {
  platforms: PlatformProps[];
}

const PlatformsIcon = ({ platforms }: PlatformsIconProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    sega: FaAmazon,
  };
  return (
    <>
      {platforms.map((platform) => {
        if (platform.slug === "neo-geo") return null;
        const IconComponent = iconMap[platform.slug];
        return (
          <IconComponent
            key={platform.slug}
            className="inline-block h-6 w-6 text-sm mr-2 font-semibold text-gray-700"
          />
        );
      })}
    </>
  );
};

export default PlatformsIcon;
