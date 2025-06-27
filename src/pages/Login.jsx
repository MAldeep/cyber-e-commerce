import img from "../../public/Illustration.png";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa6";
import { BiSolidHide } from "react-icons/bi";

export default function Login() {
  return (
    <div className="w-full h-[100dvh] flex flex-wrap justify-between bg-[#F4F4F4] dark:bg-gray-900">
      <div className="w-[50%] h-[100%] flex justify-center items-center">
        <div className="w-[50%] h-[50%] flex justify-center items-center ">
          <img src={img} className="object-containe dark:rounded-4xl" alt="" />
        </div>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center">
        <div className="w-[75%] h-[95%] flex flex-col items-center gap-5 bg-white dark:bg-gray-700 dark:rounded-2xl">
          <div className="flex flex-col w-[70%] pt-[12px] text-3xl justify-start">
            <p className="dark:text-black">Welcome to</p>
            <p className="text-[#6358DC] font-bold">Login Page</p>
          </div>
          <div className="flex flex-col gap-4 w-[100%] items-center">
            <a className="w-[70%] py-5 flex items-center justify-center gap-2 shadow-2xl hover:bg-gray-200 rounded-[10px] transition-all bg-[#F4F4F4] cursor-pointer   ">
              <FcGoogle className="text-2xl dark:text-black" />
              <p className="dark:text-black">Login with Google</p>
            </a>
            <a className="w-[70%] py-5 flex items-center justify-center gap-2 shadow-2xl hover:bg-gray-200 rounded-[10px] transition-all bg-[#F4F4F4] cursor-pointer   ">
              <BiLogoFacebookCircle className="text-2xl dark:text-blue-800" />
              <p className="dark:text-black">Login with Facebook</p>
            </a>
          </div>
          <div className="w-[100%] flex justify-center">
            <div className="divider divider-neutral w-[70%] dark:text-black " >OR</div>
          </div>
          <div className="w-[70%] py-2 bg-[#ECECEC] flex items-center gap-5 px-4 rounded-[10px]">
            <IoMdMail className="text-2xl dark:text-black" />
            <div className="flex flex-col w-[100%] ">
              <label htmlFor="email" className="dark:text-black">
                Email
              </label>
              <input type="text" id="email" placeholder="example@mail.com" className="outline-0 w-[90%] dark:text-black" />
            </div>
          </div>
          <div className="w-[70%] py-2 bg-[#ECECEC] flex items-center gap-5 px-4 rounded-[10px]">
            <FaKey className="text-2xl dark:text-black" />
            <div className="flex flex-col w-[100%] relative ">
              <label htmlFor="pass" className="dark:text-black">
                Password
              </label>
              <input type="password" id="pass" placeholder="****************************" className="outline-0 w-[90%] dark:text-black" />
              <BiSolidHide className=" text-[16px] absolute top-[60%] right-0 cursor-pointer dark:text-black " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
