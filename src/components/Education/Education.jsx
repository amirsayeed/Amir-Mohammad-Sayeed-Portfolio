import React from 'react';

const Education = () => {
  return (
    <section className="scroll-mt-24 my-20" id='education'>
       <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-base-content">
          Education
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-base-100 shadow-md border border-base-300 px-8 py-6 rounded-lg">
          <div className="text-left space-y-2">
            <h3 className="text-xl font-semibold text-base-content mb-2">
              Undergraduate
            </h3>

            <div className='mt-2'>
                <p className="text-base font-medium text-base-content">
                  BSc in Computer Science and Engineering
                </p>

                <p className="text-base text-base-content font-medium">
                  Chittagong University of Engineering & Technology
                </p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 md:text-right text-base text-base-content font-medium whitespace-nowrap">
            2018 – 2023
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
