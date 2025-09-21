import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.40601 8.41309H41.1912C41.9762 8.41309 42.6512 8.69518 43.239 9.2832V9.28418C43.8271 9.87205 44.1101 10.5469 44.1101 11.332V37.1162C44.1101 37.7998 43.8939 38.4 43.446 38.9316L43.24 39.1553C42.6522 39.7413 41.9769 40.0234 41.1912 40.0234H7.40601C6.62438 40.0234 5.95243 39.742 5.36694 39.1562C4.78108 38.5707 4.49976 37.898 4.49976 37.1162V11.332C4.49976 10.5464 4.78109 9.8709 5.36694 9.2832H5.36792C5.95356 8.69529 6.62494 8.41315 7.40601 8.41309ZM6.90601 11.4375V37.6162H41.6912V13.4287L40.9167 13.9395L24.9685 24.4385C24.8319 24.5104 24.7078 24.5681 24.5955 24.6123C24.5284 24.6386 24.4329 24.6592 24.2986 24.6592C24.1642 24.6592 24.0687 24.6386 24.0017 24.6123C23.8883 24.5677 23.7629 24.5094 23.6248 24.4365L7.90601 14.0869V12.0928L24.0251 22.6494L24.2986 22.8291L24.572 22.6504L41.2644 11.75L42.6716 10.832H5.98022L6.90601 11.4375Z" fill="#0C0504" stroke="#0C0504"></path>
        </svg>
      ),
      title: "Email",
      value: "info@schoolgrads.ai",
      description: "Send us an email for any inquiries or support."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.2988 4.33496C7.33028 4.33496 3.29883 8.36641 3.29883 13.335C3.29883 18.3036 7.33028 22.335 12.2988 22.335C17.2576 22.335 21.2988 18.3036 21.2988 13.335C21.2988 8.36641 17.2576 4.33496 12.2988 4.33496ZM12.2988 6.33496C16.1769 6.33496 19.2988 9.45684 19.2988 13.335C19.2988 17.2132 16.1769 20.335 12.2988 20.335C8.42066 20.335 5.29883 17.2132 5.29883 13.335C5.29883 9.45684 8.42066 6.33496 12.2988 6.33496ZM12.2988 10.335C10.6419 10.335 9.29883 11.6779 9.29883 13.335C9.29883 14.9921 10.6419 16.335 12.2988 16.335C13.9557 16.335 15.2988 14.9921 15.2988 13.335C15.2988 11.6779 13.9557 10.335 12.2988 10.335Z" fill="#0C0504"></path>
          <path d="M12.2988 24.335C8.29883 24.335 1.29883 26.335 1.29883 30.335V32.335C1.29883 33.4396 2.19426 34.335 3.29883 34.335H21.2988C22.4034 34.335 23.2988 33.4396 23.2988 32.335V30.335C23.2988 26.335 16.2988 24.335 12.2988 24.335Z" fill="#0C0504"></path>
        </svg>
      ),
      title: "Phone",
      value: "+91 74999 29999",
      description: "Call us during business hours for immediate assistance."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.2988 2.33496C6.77598 2.33496 2.29883 6.81211 2.29883 12.335C2.29883 19.335 12.2988 31.335 12.2988 31.335C12.2988 31.335 22.2988 19.335 22.2988 12.335C22.2988 6.81211 17.8217 2.33496 12.2988 2.33496ZM12.2988 16.335C10.0897 16.335 8.29883 14.5441 8.29883 12.335C8.29883 10.1259 10.0897 8.33496 12.2988 8.33496C14.508 8.33496 16.2988 10.1259 16.2988 12.335C16.2988 14.5441 14.508 16.335 12.2988 16.335Z" fill="#0C0504"></path>
        </svg>
      ),
      title: "Office",
      value: "School Grads, 7, 1-636/40, near ESI Hospital, Model Colony, Sundar Nagar, Erragadda, Hyderabad, Telangana 500038",
      description: "Visit our office for in-person consultations and meetings."
    }
  ];

  return (
    <section
      id="contact"
      className="box-border flex w-full flex-col items-center gap-10 sm:gap-14 md:gap-16 bg-white m-0 px-2 sm:px-4 md:px-8 lg:px-16 py-10 sm:py-14 md:py-16 lg:py-24"
    >
      <div className="box-border flex max-w-screen-xl flex-col items-center w-full m-0 p-0">
        <div className="box-border flex flex-col items-center w-full gap-4 m-0 p-0">
          <h2 className="box-border w-full text-center text-[#021223] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight m-0 p-0">
            Contact Us
          </h2>
          <p className="box-border w-full text-center text-[#0C0504] text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0 max-w-2xl">
            We’re here to help! Reach out to us for partnership opportunities, product demos, or any questions about our solutions.
          </p>
        </div>
        <div className="box-border w-full overflow-x-auto m-0 p-0 mt-6">
          <div className="box-border flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-6 md:gap-8 min-w-0 m-0 p-0">
            {contactInfo.map((info, index) => {
              const isOffice = info.title === "Office";
              return (
                <article
                  key={index}
                  className={`box-border flex flex-col items-start gap-2 sm:gap-3 ${
                    isOffice
                      ? "w-full md:w-[420px] max-w-full min-w-0"
                      : "w-[220px] sm:w-[260px] flex-shrink-0"
                  } m-0 p-4 bg-white rounded-xl shadow border border-[#e5e7eb] transition-shadow hover:shadow-md`}
                  style={isOffice ? { wordBreak: 'break-word', flexGrow: 1 } : {}}
                >
                  <div className="box-border flex items-center justify-center w-9 h-9 rounded m-0 p-0 mb-2">
                    {info.icon}
                  </div>
                  <div className="box-border flex flex-col items-start gap-1 w-full m-0 p-0">
                    <h3 className="box-border text-[#021223] text-base font-semibold leading-6 m-0 p-0">
                      {info.title}
                    </h3>
                    <div
                      className={`box-border text-[#0C0504] text-[15px] sm:text-[16px] font-medium leading-6 tracking-[-0.22px] m-0 p-0 ${
                        isOffice ? "whitespace-pre-line break-words" : ""
                      }`}
                      style={isOffice ? { wordBreak: 'break-word', whiteSpace: 'pre-line' } : {}}
                    >
                      {info.value}
                    </div>
                    <p className="box-border text-[#0C0504] text-xs font-normal leading-5 m-0 p-0 opacity-80">
                      {info.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
