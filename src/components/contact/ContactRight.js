import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { motion } from "framer-motion";
const ContactRight = () => {
  const [status, setStatus] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwdDET1EnR9XkhEit0lJn7Lj2vDxPn0rJslY7vCVnCehsidC_ekvBdSQ7U5icVxDgUF/exec";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    const currentDateTime = new Date().toLocaleString();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Phone", formData.Phone);
    form.append("Address", formData.Address);
    form.append("Message", formData.Message);
    form.append("DateTime", currentDateTime);

    try {
      setLoading(true);
      const response = await fetch(scriptURL, { method: "POST", body: form });
      if (response.ok) {
        setStatus("Success! Your message has been sent.");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Address: "",
          Message: "",
        });
      } else {
        setStatus("Error! Unable to send your message.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      setStatus("Error! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-10">
          <ColorRing
            visible={true}
            height="150"
            width="150"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
          <p className="text-lg font-semibold">
            Submission on process. Thank you for holding...{" "}
          </p>
        </div>
      ) : status ? (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-10 flex flex-col gap-2 items-center justify-center"
        >
          <p className="text-xl font-semibold text-green-500">{status}</p>
          <p className="text-base text-slate-300">
            Thank you for your time and will make sure to reach you out on your
            email:{" "}
            <span className="text-lg font-semibold text-green-500">
              {formData?.Email}
            </span>{" "}
            as soon as possible
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">
                your name
              </p>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                value={formData.Name}
                onChange={handleChange}
                className="contactInput"
                autoComplete="name"
                required
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">
                phone number
              </p>
              <input
                type="text"
                name="Phone"
                placeholder="Phone"
                value={formData.Phone}
                onChange={handleChange}
                className="contactInput"
                autoComplete="phone"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-wide text-gray-400">
              Email
            </p>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
              className="contactInput"
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-wide text-gray-400">
              Subject
            </p>
            <input
              type="text"
              name="Address"
              placeholder="Address"
              value={formData.Address}
              onChange={handleChange}
              className="contactInput"
              autoComplete="address"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-wide text-gray-400">
              message
            </p>
            <textarea
              name="Message"
              placeholder="Text here"
              value={formData.Message}
              onChange={handleChange}
              className="contactTextArea"
              cols={30}
              rows={8}
              required
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-x-1 bg-white/15
               hover:bg-white/10 w-48 h-14 text-base font-semibold relative 
               overflow-hidden self-center mt-4 rounded-lg border border-green-600"
            >
              Send mail
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ContactRight;
