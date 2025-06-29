import React, { useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_fwg4igi', 
      'template_47w1jyy', 
      form.current,
      'LhMBItcyzQJbo-WqX' 
    )
    .then((result) => {
        console.log('Message sent:', result.text);
        e.target.reset();
        toast.success('Message sent successfully!');
    }, (error) => {
        console.log('Error:', error.text);
        toast.error('Failed to send message.');
    });
  };
    return (
      <section id='contact' className="scroll-mt-24 my-20">
        <h3 className="text-3xl font-bold text-center">Contact</h3>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:divide-x bg-base-200 mt-10 rounded-2xl p-10 gap-5">
          {/* Left side — Your contact info */}
          <div className="space-y-6">
            <p className="text-xl font-medium">Feel free to reach out via any of the following:</p>

            <div className="space-y-5">
              <p className="flex flex-col md:flex-row items-center">
                <MdEmail className="w-6 h-6 mr-3" />
                <a href="mailto:amirsayeed090@gmail.com" className="hover:underline">
                  amirsayeed090@gmail.com
                </a>
              </p>

              <p className="flex flex-col md:flex-row items-center">
                <FaWhatsapp className="w-6 h-6 mr-3" />
                <a
                  href="https://wa.me/8801716473978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +880-1716473978 (WhatsApp)
                </a>
              </p>

              <p className="flex flex-col md:flex-row items-center">
                <MdLocationOn className="w-6 h-6 mr-3" />
                Chattogram, Bangladesh
              </p>
            </div>
          </div>

          {/* Right side — Contact form */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1 font-semibold">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="block">
              <span className="mb-1 font-semibold">Message</span>
              <textarea
                rows="5"
                name="message"
                placeholder="Write your message here..."
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </label>

            <button type="submit" className="btn btn-primary p-3 self-center">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
};

export default Contact;