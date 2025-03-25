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
      className="bg-blue-500 hover:bg-blue-600 active:bg-blue-800 flex items-center gap-2 rounded-md px-4 py-2 transition-all"
    >
      <span className="sm:text-lg">
        <FaLongArrowAltLeft />
      </span>
      <span className="text-sm sm:text-base">Back</span>
    </button>
  );
};

export default BackButton;
