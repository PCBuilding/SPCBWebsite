"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600 active:bg-blue-800"
    >
      <span className="text-lg">
        <FaLongArrowAltLeft />
      </span>
      Back
    </button>
  );
};

export default BackButton;
