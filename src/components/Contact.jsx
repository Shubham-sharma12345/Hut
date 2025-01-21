import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="bg-[url('https://images.pexels.com/photos/1100447/pexels-photo-1100447.jpeg?auto=compress&cs=tinysrgb&w=400')]
      w-full h-[90vh] bg-no-repeat bg-center bg-cover flex flex-col justify-evenly items-center relative"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="font-bold text-3xl sm:text-4xl">Get in Touch</h1>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-2 gap-4 py-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name..."
              value={formData.firstName}
              onChange={handleChange}
              className="text-white font-bold border-2 px-4 py-3 border-white rounded-lg bg-transparent"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name..."
              value={formData.lastName}
              onChange={handleChange}
              className="text-white font-bold border-2 px-4 py-3 border-white rounded-lg bg-transparent"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone..."
              value={formData.phone}
              onChange={handleChange}
              className="text-white font-bold border-2 px-4 py-3 border-white rounded-lg bg-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Email..."
              value={formData.email}
              onChange={handleChange}
              className="text-white font-bold border-2 px-4 py-3 border-white rounded-lg bg-transparent"
            />
          </div>
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="text-white font-bold border-2 px-4 py-3 border-white rounded-lg bg-transparent w-full"
            rows="5"
          ></textarea>

          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
