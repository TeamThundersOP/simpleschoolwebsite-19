import React from "react";
import { Smile, GraduationCap, Award } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
          School Grads Vision for India
        </h2>
        <div className="text-center max-w-4xl">
          <p className="text-lg text-highlight leading-relaxed mb-6">
            At School Grads, we believe every child deserves a confident start in English. Through
            our partnership with Moomin Language School, we are bringing Finland's globally admired
            language learning approach to Indian preschools and primary schools.
          </p>
          <div className="text-left max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-highlight mb-4">Our vision is to:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-highlight">
                <span className="text-highlight font-bold text-lg">•</span>
                <span>Make English joyful and stress-free for children.</span>
              </li>
              <li className="flex items-start gap-2 text-highlight">
                <span className="text-highlight font-bold text-lg">•</span>
                <span>Help teachers deliver world-class lessons without extra workload.</span>
              </li>
              <li className="flex items-start gap-2 text-highlight">
                <span className="text-highlight font-bold text-lg">•</span>
                <span>
                  Give schools a unique branding advantage by offering an international program
                  parents trust.
                </span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Smile className="w-12 h-12 text-highlight mx-auto mb-3" />
              <h3 className="font-semibold text-highlight mb-2">Make English Joyful</h3>
              <p className="text-highlight opacity-80 text-sm">Stress-free learning for children</p>
            </div>
            <div className="text-center">
              <GraduationCap className="w-12 h-12 text-highlight mx-auto mb-3" />
              <h3 className="font-semibold text-highlight mb-2">Support Teachers</h3>
              <p className="text-highlight opacity-80 text-sm">
                World-class lessons without extra workload
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-highlight mx-auto mb-3" />
              <h3 className="font-semibold text-highlight mb-2">School Advantage</h3>
              <p className="text-highlight opacity-80 text-sm">
                International program parents trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
