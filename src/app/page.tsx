"use client";
import Image from "next/image";

// pages/index.js

import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="pb-6 text-center text-6xl font-bold">
          The Society of PC Building
        </h1>
        <p className="text-center text-2xl">Coming Soon!</p>
      </div>
      <div>
        <h1>Firebase Data:</h1>
      </div>
    </>
  );
}
