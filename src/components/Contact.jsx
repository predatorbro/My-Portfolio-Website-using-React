import React, { useRef } from "react";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    const mailtoLink = `mailto:predatorbhai13@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hi, I am ${name} (${email})\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="pb-20  text-black">
      {/* Section Title */}
      <div className="flex justify-center my-20">
        <h2 className="text-3xl font-bold text-gray-700 relative mt-[-3rem]">
          Contact Me
          <span className="absolute left-0 bottom-0 w-1/2 h-[3px]  bg-[var(--primary)]  rounded-md"></span>
          <span className="absolute left-0 bottom-[-5px] w-1/4 h-[3px]  bg-[var(--primary)]  rounded-md"></span>
        </h2>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="space-y-8">
          <h1 className="text-3xl font-bold">Let's discuss your Project...</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center">
              <i className="fa-solid fa-user text-[var(--primary)]  text-4xl opacity-80 mb-2" />
              <h2 className="text-lg font-semibold">Name</h2>
              <p>Bibek Prasad Sah</p>
            </div>

            <a href="tel:+9779822301799" className="flex flex-col items-center text-center">
              <i className="fa-solid fa-phone text-[var(--primary)]  text-4xl opacity-80 mb-2" />
              <h2 className="text-lg font-semibold">Call at</h2>
              <p>+977 9822301799</p>
            </a>
            <a href="https://wa.me/message/FO2BXDEOJGRBN1" className="flex flex-col items-center text-center" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp text-[var(--primary)]  text-4xl opacity-80 mb-2" />
              <h2 className="text-lg font-semibold">Message me</h2>
              <p>on Whatsapp</p>
            </a>
            <a href="mailto:predatorbhai13@gmail.com" className="flex flex-col items-center text-center" target="_blank" rel="noopener noreferrer">
              <i className="fa-regular fa-envelope text-[var(--primary)]  text-4xl opacity-80 mb-2" />
              <h2 className="text-lg font-semibold">Mail at</h2>
              <p>predatorbhai13@gmail.com</p>
            </a>

            <a href="https://maps.app.goo.gl/HVPyAz9RAcJAHYi7A" className="flex flex-col items-center text-center" target="_blank" rel="noopener noreferrer">
              <i className="fa-regular fa-location-dot text-[var(--primary)]  text-4xl opacity-80 mb-2" />
              <h2 className="text-lg font-semibold">Visit at</h2>
              <p>My office, Tokha</p>
            </a>

            {/* Social Links */}
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-lg font-semibold">Social Profiles</h2>
              <div className="flex justify-center space-x-8 text-3xl">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--black6)] text-[var(--primary)] "
                >
                  <i className="fa-brands fa-facebook" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bibeksah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--black6)] text-[var(--primary)] "
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/predatorbro"
                  className="hover:text-[var(--black6)] text-[var(--primary)] "
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="space-y-6">
          <p className="text-xl">
            I'm always open to discuss about product{" "}
            <span className="font-bold block">designs work or partnerships.</span>
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              ref={nameRef}
              required
              className="w-full p-4 bg-[#a598f341] text-black rounded outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
              required
              className="w-full p-4 bg-[#a598f341] text-black rounded outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              ref={subjectRef}
              required
              className="w-full p-4 bg-[#a598f341] text-black rounded outline-none"
            />
            <textarea
              placeholder="Message"
              rows="6"
              ref={messageRef}
              required
              className="w-full p-4 bg-[#a598f341] text-black rounded outline-none"
            />
            <button
              type="submit"
              className="bg-[var(--primary)] text-white px-6 py-3 rounded shadow-md hover:opacity-80 transition-all"
            >
              Send Message <i className="fa-solid fa-paper-plane ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
