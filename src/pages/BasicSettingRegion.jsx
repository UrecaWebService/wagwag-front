import settingBg from "../assets/settingBg.png";


const BasicSettingRegion = () => {
    return (
        <>

        <div
            className="h-screen w-screen relative"
            style={{
                backgroundImage: `url(${settingBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen text-white">
                {/*title*/}
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold"><span className="italic">waggle</span> 님의 지역을 설정해 주세요</h1>
                    <p className="text-sm text-gray-500"><span className="text-sm text-green-400">* 내 지역</span>을 기반으로 와글을 볼 수 있어요</p>
                </div>

                <div
                    className="flex justify-between p-2 rounded-lg w-[100%] max-w-7xl h-80">
                    <div className="flex-[0.4] pr-4 border-r border-gray-500">
                        <div className="text-gray-400 mb-2 text-xl">시·도</div>
                        <div className="mt-14 bg-transparent text-white py-2 text-2xl hover:text-green-500">서울</div>
                    </div>
                    <div className="flex-8 w-2/5 pr-3">
                        <div className="pl-2 text-gray-400 mb-12 font-bold text-xl">구 · 군 · 시</div>
                        <div className="flex justify-center  ">
                            <div className="flex flex-wrap gap-2">
                                <button
                                    className="mx-3 mb-2 px-9 py-4 rounded-full border-2 border-transparent hover:text-green-500 focus:text-green-500 active:text-green-500 focus:border-green-500 active:border-green-500 font-semibold text-white text-xl transition-all duration-100">
                                    강남구
                                </button>


                                <button
                                    className="mx-3 mb-2 px-9 py-4 rounded-full border-2 border-transparent hover:text-green-500 focus:text-green-500 active:text-green-500 focus:border-green-500 active:border-green-500 font-semibold text-white text-xl transition-all duration-100">
                                    강북구
                                </button>

                                <button
                                    className="mx-3 mb-2 px-9 py-4 rounded-full border-2 border-transparent hover:text-green-500 focus:text-green-500 active:text-green-500 focus:border-green-500 active:border-green-500 font-semibold text-white text-xl transition-all duration-100">
                                    강동구
                                </button>

                                <button
                                    className="mx-3 mb-2 px-9 py-4 rounded-full border-2 border-transparent hover:text-green-500 focus:text-green-500 active:text-green-500 focus:border-green-500 active:border-green-500 font-semibold text-white text-xl transition-all duration-100">
                                    광진구
                                </button>

                                <button
                                    className="mx-3 mb-2 px-9 py-4 rounded-full border-2 border-transparent hover:text-green-500 focus:text-green-500 active:text-green-500 focus:border-green-500 active:border-green-500 font-semibold text-white text-xl transition-all duration-100">
                                    금천구
                                </button>

                                <button
                                    className="mx-3 mb-2 px-9 py-4 rounded-full border-2 border-transparent hover:text-green-500 focus:text-green-500 active:text-green-500 focus:border-green-500 active:border-green-500 font-semibold text-white text-xl transition-all duration-100">
                                    구로구
                                </button>

                                <button
                                    className="mx-3 mb-2 px-9 py-4 rounded-full border-2 border-transparent hover:text-green-500 focus:text-green-500 active:text-green-500 focus:border-green-500 active:border-green-500 font-semibold text-white text-xl transition-all duration-100">
                                    강서구
                                </button>
                            </div>


                        </div>
                    </div>

                    <div className="flex-8 w-1/3">
                        <div className="pl-2 text-gray-400 mb-12 font-bold text-xl">동 · 읍 · 면</div>
                        <div className="flex flex-wrap gap-2">
                            <button
                                className="px-4 py-2 rounded-lg border border-gray-500 bg-black/50  hover:text-green-500 focus:text-green-500 active:text-green-500 text-white">개포동
                            </button>
                            <button
                                className="px-4 py-2 rounded-lg border border-gray-500 bg-black/50 text-white">논현동
                            </button>
                            <button
                                className="px-4 py-2 rounded-lg border border-gray-500 bg-black/50 text-white">대치동
                            </button>
                            <button
                                className="px-4 py-2 rounded-lg border border-gray-500 bg-black/50 text-white">도곡동
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <button
                        className="px-8 py-3 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition">확인
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default BasicSettingRegion;
