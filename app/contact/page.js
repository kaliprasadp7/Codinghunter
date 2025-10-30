"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  // Onchange function for form fields
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormStatus("");
  };

  // handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if(response.ok){
        setFormStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }else{
        setFormStatus("Failed to send your message. Please try again later.");
      }

    } catch (error) {
      setFormStatus("An error occurred. Please try again later.");
      console.error("Error submitting form:", error);
    }
      
  };


  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-5xl font-bold text-center sm:text-left py-8">
        Contact Us
      </h1>
      <p className="text-lg text-center  max-w-2xl px-24 pb-12">
        If you have any questions, suggestions, or just want to say hello, feel
        free to reach out to us!
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4 w-lg rounded-lg py-12 px-12 shadow-2xl shadow-gray-500"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={onChange}
          className="w-md border-2 border-black rounded-sm text-2xl px-2 "
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
          className="w-md border-2 border-black rounded-sm text-2xl px-2 "
          required
        />
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Write your concern"
          value={formData.message}
          onChange={onChange}
          className="w-md border-2 border-black rounded-sm text-2xl px-2 "
          required
        />
        <button
          type="submit"
          className="bg-gray-800 text-white font-bold px-5 py-2.5 w-32 h-12 rounded-lg cursor-pointer"
        >
          Submit
        </button>
        {formStatus && (
          <p className="text-green-600 font-semibold">
            {formStatus}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
