const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-5">Contact Us Page</h1>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="Message"
          className="border border-black p-2 m-2"
        />
        <button
          type="submit"
          className="border border-black p-2 m-2 cursor-pointer bg-gray-100 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
