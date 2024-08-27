const Contact = () => {
  return (
    <div className="contact-us flex flex-wrap items-center justify-center">
      <form className="contact-form p-3">
        <h2 className="font-semibold text-2xl mb-5">Contact Us</h2>
        <div className="form-group">
          <label for="name">Name:</label>
          <input
            className="border border-solid rounded-md border-gray-300"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            className="border border-solid rounded-md border-gray-300"
            type="email:"
            id="email"
            required
          />
        </div>
        <div className="form-group">
          <label for="Message">Message:</label>
          <textarea
            id="message"
            className="border border-solid rounded-md  border-gray-300"
            required
          />
        </div>
        <button
          className="Submit flex justify-center items-center px-4 py-2 bg-black hover:bg-gray-600 text-white rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
      <img
        className="contact-img"
        alt=""
        src={require("./assets/img/contact.png")}
      />
    </div>
  );
};
export default Contact;
