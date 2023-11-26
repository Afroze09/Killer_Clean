import React, { useState } from "react";

const Contact = () => {
    const [openItem, setOpenItem] = useState(null);

  const handleClick = (index) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  };

  return (
    <div className="w-screen ">
      <div
        className="w-full h-[270px] bg-cover bg-center flex flex-col text-center justify-center"
        style={{
          backgroundImage:
            "url('https://dp3d2hb4975es.cloudfront.net/assets/images/banner-bg.jpg')",
        }}
      >
        <p className="text-[40px] font-bold mb-10">
          We Will Be In Touch Within 24 Hours
        </p>
        <p className="">
          You can fill out this form and we will give you a custom quote with
          more detailed information. If you need to call us please reach out to
          us at 123-456-7890.
        </p>
      </div>

      <div className="flex justify-center mt-16 gap-10">
        <div>
          <form className="w-[850px] h-[980px] bg-white rounded-lg px-10 py-10 flex flex-col shadow-md">
            <h2 className="text-[25px] mb-4">What Is Your Request?</h2>
            <div>
              <h3 className="font-bold">Name</h3>
              <input
                className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
                type="text"
                placeholder="Joe"
              />
            </div>
            <div>
              <h3 className="font-bold">Phone Number</h3>
              <input
                className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
                type="text"
                placeholder="(123)456-7890"
              />
            </div>
            <div>
              <h3 className="font-bold">Email</h3>
              <input
                className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
                type="email"
                placeholder="joes@example.com"
              />
            </div>
            <div>
              <h3 className="font-bold">What Are You Looking For?</h3>
              <div className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm">
                <select>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <div>
              <h3 className="font-bold">
                Have you tried our services before ?
              </h3>
              <label className="mt-2 mb-4 ">
                <input
                  className="ml-2 mr-2 h-6 w-6 border-gray-300"
                  type="radio"
                  name="contactMethod"
                  value="email"
                />
                Yes
                {/* </label>
              <label> */}
                <input
                  className="ml-2 mr-2 h-6 w-6 border-gray-300"
                  type="radio"
                  name="contactMethod"
                  value="phone"
                />
                No
              </label>
            </div>
            <div>
              <h3 className="font-bold">Additional Notes?</h3>
              <textarea
                className="mt-2 mb-4 w-full rounded-md border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
                rows="4"
                placeholder="Please provide anything extra here."
              ></textarea>
            </div>
            <hr className="mt-2 mb-4" />
            <div className="mb-4">
              <h1 className="text-2xl mb-4">Help Our Company</h1>
              <h3 className="font-bold">How Did You Hear About Us?</h3>
              <div>
                <label className="mt-3 mb-4">
                  <input
                    className=" mr-2 h-6 w-6 border-gray-300 rounded-md"
                    type="checkbox"
                    name="additionalInfo"
                  />
                  Facebook
                  <input
                    className="ml-2 mr-2 h-6 w-6 border-gray-300 rounded-md"
                    type="checkbox"
                    name="additionalInfo"
                  />
                  Google
                  <input
                    className="ml-2 mr-2 h-6 w-6 border-gray-300 rounded-md"
                    type="checkbox"
                    name="additionalInfo"
                  />
                  Yelp
                  <input
                    className="ml-2 mr-2 h-6 w-6 border-gray-300 rounded-md"
                    type="checkbox"
                    name="additionalInfo"
                  />
                  Friend
                  <input
                    className="ml-2 mr-2 h-6 w-6 border-gray-300 rounded-md"
                    type="checkbox"
                    name="additionalInfo"
                  />
                  Thumbtack
                </label>
              </div>
            </div>
          </form>
          <div className="mt-2 mb-10">
            <h2>
              By entering any information, you affirm you have read and agree to
              the Terms of Service and Privacy Policy.
            </h2>
            <button
              className="h-14 w-full rounded-lg bg-gray-300 mt-4"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[250px] bg-white rounded-lg flex flex-col px-4 py-4 shadow-md">
          <h2 className="mb-4 font-bold">Popular Questions</h2>
          <div>
            {[
              "How do I use this form?",
              "Where can I find pricing?",
              "Where can I find availability?",
            ].map((question, index) => (
              <div className="mb-4" key={index} style={{ display: "inline-block"}}>
                <button onClick={() => handleClick(index)}>
                  <i
                    className={`fi ${
                      openItem === index
                        ? "fi-ss-angle-down"
                        : "fi-ss-angle-right"
                    }`}
                  ></i>
                  {question}
                </button>
                {openItem === index && (
                  <p className="ml-3 mt-2 text-gray-400 text-sm">
                    {index === 0
                      ? "You can submit your request and we will be in touch within 48 hours."
                      : index === 1
                      ? "To get pricing you can use the 'Book Now' option on the site instead."
                      : "You can find that from the 'Book Now' form on this website."}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
