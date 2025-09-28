import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "M. Nithin Reddy",
      role: "Founder & CEO",
      description:
        "An education entrepreneur leading Fly Graduate, School Grads, and Grad Trips, dedicated to bridging global excellence with Indian schools through Finnish pedagogy, digital solutions, and international collaborations.",

      image: "/lovable-uploads/Team/Nithin-reddy.jpg",
    },
    {
      name: "M. Sudhakara Reddy",
      role: "Mentor & Strategic Advisor",
      description:
        "With over three decades in education, he has been a pioneer in organizing concept-based study tours for educators, students, and professionals. His expertise brings valuable insights into school transformation, global exposure, and experiential learning for the Indian education community.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5bf9c02f399a547a7b52636f2d53e10fd2c7e5cd?width=592",
    },
  ];

  const SocialIcon = ({ type }: { type: "linkedin" | "twitter" | "dribbble" }) => {
    const icons = {
      linkedin: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.79883 3.57764C3.9704 3.57764 3.29883 4.24921 3.29883 5.07764V20.0776C3.29883 20.906 3.9704 21.5776 4.79883 21.5776H19.7988C20.6272 21.5776 21.2988 20.906 21.2988 20.0776V5.07764C21.2988 4.24921 20.6272 3.57764 19.7988 3.57764H4.79883ZM8.81959 7.58036C8.82522 8.53661 8.10944 9.12583 7.26006 9.12161C6.4599 9.11739 5.7624 8.48036 5.76662 7.58177C5.77084 6.73661 6.43881 6.05739 7.30647 6.07708C8.18678 6.09677 8.82522 6.74224 8.81959 7.58036ZM12.5785 10.3394H10.0585H10.0571V18.8992H12.7205V18.6995C12.7205 18.3196 12.7202 17.9396 12.7199 17.5595C12.7191 16.5457 12.7182 15.5308 12.7234 14.5173C12.7248 14.2712 12.736 14.0153 12.7993 13.7804C13.0369 12.9029 13.8259 12.3362 14.7062 12.4755C15.2715 12.564 15.6455 12.8917 15.803 13.4247C15.9001 13.7579 15.9437 14.1165 15.9479 14.4639C15.9593 15.5115 15.9577 16.5591 15.9561 17.6068C15.9555 17.9766 15.9549 18.3466 15.9549 18.7164V18.8978H18.6268V18.6925C18.6268 18.2405 18.6266 17.7886 18.6263 17.3367C18.6258 16.2072 18.6252 15.0777 18.6282 13.9478C18.6296 13.4373 18.5748 12.9339 18.4496 12.4403C18.2626 11.7062 17.8759 11.0987 17.2473 10.66C16.8015 10.3478 16.3121 10.1467 15.7651 10.1242C15.7028 10.1216 15.64 10.1183 15.5769 10.1148C15.2972 10.0997 15.0129 10.0844 14.7455 10.1383C13.9805 10.2916 13.3084 10.6417 12.8007 11.259C12.7417 11.3298 12.684 11.4017 12.5979 11.509L12.5785 11.5333V10.3394ZM5.98047 18.902H8.63125V10.345H5.98047V18.902Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      twitter: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <path
            d="M17.4749 4.57764H20.235L14.2049 11.355L21.2988 20.5776H15.7444L11.3939 14.9842L6.41606 20.5776H3.65427L10.104 13.3284L3.29883 4.57764H8.99428L12.9267 9.69026L17.4749 4.57764ZM16.5061 18.953H18.0356L8.16324 6.11692H6.52203L16.5061 18.953Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      dribbble: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2988 3.33496C7.33028 3.33496 3.29883 7.36641 3.29883 12.335C3.29883 17.3036 7.33028 21.335 12.2988 21.335C17.2576 21.335 21.2988 17.3036 21.2988 12.335C21.2988 7.36641 17.2576 3.33496 12.2988 3.33496ZM18.2435 7.48355C19.3172 8.79158 19.9615 10.4608 19.981 12.2667C19.7272 12.2179 17.1892 11.7005 14.6318 12.0226C14.5732 11.8957 14.5244 11.7591 14.4658 11.6224C14.3096 11.2515 14.134 10.8708 13.9582 10.5096C16.789 9.35776 18.0775 7.6983 18.2435 7.48355ZM12.2988 4.66251C14.2511 4.66251 16.0374 5.39462 17.3943 6.59527C17.2576 6.79049 16.096 8.34255 13.3628 9.36749C12.1036 7.05405 10.7077 5.16034 10.493 4.8675C11.0688 4.73084 11.6741 4.66251 12.2988 4.66251ZM9.02879 5.38485C9.23377 5.65817 10.6003 7.56164 11.8791 9.82627C8.2869 10.783 5.11445 10.7634 4.7728 10.7634C5.27063 8.3816 6.88126 6.40003 9.02879 5.38485ZM4.60686 12.3448C4.60686 12.2667 4.60686 12.1886 4.60686 12.1105C4.93874 12.1202 8.66759 12.1691 12.5038 11.0172C12.7283 11.4467 12.9333 11.886 13.1285 12.3252C13.0309 12.3545 12.9235 12.3838 12.8259 12.4131C8.86282 13.6918 6.75436 17.1864 6.57866 17.4792C5.35848 16.1224 4.60686 14.3166 4.60686 12.3448ZM12.2988 20.027C10.5222 20.027 8.88235 19.4218 7.58408 18.4066C7.72074 18.1235 9.28254 15.117 13.6166 13.604C13.6361 13.5942 13.6459 13.5942 13.6654 13.5845C14.7489 16.386 15.1882 18.7384 15.3053 19.412C14.378 19.8122 13.3628 20.027 12.2988 20.027ZM16.584 18.7092C16.506 18.2406 16.096 15.9955 15.0905 13.233C17.5016 12.8523 19.6101 13.4771 19.8737 13.565C19.5418 15.7027 18.3118 17.5476 16.584 18.7092Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    };
    return icons[type];
  };

  return (
    <section
      id="about"
      className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-[#021223] m-0 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
        <motion.div
          className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="box-border w-full text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Team
          </motion.h2>
          <motion.p
            className="box-border w-full text-white text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet the leaders driving School Grads' vision of transforming Indian education with
            global solutions.
          </motion.p>
        </motion.div>

        <div className="box-border flex items-center gap-8 lg:gap-20 w-full m-0 p-0 max-lg:flex-col max-lg:gap-8">
          <motion.div
            className="box-border flex gap-4 sm:gap-6 md:gap-8 w-full lg:grid lg:grid-cols-2 lg:gap-8 overflow-x-auto lg:overflow-visible"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.article
                key={index}
                className="box-border flex flex-col items-start gap-4 lg:gap-6 w-48 sm:w-56 lg:w-full flex-shrink-0 m-0 p-0"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="box-border relative overflow-hidden rounded-2xl w-full">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="box-border h-64 sm:h-72 lg:h-80 w-full object-cover object-center m-0 p-0"
                  />
                </div>

                <div className="box-border flex flex-col gap-3 lg:gap-4 w-full m-0 p-0">
                  <div className="box-border flex flex-col gap-2 w-full m-0 p-0">
                    <h3 className="box-border w-full text-white text-lg sm:text-xl lg:text-[22px] font-semibold leading-tight m-0 p-0">
                      {member.name}
                    </h3>
                    <div className="box-border w-full text-gray-300 text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
                      {member.role}
                    </div>
                  </div>
                  <p className="box-border w-full text-gray-300 text-sm sm:text-base font-normal leading-6 m-0 p-0">
                    {member.description}
                  </p>
                </div>

                <div className="box-border flex gap-4 w-full m-0 p-0">
                  {(["linkedin", "twitter", "dribbble"] as const).map((social) => (
                    <motion.button
                      key={social}
                      className="box-border p-3 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                      aria-label={`${member.name} ${social}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-white">
                        <SocialIcon type={social} />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
