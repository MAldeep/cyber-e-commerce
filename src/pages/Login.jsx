import img from "../../public/Illustration.png";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa6";
import { BiSolidHide } from "react-icons/bi";

export default function Login() {
  return (
    <div className="w-full h-[100dvh] flex flex-wrap justify-between bg-[#F4F4F4]">
      <div className="w-[50%] h-[100%] flex justify-center items-center">
        <div className="w-[50%] h-[50%] flex justify-center items-center ">
          <img src={img} className="object-containe" alt="" />
        </div>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center">
        <div className="w-[75%] h-[95%] flex flex-col items-center gap-5 bg-white">
          <div className="flex flex-col w-[70%] pt-[12px] text-3xl justify-start">
            <p>Welcome to</p>
            <p className="text-[#6358DC] font-bold">Login Page</p>
          </div>
          <div className="flex flex-col gap-4 w-[100%] items-center">
            <a className="w-[70%] py-5 flex items-center justify-center gap-2 shadow-2xl hover:bg-gray-200 rounded-[10px] transition-all bg-[#F4F4F4] cursor-pointer   ">
              <FcGoogle className="text-2xl" />
              <p>Login with Google</p>
            </a>
            <a className="w-[70%] py-5 flex items-center justify-center gap-2 shadow-2xl hover:bg-gray-200 rounded-[10px] transition-all bg-[#F4F4F4] cursor-pointer   ">
              <BiLogoFacebookCircle className="text-2xl" />
              <p>Login with Facebook</p>
            </a>
          </div>
          <div className="divider">OR</div>
          <div className="w-[70%] py-2 bg-[#ECECEC] flex items-center gap-5 px-4 rounded-[10px]">
            <IoMdMail className="text-2xl" />
            <div className="flex flex-col  w-[100%] ">
              <label htmlFor="email">
                Email
              </label>
              <input type="text" id="email" placeholder="example@mail.com" className="outline-0 w-[90%]" />
            </div>
          </div>
          <div className="w-[70%] py-2 bg-[#ECECEC] flex items-center gap-5 px-4 rounded-[10px]">
            <FaKey className="text-2xl" />
            <div className="flex flex-col w-[100%] relative ">
              <label htmlFor="pass">
                Password
              </label>
              <input type="password" id="pass" placeholder="****************************" className="outline-0 w-[90%]" />
              <BiSolidHide className=" text-[16px] absolute top-[60%] right-0 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
