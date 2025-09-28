import React from "react";
import { Target, Users, GraduationCap } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
          Our Vision
        </h2>
        <div className="text-center max-w-4xl">
          <p className="text-lg text-highlight leading-relaxed mb-8">
            At School Grads, our vision is to transform 1,000 schools in India into Finnish
            Experience® Schools, empowering students, teachers, and school leaders with the world's
            most admired education practices.
          </p>
          <p className="text-lg text-highlight leading-relaxed mb-8">
            The Finnish Experience® blends world-class pedagogy with practical classroom solutions,
            leadership development, and unforgettable learning journeys to Finland.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-highlight mx-auto mb-3" />
              <h3 className="font-semibold text-highlight mb-2">Transform 1,000 Schools</h3>
              <p className="text-highlight opacity-80 text-sm">
                Finnish Experience® Schools across India
              </p>
            </div>
            <div className="text-center">
              <GraduationCap className="w-12 h-12 text-highlight mx-auto mb-3" />
              <h3 className="font-semibold text-highlight mb-2">Empower Educators</h3>
              <p className="text-highlight opacity-80 text-sm">
                Students, teachers, and school leaders
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-highlight mx-auto mb-3" />
              <h3 className="font-semibold text-highlight mb-2">World-Class Practices</h3>
              <p className="text-highlight opacity-80 text-sm">
                Most admired education methods globally
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
