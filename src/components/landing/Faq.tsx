import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    question: "Who can become a member?",
    answer:
      "Anyone at UF can become a member by joining our Discord and attending events. We hope to see you soon!",
  },
  {
    question: "What kind of events does SPCB hold?",
    answer:
      "SPCB holds many events such as GBMs, PC builds, socials, gaming events, industry speakers and more. Follow us on Instagram and view the event calendar to stay updated.",
  },
  {
    question: "How can I get involved?",
    answer:
      "Join our Discord, attend our events, and apply for officer roles each year. It's a simple way to connect and make a difference.",
  },
  {
    question: "What should I bring to the build events?",
    answer:
      "We supply all the parts needed to build the pcs. You just need to show up!.",
  },
  {
    question: "Why should I join?",
    answer:
      "The Society of PC Building has a variety of hands-on workshops, industry speakers, and socials. SPCB is a great place to expand your network, learn new skills, and have fun!",
  },
];

export default function FAQ() {
  return (
    <div className="px-4 pt-16 sm:pt-20" id="faq">
      <h3 className="text-center text-3xl sm:text-[40px] font-medium">
        Frequently Asked Questions
      </h3>
      <p className="pt-4 text-center text-dull text-lg">
        For any questions you may still have.
      </p>
      <div className="mx-auto  max-w-4xl mt-12 sm:mt-16">
        {faqs.map((faq, index) => (
          <FaqTab key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

type FaqTabProps = {
  question: string;
  answer: string;
};

const FaqTab: React.FC<FaqTabProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="my-5 w-full cursor-pointer border-b border-gray-800 pb-3 tracking-wide sm:pb-4"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center justify-between">
        <p className="pr-3 text-base sm:text-lg">{question}</p>
        <span
          className={`text-dull transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <FaChevronDown />
        </span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 text-sm leading-relaxed text-dull sm:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
