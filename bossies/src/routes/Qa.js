import React from "react";

const QA = () => {
  const questions = [
    {
      question: "Kan ik iets komen drinken?",
      answer:
        "Jazeker! Wij zijn open elke vrijdag en zaterdag van 17u-21u met lekkere en nieuwe wijntjes.",
    },
    {
      question: "Wat zijn de openingsuren?",
      answer: "vrijdag & zaterdag: 17u-21u",
    },
    {
      question: "Kan ik de zaal afhuren?",
      answer:
        "Dat kan zeker! Bekijk onderaan deze pagina de contactgegevens en aarzel niet ons iets te laten weten.",
    },
    {
      question: "Kan ik ook een fles komen afhalen?",
      answer:
        "Op weg naar een etentje en beseffen dat je een cadeau vergeten bent? Overkomt ons allemaal! Aarzel dus niet even langs bij ons te rijden en een fles in een mooie verpakking op te halen. Ons adres staat onderaan de pagina vermeld.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div className="flex flex-col items-center">
        <h2 className="font-black text-5xl mt-5 tracking-tight text-green">
          FAQ
        </h2>
        <p className="text-neutral-500 text-xl mt-3">
          Frequently asked questions.
        </p>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {questions.map((qa, index) => (
          <div key={index} className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>{qa.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                {qa.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QA;
