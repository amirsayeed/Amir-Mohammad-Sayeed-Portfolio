import React from 'react';

const Education = () => {
  return (
    <section className="scroll-mt-24 my-20" id='education'>
       <div className=" px-1 md:px-4" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-center mb-12 text-base-content">
          Education
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-1 md:gap-0 bg-base-100 shadow-md border-2 border-gray-200 p-8 md:p-10 rounded-lg">

          <div className='flex flex-col gap-1'>
              <h3 className="text-lg md:text-xl font-semibold text-base-content">
                BSc in Computer Science and Engineering
              </h3>

              <p className="text-base text-base-content font-medium">
                Chittagong University of Engineering & Technology
              </p>
          </div>

          <div className="md:mt-0 md:text-right text-base text-base-content font-medium whitespace-nowrap">
            2018 – 2023
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
