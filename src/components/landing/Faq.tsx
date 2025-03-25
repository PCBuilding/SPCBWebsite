import React, { useState, useEffect } from "react";
import Monitor from "./ui/Monitor";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Who can become a member?",
    answer:
      "Anyone at UF can become a member by joining our Discord and attending events. We hope to see you soon!",
  },
  {
    question: "What kind of events does SPCB hold?",
    answer:
      "SPCB holds many events such as GBMs, PC builds, socials, gaming events, industry speakers and more. Follow us on Instagram and view the event calendar to stay updated. ",
  },
  {
    question: "How can I get involved?",
    answer:
      "Join our Discord, attend our events, and apply for officer roles each year. It's a simple way to connect and make a difference.",
  },
];

export default function Faq(): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 620);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 sm:px-10 sm:pt-28">
      <h3 className="text-center text-3xl font-medium sm:text-[40px]">
        Frequently Asked Questions
      </h3>

      <div className="grid gap-16 pt-16 sm:gap-24 sm:pt-24 lg:grid-cols-2 lg:gap-12">
        <div className="grid gap-12">
          {faqs.map((faq, i) => (
            <Item faq={faq} i={i} key={faq.question} />
          ))}
        </div>
        {!isMobile && (
          <div className="relative z-10 mb-12 flex min-h-[400px] justify-center sm:pb-0 lg:justify-end">
            <div className="absolute sm:block">
              <Monitor />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface ItemProps {
  faq: FAQ;
  i: number;
}

const Item: React.FC<ItemProps> = ({ faq, i }) => {
  return (
    <div>
      <p className="text-2xl sm:text-3xl">
        <span className="m">0{i + 1}.</span> {faq.question}
      </p>
      <p className="pt-3 text-lg text-dull">{faq.answer}</p>
    </div>
  );
};
