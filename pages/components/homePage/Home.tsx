function Home() {
  return (
    <div className="flex flex-col gap-10 mt-80 space-x-10">
      <div className="grid gap-y-8">
        <div className="flex justify-center">
          <h1 className="text-7xl">Order</h1>
          <h1 className="text-7xl font-thin">ly</h1>
        </div>
        <div className="flex justify-center text-3xl ">
          <h3>Easy & private crypto investments managment</h3>
        </div>
      </div>
      <div className="flex justify center gap-x-3">
        <div className="w-80 h-24">
          <a
            href="#"
            className="py-8 px-4 text-s block bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              Control & manage investment
            </h5>
            <p className="text-gray-700 dark:text-gray-400">
              Some Text described anonomized model of data savig how is it
            </p>
          </a>
        </div>
        <div className="">
          <a
            href="#"
            className="py-8 px-4  w-72 h-36 text-s block bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              OTC Deals on deck
            </h5>
            <p className=" text-gray-700 dark:text-gray-400">
              Some Text described anonomized model of data savig how is it
            </p>
          </a>
        </div>
        <div className="w-72 h-36 ">
          <a
            href="#"
            className="py-8 px-4  text-s block bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              Anonymized data
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Some Text described anonomized model of data savig how is it
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home