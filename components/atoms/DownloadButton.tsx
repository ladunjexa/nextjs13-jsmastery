"use client";

import { Button } from "@/components/ui/button";

import { newInteractById } from "@/sanity/actions";

import type { DownloadButtonProps } from "@/types";

const DownloadButton = ({ link, id }: DownloadButtonProps) => {
  const handleClick = async (): Promise<void> => {
    await newInteractById({ id });

    const newWindow: Window | null = window.open(
      link,
      "_blank",
      "noopener,noreferrer"
    );

    if (newWindow) newWindow.opener = null;
  };

  return (
    <Button
      className="gradient_purple flex-center body-semibold mt-10 h-fit w-fit gap-1 rounded-md px-6 py-4"
      onClick={handleClick}
    >
      Download the eBook
    </Button>
  );
};

export default DownloadButton;
