import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";

// Define an interface for the notification objects.
interface Notification {
  name: string;
  time: string;
}

const notifications: Notification[] = [
  { name: "Claudio Sciotto", time: "5m Ago" },
  { name: "Wilbert Hernandez", time: "10m Ago" },
  { name: "Colin Mendoza", time: "15m Ago" },
  { name: "Angela Ung", time: "20m Ago" },
];

const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 1.1,
    },
  },
};

const messageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Terminal(): JSX.Element {
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 7500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          className="px-3 py-2.5 grid gap-2"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {notifications.map((noti, i) => (
            <Item key={i} noti={noti} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface ItemProps {
  noti: Notification;
}

const Item: React.FC<ItemProps> = ({ noti }): JSX.Element => {
  return (
    <motion.div
      variants={messageVariants}
      className="text-xs font-light tracking-wider text-dull w-full py-2 px-4 bg-[#1a2a3d] bg-opacity-60 border border-[#1a2a3d] rounded-md flex gap-6"
    >
      <div className="flex items-center">
        <figure className="flex aspect-square h-8 sm:h-10 items-center justify-center rounded-xl bg-[#0072b1] text-lg sm:text-xl text-white">
          <FaLinkedinIn />
        </figure>
      </div>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm sm:text-base">New Notification</p>
          <p className="text-xs sm:text-sm font-light hidden sm:inline">{noti.time}</p>
        </div>
        <p className="pt-1 sm:pt-0.5 text-xs sm:text-sm text-dull">
          {noti.name} would like to connect
          <span className="hidden sm:inline"> with you</span>!
        </p>
      </div>
    </motion.div>
  );
};
