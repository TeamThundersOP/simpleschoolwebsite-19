import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What programs do you offer?",
      answer: "We offer a variety of educational programs designed to enhance learning outcomes. Our programs include curriculum development, teacher training, and student engagement strategies. Each program is tailored to meet the unique needs of your school."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply browse our programs and select the ones that fit your school's needs. You can then reach out to us for further assistance."
    },
    {
      question: "Are the tools effective?",
      answer: "Yes, our tools are based on globally proven methodologies. They are designed to improve student engagement and enhance learning outcomes. Many schools have reported significant improvements after implementation."
    },
    {
      question: "Is support available?",
      answer: "Absolutely! We provide ongoing support to ensure your success. Our team is available to answer questions and provide guidance as needed. We are committed to helping your school thrive."
    },
    {
      question: "Can I customize programs?",
      answer: "Yes, we understand that each school has unique needs. Our programs can be customized to align with your specific goals and challenges. Just let us know what you need, and we'll work with you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="box-border flex w-full flex-col items-center gap-20 bg-white m-0 px-16 py-28 max-md:px-8 max-md:py-20 max-sm:px-4 max-sm:py-[60px]">
      <div className="box-border flex max-w-screen-xl flex-col items-start gap-20 w-full m-0 p-0">
        <div className="box-border flex max-w-screen-md flex-col items-start gap-6 w-full m-0 p-0">
          <h2 className="box-border w-full text-[#0C0504] text-[52px] font-medium leading-[62.4px] tracking-[-0.52px] m-0 p-0 max-md:text-[40px] max-sm:text-[32px]">
            FAQs
          </h2>
          <p className="box-border w-full text-[#0C0504] text-lg font-normal leading-[27px] m-0 p-0">
            Find answers to your questions about our educational programs and tools to get started.
          </p>
        </div>
        <div className="box-border flex flex-col items-start gap-4 w-full m-0 p-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="box-border flex flex-col items-start w-full border bg-white m-0 p-0 rounded-[40px] border-solid border-[rgba(12,5,4,0.15)]"
            >
              <button
                className="box-border flex items-center gap-6 w-full m-0 px-6 py-5 text-left hover:bg-gray-50 transition-colors rounded-[40px]"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="box-border flex-1 text-[#0C0504] text-lg font-bold leading-[27px] m-0 p-0">
                  {faq.question}
                </h3>
                <div className={`transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                    <path d="M17.8984 6.64844C18.0627 6.64844 18.1647 6.69694 18.2451 6.77734C18.3253 6.85765 18.3739 6.95914 18.374 7.12305C18.374 7.28725 18.3255 7.38934 18.2451 7.46973L12.9912 12.7236L13.3447 13.0771L18.2451 17.9766C18.3255 18.0569 18.374 18.1591 18.374 18.3232C18.374 18.4875 18.3255 18.5895 18.2451 18.6699C18.1647 18.7503 18.0627 18.7988 17.8984 18.7988C17.7343 18.7988 17.6321 18.7503 17.5518 18.6699L12.6523 13.7695L12.2988 13.416L7.04492 18.6699C6.96453 18.7503 6.86245 18.7988 6.69824 18.7988C6.53433 18.7988 6.43285 18.7501 6.35254 18.6699C6.27214 18.5895 6.22363 18.4875 6.22363 18.3232C6.22367 18.1591 6.27217 18.0569 6.35254 17.9766L11.6055 12.7236L11.252 12.3701L6.35254 7.46973C6.27214 7.38932 6.22363 7.28732 6.22363 7.12305C6.22371 6.95901 6.2722 6.85768 6.35254 6.77734C6.43288 6.697 6.5342 6.64851 6.69824 6.64844C6.86251 6.64844 6.96452 6.69694 7.04492 6.77734L11.9453 11.6768L12.2988 12.0303L17.5518 6.77734C17.6321 6.69697 17.7343 6.64848 17.8984 6.64844Z" fill="#0C0504" stroke="#0C0504"></path>
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="box-border flex items-start gap-4 w-full m-0 pt-0 pb-6 px-6">
                  <p className="box-border max-w-screen-md flex-1 text-[#0C0504] text-base font-normal leading-6 m-0 p-0">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="box-border flex max-w-[560px] flex-col items-start gap-6 w-full m-0 p-0">
          <div className="box-border flex flex-col items-center gap-4 w-full m-0 p-0">
            <h3 className="box-border w-full text-[#0C0504] text-4xl font-medium leading-[46.8px] tracking-[-0.36px] m-0 p-0">
              Still have questions?
            </h3>
            <p className="box-border w-full text-[#0C0504] text-lg font-normal leading-[27px] m-0 p-0">
              We're here to help you!
            </p>
          </div>
          <div className="box-border flex items-center gap-6 m-0 p-0">
            <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-3 py-1.5 rounded-[100px] border-solid border-[rgba(12,5,4,0.15)] hover:bg-gray-50 transition-colors">
              <span className="box-border text-[#0C0504] text-base font-normal leading-6 m-0 p-0">
                Contact
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
