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
                    <h1 className="text-xl font-bold">waggle 님의 지역을 설정해 주세요</h1>
                    <p className="text-sm text-green-400">* 내 지역을 기반으로 와글을 볼 수 있어요</p>
                </div>

                <div
                    className="flex justify-between p-6 rounded-lg w-[80%] max-w-4xl">
                    <div className="w-1/3 pr-4">
                        <div className="text-gray-400 mb-2">시·도</div>
                        <div className="bg-transparent border-b border-gray-500 text-white py-2">서울</div>
                    </div>

                    <div className="w-1/3 pr-4">
                        <div className="text-gray-400 mb-2">구·군·시</div>
                        <div className="flex flex-wrap gap-2">
                            <button
                                className="px-4 py-2 rounded-full border border-gray-500 hover:text-green-500 bg-black/50 text-white">강남구
                            </button>
                            <button
                                className="px-4 py-2 rounded-full border border-gray-500 hover:text-green-500 bg-black/50 text-white">강북구
                            </button>
                            <button
                                className="px-4 py-2 rounded-full border border-gray-500 hover:text-green-500 bg-black/50 text-white">강동구
                            </button>
                            <button
                                className="px-4 py-2 rounded-full border border-gray-500 hover:text-green-500 bg-black/50 text-white">광진구
                            </button>
                            <button
                                className="px-4 py-2 rounded-full border border-gray-500 hover:text-green-500 bg-black/50 text-white">금천구
                            </button>
                            <button
                                className="px-4 py-2 rounded-full border border-gray-500 hover:text-green-500 bg-black/50 text-white">구로구
                            </button>
                            <button
                                className="px-4 py-2 rounded-full border border-gray-500 hover:text-green-500 bg-black/50 text-white">강서구
                            </button>
                        </div>
                    </div>

                    <div className="w-1/3">
                        <div className="text-gray-400 mb-2">동·읍·면</div>
                        <div className="flex flex-wrap gap-2">
                            <button
                                className="px-4 py-2 rounded-lg border border-gray-500 bg-black/50 text-white">개포동
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
