const About = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg dark:bg-white space-y-2.5">
      <h1>About</h1>
      <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
        <label
          htmlFor="saftFile"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          SAFT File
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 dark:text-gray-400 focus:outline-none dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
      </div>
      <div className="h-14 bg-gray-100 appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-lg">
        <label
          htmlFor="Website"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Website
        </label>
        <input
          placeholder="www.website.com"
          id="website"
          className="bg-gray-100 w-full h-6  rounded-md"
        />
      </div>
    </div>
  );
};
export default About;
