function Contact({ data }) {
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
          type="text"
          className="block rounded-[1px] bg-transparent focus:outline-none focus:border-[#987750] focus:placeholder-transparent
          text-[#ccc] text-[16px] p-[20px] h-[70px] mr-[20px] w-1/2 border 
          border-[rgba(255,255,255,0.2)] hover:border-gray-600 transition-all ease-in-out delay-[0] 
          duration-[0.3s]"
          placeholder="Name *"
        />

        <input
          type="email"
          className="block rounded-[1px] bg-transparent focus:outline-none focus:border-[#987750] focus:placeholder-transparent
          text-[#ccc] text-[16px] p-[20px] h-[70px] mr-[0px] w-1/2 border 
          border-[rgba(255,255,255,0.2)] hover:border-gray-600 transition-all ease-in-out delay-[0] 
          duration-[0.3s]"
          placeholder="Email *"
        />
      </div>

      <div className="mb-[20px]  w-full">
        <input
          type="text"
          className="block rounded-[1px] bg-transparent focus:outline-none focus:border-[#987750] focus:placeholder-transparent
          text-[#ccc] text-[16px] p-[20px] h-[70px] mr-[0px] w-full border 
          border-[rgba(255,255,255,0.2)] hover:border-gray-600 transition-all ease-in-out delay-[0] 
          duration-[0.3s]"
          placeholder="Phone"
        />
      </div>
      <div className="mb-[20px] w-full">
        <textarea
          type="text"
          className="block rounded-[1px] bg-transparent focus:outline-none focus:border-[#987750] focus:placeholder-transparent
          text-[#ccc] text-[16px] p-[20px] h-[70px] mr-[0px] w-full border 
          border-[rgba(255,255,255,0.2)] hover:border-gray-600 transition-all ease-in-out delay-[0] 
          duration-[0.3s] min-h-[180px]"
          placeholder="Message"
        />
      </div>
      <button
        className="flex justify-center py-[25px] w-full rounded-[1px] bg-transparent focus:outline-none 
        hover:border-[#987750] border-[rgba(255,255,255,0.2)] transition-all ease-in-out delay-[0] 
        duration-[0.3s] border"
      >
        SEND MESSAGE
      </button>

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
