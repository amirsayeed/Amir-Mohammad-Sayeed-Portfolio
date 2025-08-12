import React from 'react';

const Education = () => {
  return (
    <section className="scroll-mt-24 my-20" id='education'>
       <div className=" px-1 md:px-4" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-center mb-12 text-base-content">
          Education
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-center md:justify-between gap-2 md:gap-0 bg-base-100 shadow-md border-2 border-gray-200 p-8 md:p-10 rounded-lg">

          <div className='flex flex-col gap-2'>
              <h3 className="text-base md:text-xl flex items-start gap-1 font-semibold text-base-content">
                <span><img src="https://img.icons8.com/ios-filled/100/certificate.png" alt=""  className='w-6 h-6'/></span>
                <span>BSc in Computer Science and Engineering</span>
              </h3>

              <p className="text-base flex gap-1 items-start text-base-content font-medium">
                <span><img src="https://img.icons8.com/ios/50/university.png" alt="" className='w-6 h-6'/></span>
                Chittagong University of Engineering & Technology

              </p>
          </div>

          <div className="md:text-right text-base md:text-lg text-base-content font-medium">
            2018 – 2023
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
