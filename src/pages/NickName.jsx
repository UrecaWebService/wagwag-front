import settingBg from "../assets/settingBg.png";
import profile from "../assets/profile.jpg";
import logoImage from "../assets/wagwagLogo.png";

const NickName = () => {
  return (
    <>
      <div className="absolute top-2 left-2">
        <img src={logoImage} alt="Logo" className="h-[38px] w-auto" />
      </div>
      <div
        className="h-screen w-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${settingBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-1/2 flex flex-col items-center gap-10">
          <div className="text-white text-center text-[20px] font-semibold mb-7">
            닉네임을 설정해 주세요
          </div>
          <div
            className="w-36 h-36 rounded-full"
            style={{
              backgroundImage: `url(${profile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <input
            type="text"
            placeholder="닉네임을 입력하세요"
            className="w-64 h-12 px-3 py-3 rounded-lg bg-transparent border-2 border-[#5E5E5E] text-white placeholder-[#5E5E5E]"
          />
          <button
            type="submit"
            className="bg-slate-50 w-24 h-12 rounded-lg border border-white mt-8 font-semibold cursor-pointer hover:bg-slate-700 hover:text-white"
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default NickName;
