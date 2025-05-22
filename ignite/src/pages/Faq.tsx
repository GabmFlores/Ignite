import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "How do I get matches?",
    answer:
      "Answer fun questions, let the app do the work, and get 3 curated matches per week!",
  },
  {
    question: "What happens if I don’t like my matches?",
    answer:
      "No worries! You can only chat with 2 at a time, and new matches refresh weekly.",
  },
  {
    question: "Can I use this website if I’m not from ADNU?",
    answer:
      "Nope! Only verified ADNU students can join—keeping it exclusive and authentic.",
  },
  {
    question: "What if I get ghosted?",
    answer:
      "We encourage honest conversations, but if someone ghosts twice, they get restricted!",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely! Your info stays private, and we manually verify accounts for security.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % faqs.length);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Reset timer on user interaction
  }, [activeIndex]);

  const handleClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col px-8 py-10 items-center bg-[#fdfbee] mx-[clamp(1rem,4vw,2rem)] ">
      <h1 className="text-4xl font-bold text-primary mb-8">
        Frequently Asked Questions
      </h1>
      <div className="flex md:flex-row gap-10">
        {/* Left side: Questions */}
        <div className="w-full md:w-1/2 rounded-xl bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`flex items-center justify-between w-full text-left px-5 py-4 border-b hover:bg-gray-50 ${
                  isActive ? "bg-gray-100" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      isActive ? "bg-yellow-500" : "bg-blue-300"
                    }`}
                  />
                  <span
                    className={`${
                      isActive ? "text-lg font-semibold" : "text-base"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <ChevronRight className="text-gray-400" />
              </button>
            );
          })}
        </div>

        {/* Right side: Answer */}
        <div className="w-full md:w-1/2 rounded-xl bg-white p-6 shadow-sm min-h-[200px] transition-all">
          <h2 className="text-xl font-semibold mb-2">
            {faqs[activeIndex].question}
          </h2>
          <p className="text-gray-800">{faqs[activeIndex].answer}</p>
        </div>
      </div>
    </div>
  );
}
