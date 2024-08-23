import settingBg from "../assets/aaa.png";
import profile from "../assets/profile.jpg";
import logoImage from "../assets/wagwagLogo.png";
import { useEffect, useState } from "react";

const NickName = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const nicknames = ["하이", "닉네임", "여행중", "hi"]; // 닉네임 더미데이터

  useEffect(() => {
    // 특수문자를 검사하는 정규 표현식
    const specialCharacterRegex =
      /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

    if (!text.length) {
      setMessage("");
    } else if (text.length > 0 && text.length < 2) {
      setMessage(
        <>
          <span className="text-warning">* 2 글자 이상의 </span>
          닉네임으로 정해주세요
        </>
      );
    } else if (specialCharacterRegex.test(text)) {
      setMessage(
        <>
          <span className="text-warning">* 특수문자</span>는 제거해주세요
        </>
      );
    } else if (nicknames.includes(text)) {
      setMessage(
        <>
          <span className="text-warning">* 이미 사용 중</span>인 닉네임입니다
        </>
      );
    } else {
      setMessage(
        <>
          <span className="text-secondary">* 사용가능한 </span>
          닉네임입니다
        </>
      );
    }
  }, [text]);


  return (
    <div>
      <div className="absolute top-2 left-2">
        <img src={logoImage} alt="Logo" className="h-[38px] w-auto" />
      </div>
      <div>
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
          <div className="w-64">
            <input
              type="text"
              placeholder="닉네임을 입력하세요"
              className="w-64 h-12 px-3 py-3 rounded-lg bg-transparent border-2 border-[#5E5E5E] text-white placeholder-[#5E5E5E]"
              onChange={(e) => setText(e.target.value)}
            />
            <div className="text-[#898989] text-left mt-2 h-[24px]">
              {message}
            </div>
          </div>
          <button
            type="submit"
            className="bg-slate-50 w-24 h-12 rounded-lg border border-white mt-8 font-semibold cursor-pointer hover:bg-slate-700 hover:text-white"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default NickName;
