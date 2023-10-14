"use client";

import { PlatformProps } from "@/constants/type";
import UsePlatform from "@/hooks/usePlatform";
import React from "react";

interface Props {
  onSelectedPlatform: (platform: PlatformProps) => void;
  platformSelected: PlatformProps | null;
}

export const PlatformList = ({
  onSelectedPlatform,
  platformSelected,
}: Props) => {
  const { data, error } = UsePlatform();
  const data2 = data.slice(0, 8);
  if (error) return null;
  return (
    <>
      <details className="dropdown">
        <summary className="m-1 btn">
          {platformSelected?.name || "Platforms"}
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            {data2.map((platform) => (
              <button
                onClick={() => onSelectedPlatform(platform)}
                className="cursor-pointer flex flex-col"
                key={platform.id}
              >
                {platform.name}
              </button>
            ))}
          </li>
        </ul>
      </details>
    </>
  );
};
