"use client";

import { useState, type FC } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const faqs = [
  {
    question: "lorm?",
    answer:
      "lorm ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How does the contrast checker work?",
    answer:
      "lorm ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What does the hero image represent?",
    answer:
      "lorm ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How can I set up the fonts?",
    answer:
      "lorm ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How can I learn more about this tool?",
    answer:
      "lorm ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const FAQItem: FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="w-full rounded-[.5rem] border-b border-gray-200 bg-[var(--cards)] px-4">
    <button
      className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
      onClick={onClick}
    >
      <span className="text-lg font-bold md:text-xl">{question}</span>
      <span className={`${isOpen && "rotate-45"} transition-all ease-in`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-[var(--accent)]"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>
    <div
      className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
        isOpen ? "max-h-40" : "max-h-0"
      }`}
    >
      <p className="py-4 text-gray-700">{answer}</p>
    </div>
  </div>
);

const FAQPage: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto my-10 max-w-3xl p-4 md:flex md:justify-center md:gap-16">
      <div>
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">FAQ</h1>
        <p className="mb-8 text-gray-600">
          Answers to some questions you might have.
        </p>
      </div>
      <div className="flex w-full flex-col gap-8 transition-all ease-in-out">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
