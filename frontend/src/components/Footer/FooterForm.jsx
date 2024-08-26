import React, { useEffect, useState } from "react";
import FooterPart from "./FooterPart";
import Logo from "../Logo";
import Input from "../Input";
import countryCode from "../../components/LandingPage/data/countryCode";
import cities from "../../components/LandingPage/data/cities.js";
import Toast from "../Toast";

function FooterForm() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [codes, setCodes] = useState(null);
  const [showToast, setShowToast] = useState(false);
  let id;

  useEffect(() => {
    setCodes(Object.values(countryCode));
  }, [countryCode]);

  useEffect(() => {
    id && clearTimeout(id);

    if (showToast) {
      id = setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  }, [showToast]);

  return (
    <div className="w-[100%]">
      <div className="bg-[#1b181f] h-auto w-full flex flex-col gap-8 pt-12 px-2 ">
        {/* <h1 className="text-4xl md:text-5xl uppercase text-[#FFE0C3] text-center overflow-x-hidden">
          Let's Get Started
        </h1> */}
        <div
          id="middle"
          className="bg-[#1b181f] rounded-lg py-6 px-6 md:px-8 flex flex-col md:flex-col items-center   gap-12 overflow-hidden w-full lg:flex-row"
          style={{
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)", // Adjust values as needed
          }}
        >
          <div
            id="left"
            className="w-full md:w-1/2 flex flex-col gap-3 items-center md:items-start pl-8 md:pl-4 pt-4"
          >
            <div id="title">
              <h1 className="text-4xl md:text-5xl text-[#FFE0C3] uppercase">
                Feel free to
              </h1>
              <h1 className="text-4xl md:text-5xl text-[#FFE0C3] uppercase">
                Contact Us
              </h1>
            </div>
            <p className="text-xs md:text-base font-light text-white text-center md:w-[90%] md:mt-2 md:text-left">
              Reach out to us with any questions, feedback, or inquiries you may
              have. Our team is here to assist you every step of the way.
            </p>
          </div>
          <div id="right" className="w-full md:w-1/2 pt-4 md:-translate-x-2">
            <form
              className="flex flex-col gap-6 items-center md:text-start"
              onSubmit={(e) => {
                e.preventDefault();
                setCity("");
                setFirstname("");
                setLastname("");
                setMessage("");
                setPhone("");
                setShowToast(true);
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="pl-4 p-2 font-light text-[15px] rounded-lg md:w-[200px]"
                  value={firstName}
                  required
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="pl-4 p-2 font-light text-[15px] rounded-lg md:w-[200px]"
                  value={lastName}
                  required
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                <div className="pl-4 p-2 font-light text-[15px] rounded-lg md:w-[200px] flex -translate-x-4">
                  <select
                    name="phoneCode"
                    className="bg-[#16131a] text-slate-400 rounded-lg w-[45px] font-light text-xs"
                    value={phoneCode}
                    onChange={(e) => setPhoneCode(e.target.value)}
                  >
                    <option disabled hidden>
                      +91
                    </option>

                    {codes &&
                      codes.map((code, index) => (
                        <option value={`${code}`} key={index}>
                          {code}
                        </option>
                      ))}
                  </select>
                  <Input
                    type=""
                    placeholder="Phone Number"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 w-[155px] ml-2 p-2 rounded-md"
                  />
                </div>
                <select
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="pl-4 md:-translate-x-3 font-light text-[15px] rounded-lg h-[35px] w-[200px] bg-[#16131a] text-white"
                >
                  <option>city</option>
                  {cities.map((city, index) => (
                    <option value={`${city}`} key={index}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Write your message?"
                  className="pl-4 p-2 font-light text-[15px] rounded-lg message-style md:w-[440px]"
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="flex w-full justify-center items-center flex-col gap-3 text-center">
                <p className="text-xs text-white">
                  <i className="ri-checkbox-circle-line"></i> &nbsp; By checking
                  this box, you are agreeing to our{" "}
                  <span className="underline">Terms of Service</span>
                </p>
                <button
                  type="submit"
                  className="text-black bg-white rounded-full px-4 py-2 uppercase hover:border-4 hover:border-white hover:bg-[#1b181f] hover:text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* <div
          id="bottom"
          className="mt-4 flex flex-col md:flex-row justify-between w-full items-center gap-4  pb-16 md:justify-center md:gap-24 md:items-start"
        >
          <div className="flex text-left items-center gap-1 md:gap-1 justify-center translate-y-2 -translate-x-9">
            <Logo className={"text-white"} />
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg text-white">
              Thoughts
            </h1>
          </div>
          <div
            id="footer-parts"
            className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-start w-fit"
          >
            <FooterPart
              title={"Quick links"}
              links={["Thoughts", "Blogs", "Podcasts", "FAQs"]}
            />
            <FooterPart title={"Pricing"} links={["Changing", "Docs"]} />
            <FooterPart title={"Company"} links={["About Us", "Contact Us"]} />
            <FooterPart
              title={"Customer Support"}
              links={["hello@gmail.com", "+26 564 7899"]}
            />
            <FooterPart
              title={"Elsewhere"}
              links={["Youtube", "LinkedIn", "Twitter", "Facebook"]}
            />
          </div>
        </div> */}
      </div>
      {/* <div
        id="last"
        className="border-t-[1px] border-t-slate-500 bg-[#1b181f] w-full flex font-light text-slate-400 text-[12px] justify-between items-center px-4 md:px-8 py-4"
      >
        <p>&copy; 2024 Thoughts. All rights reserved.</p>
        <div className="flex gap-6">
          <p>Privacy Policy</p>
          <p>Sitemap</p>
        </div>
      </div> */}
      {showToast && (
        <Toast
          text={"Message Received Successfully"}
          className={"bg-[#ffe0c3] text-black left-[80px]"}
        />
      )}
    </div>
  );
}

export default FooterForm;
// toast
// btn hovers
