import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    setError('');
    setIsSubmitted(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="box-border flex w-full flex-col items-center gap-20 bg-[#03182F] m-0 px-16 py-28 max-md:px-8 max-md:py-20 max-sm:px-4 max-sm:py-[60px]">
      <div className="box-border flex max-w-screen-xl flex-col items-start gap-20 w-full m-0 p-0">
        <div className="box-border flex items-center gap-8 w-full border bg-[#03182F] m-0 p-12 rounded-[40px] border-solid border-[rgba(255,255,255,0.20)] max-md:flex-col max-md:p-8">
          <div className="box-border flex flex-col items-start gap-6 flex-1 m-0 p-0">
            <h2 className="box-border w-full text-white text-[44px] font-medium leading-[52.8px] tracking-[-0.44px] m-0 p-0 max-md:text-4xl max-sm:text-[28px]">
              Stay Updated with Our Newsletter
            </h2>
            <p className="box-border w-full text-white text-lg font-normal leading-[27px] m-0 p-0">
              Get the latest updates on educational programs, teaching tools, and industry insights delivered to your inbox.
            </p>
          </div>
          <div className="box-border flex w-[513px] flex-col items-start gap-4 m-0 p-0 max-md:w-full">
            <form onSubmit={handleSubmit} className="box-border flex items-start gap-4 w-full m-0 p-0 max-sm:flex-col max-sm:gap-3">
              <div className="box-border flex items-center gap-2 flex-1 bg-[rgba(255,255,255,0.00)] m-0 px-0 py-2 border-b-[rgba(255,255,255,0.20)] border-b border-solid">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="box-border flex-1 text-white text-base font-normal leading-6 m-0 p-0 bg-transparent border-none outline-none placeholder-[rgba(255,255,255,0.60)]"
                  required
                />
              </div>
              <button
                type="submit"
                className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-white m-0 px-3 py-1.5 rounded-[100px] border-solid border-white max-sm:w-full hover:bg-gray-100 transition-colors disabled:opacity-50"
                disabled={isSubmitted}
              >
                <span className="box-border text-[#0C0504] text-base font-normal leading-6 m-0 p-0">
                  {isSubmitted ? 'Subscribed!' : 'Sign Up'}
                </span>
              </button>
            </form>
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            {isSubmitted && (
              <p className="text-green-400 text-sm">Thank you for subscribing!</p>
            )}
            <p className="box-border w-full text-white text-xs font-normal leading-[18px] m-0 p-0">
              By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
