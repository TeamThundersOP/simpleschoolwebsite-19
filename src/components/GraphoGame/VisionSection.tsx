import React from 'react';
import { Target, GraduationCap, Users } from 'lucide-react';

const VisionSection = () => {
  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">School Grads Vision</h2>
        <div className="text-center max-w-4xl">
          <p className="text-lg text-highlight leading-relaxed mb-8">
            At School Grads, our mission is to bring world-class literacy solutions to Indian schools. With GraphoGame, we aim to end illiteracy at scale, empower teachers, and give every child the chance to read with confidence aligned with NEP 2020's foundational learning goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-highlight mx-auto mb-3" />
              <h3 className="font-semibold text-highlight mb-2">End Illiteracy at Scale</h3>
              <p className="text-highlight opacity-80 text-sm">Research-backed digital solutions</p>
            </div>
            <div className="text-center">
              <GraduationCap className="w-12 h-12 text-highlight mx-auto mb-3" />
              <h3 className="font-semibold text-highlight mb-2">Empower Teachers</h3>
              <p className="text-highlight opacity-80 text-sm">Real-time insights and support</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-highlight mx-auto mb-3" />
              <h3 className="font-semibold text-highlight mb-2">Confident Readers</h3>
              <p className="text-highlight opacity-80 text-sm">Aligned with NEP 2020 goals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;