export default function emailVerify() {

  
    return (
      <div className="grid w-2/5">
          <div className="flex ml-10 flex-col justify-center ">
            <label className="flex justify-center text-3xl">Sign Up</label>
            <p className="font-normal text-gray-700 dark:text-gray-400">The confirmation letter with the sign-in link has been sent to your email adddress: {'example@yahoo.com'}</p>
            <a
              className="text-white font-bold py-2 px-4 "
            >
              Open mail.yahoo.com
            </a>
            <div className="flex gap-2 justify-center">
              <label>Have not account?</label>
              <a className="font-bold">Sign Up</a>
            </div>
          </div>
      </div>
    );
  }