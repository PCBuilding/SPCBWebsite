import React from "react";
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
  return (
    <div className="relative mx-auto max-w-7xl pb-14 pt-16 sm:pt-28 px-6 sm:px-10">
      <h3 className="text-center text-3xl sm:text-[40px] font-medium">
        Frequently Asked Questions
      </h3>

      <div className="grid lg:grid-cols-2 gap-16 sm:gap-24 lg:gap-12 pt-16 sm:pt-24">
        <div className="grid gap-12">
          {faqs.map((faq, i) => (
            <Item faq={faq} i={i} key={faq.question} />
          ))}
        </div>
        <div className="relative z-10 flex justify-center lg:justify-end min-h-[400px] mb-12 sm:pb-0">
          <div className="absolute sm:block">
          <Monitor />
          </div>
        </div>
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
