const Contact = () => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-black p-2 m-2 bg-gray-100"
            placeholder="name"
          />
          <input
            type="text"
            className="border border-black p-2 m-2 bg-gray-100"
            placeholder="message"
          />
          <button className="border border-black p-2 m-2 bg-gray-100 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
