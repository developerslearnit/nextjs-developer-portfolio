import axios from "axios";
import { useState } from "react";

function Contact({ data }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailValidation = (email) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email.trim() || regex.test(email) === false) {
      return false;
    }
    return true;
  };

  const sendEmail = async () => {
    if (!emailValidation(email)) {
      return false;
    }
    setLoading(true);
    axios
      .post(`/api/sendmail`, {
        to: "mark2kk@gmail.com",
        from: email,
        subject: "Portfolio Contact Page",
        text: message,
        phone: phone,
        name: name,
      })
      .then((response) => {
        setLoading(false);
        setEmail("");
        setName("");
        setMessage("");
        setPhone("");
        setMailSent(true);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="pt-[150px] pb-[100px] w-full">
      <h3 className="subtitle">Contact</h3>
      <h3 className="title">Get In Touch</h3>
      <p className="desc">
        If you have any suggestion, project or even you want to say “hello”,
        please fill out the form below and I will reply you shortly.
      </p>

      <div className="mt-[58px] mb-[20px] flex justify-between w-full">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          autoComplete="off"
          className="block rounded-[1px] bg-transparent focus:outline-none focus:border-[#987750] focus:placeholder-transparent
          text-[#ccc] text-[16px] p-[20px] h-[70px] mr-[20px] w-1/2 border 
          border-[rgba(255,255,255,0.2)] hover:border-gray-600 transition-all ease-in-out delay-[0] 
          duration-[0.3s]"
          placeholder="Name *"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          type="text"
          autoComplete="off"
          className="block rounded-[1px] bg-transparent focus:outline-none focus:border-[#987750] focus:placeholder-transparent
          text-[#ccc] text-[16px] p-[20px] h-[70px] mr-[0px] w-1/2 border 
          border-[rgba(255,255,255,0.2)] hover:border-gray-600 transition-all ease-in-out delay-[0] 
          duration-[0.3s]"
          placeholder="Email *"
        />
      </div>

      <div className="mb-[20px]  w-full">
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          className="block rounded-[1px] bg-transparent focus:outline-none focus:border-[#987750] focus:placeholder-transparent
          text-[#ccc] text-[16px] p-[20px] h-[70px] mr-[0px] w-full border 
          border-[rgba(255,255,255,0.2)] hover:border-gray-600 transition-all ease-in-out delay-[0] 
          duration-[0.3s]"
          placeholder="Phone"
          type="text"
          autoComplete="off"
        />
      </div>
      <div className="mb-[20px] w-full">
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="block rounded-[1px] bg-transparent focus:outline-none focus:border-[#987750] focus:placeholder-transparent
          text-[#ccc] text-[16px] p-[20px] h-[70px] mr-[0px] w-full border 
          border-[rgba(255,255,255,0.2)] hover:border-gray-600 transition-all ease-in-out delay-[0] 
          duration-[0.3s] min-h-[180px]"
          placeholder="Message"
          type="text"
          autoComplete="off"
        />
      </div>
      <button
        disabled={loading || !name.trim() || !email.trim() || !message.trim()}
        onClick={sendEmail}
        className={`flex justify-center py-[25px] w-full rounded-[1px] bg-transparent focus:outline-none 
        hover:border-[#987750] border-[rgba(255,255,255,0.2)] transition-all ease-in-out delay-[0] 
        duration-[0.3s] border cursor-pointer ${
          (loading || !name.trim() || !email.trim() || !message.trim()) &&
          "hover:border-[rgba(255,255,255,0.2)] cursor-default"
        }`}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        <span className={`${loading && "text-gray-700"}`}>SEND MESSAGE</span>
      </button>
      {mailSent && (
        <div className="text-green-900 w-full h-[50px] mt-[20px] text-[20px] text-center">
          <h3>Your message has been received, we will contact you soon.</h3>
        </div>
      )}

      <div className="pt-[95px] w-full flex flex-col">
        <p className="text-[14px] uppercase m-0 p-0 mb-[10px]">Address</p>
        <h3 className="text-[30px] max-w-[300px] font-normal mb-14 leading-[1.2] text-[#ccc]">
          {data.address}
        </h3>
        <p className="text-[14px] uppercase m-0 p-0 mb-[10px]">Phone</p>
        <h3 className="text-[30px] max-w-[300px] font-normal mb-14 leading-[1.2] text-[#ccc]">
          <a href="tel:+7068980751">{data.telephone}</a>
        </h3>
        <p className="text-[14px] text-[#ccc] m-0 p-0 mb-[10px]">
          {data.email}
        </p>
      </div>
    </div>
  );
}

export default Contact;
