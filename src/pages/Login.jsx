import settingBg from '../assets/settingBg.png';
import logoImage from '../assets/wagwagLogo.png';
import googleIcon from '../assets/google.png';
import naverIcon from '../assets/naver.png';
import { GoogleOAuthProvider } from '@react-oauth/google';


const Login = () => {



    return (
        <>
            {/* <div><h1 className="font-thin">로그인</h1></div> */}
            <div>
                <div className='relative flex flex-col items-center font-sans'>
                    <button
                        type="submit"
                        className="hover:text-[#ffffff] mt-[410px] flex items-center justify-center bg-[rgba(8,8,8,0.3)] border border-solid border-[#787878] text-[#787878] text-[22px] rounded-2xl w-[550px] h-[70px] cursor-pointer transition-colors duration-300 hover:border-[#ffffff]"
                    >
                        <img
                            src={googleIcon}
                            alt="Google Icon"
                            className="h-[32px] w-[32px] ml-[18px]"
                        />
                        <span className="flex-grow text-center ml-[-50px]">
                        구글로 시작하기
                    </span>
                    </button>

                    <button
                        type="submit"
                        className="hover:text-[#ffffff] mt-[20px] flex items-center justify-center bg-[rgba(8,8,8,0.3)] border border-solid border-[#787878] text-[#787878] text-[22px] rounded-2xl w-[550px] h-[70px] cursor-pointer transition-colors duration-300 hover:border-[#ffffff]"
                    >
                        <img
                            src={naverIcon}
                            alt="Naver Icon"
                            className="h-[38px] w-[38px] ml-[15px]"
                        />
                        <span className="flex-grow text-center ml-[-52px]">
                        네이버로 시작하기
                    </span>
                    </button>
                </div>
            </div>

            <div className="absolute top-[251px] left-1/2 -translate-x-1/2">
                <img
                    src={logoImage}
                    alt="Logo"
                    className="h-[38px] w-auto"
                />
            </div>

            <div className='absolute flex items-center justify-center top-[318px] left-1/2 -translate-x-1/2'>
                <h1
                    className='font-sans text-xl text-center text-white'
                >
                    로그인을 위한 계정을 선택해주세요
                </h1>
            </div>
        </>
    )
}


export default Login;

