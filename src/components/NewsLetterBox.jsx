import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now and get 20% off
      </p>
      <p className=" mt-3 text-gray-400">
        Join our newsletter for first looks at new arrivals, limited-time deals,
        and insider-only perks.
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          onSubmit={(e) => onSubmitHandler(e)}
          className="bg-black text-white text-xs px-10 py-4"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
