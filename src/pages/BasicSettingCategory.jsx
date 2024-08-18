import React, { useState } from 'react';
import settingBg from '../assets/settingBg.png';
import logoImage from '../assets/wagwagLogo.png';

const BasicSettingCategory = () => {
    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleButtonClick = (label) => {
        if (selectedButtons.includes(label)) {
            setSelectedButtons(selectedButtons.filter((item) => item !== label));
        } else if (selectedButtons.length < 3) {
            setSelectedButtons([...selectedButtons, label]);
        }
    };

    const isSelected = (label) => selectedButtons.includes(label);

    return (
        <div
            className="h-screen w-screen flex flex-col items-center justify-center relative"
            style={{
                backgroundImage: `url(${settingBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* 로고 이미지 */}
            <div className="absolute" style={{ top: '66px', left: '69px' }}>
                <img src={logoImage} alt="Wagwag Logo" style={{ width: '177px' }} />
            </div>

            {/* 가이드 텍스트 */}
            <div className="text-white text-center">
                <h1 className="text-2xl font-bold"><span className='text-secondary'>waggle</span> 님이 관심있는 주제를 알려주세요</h1>
                <p className="text-sm mt-2"><span className='text-secondary'>*</span> 내 취향에 맞는 와글을 더 편리하게 볼 수 있어요</p>
            </div>

            {/* 카테고리 선택 영역 */}
            <div className="flex flex-col items-center mt-10 space-y-4">
                <div className="flex space-x-4">
                    <button
                        className={`border rounded-full px-10 py-3 ${isSelected('Beautiful') ? 'text-secondary border-secondary' : 'text-gray-500 border-gray-500'}`}
                        onClick={() => handleButtonClick('Beautiful')}
                    >
                        뷰티
                    </button>
                    <button
                        className={`border rounded-full px-10 py-3 ${isSelected('Health') ? 'text-secondary border-secondary' : 'text-gray-500 border-gray-500'}`}
                        onClick={() => handleButtonClick('Health')}
                    >
                        운동
                    </button>
                    <button
                        className={`border rounded-full px-10 py-3 ${isSelected('Song') ? 'text-secondary border-secondary' : 'text-gray-500 border-gray-500'}`}
                        onClick={() => handleButtonClick('Song')}
                    >
                        노래
                    </button>
                </div>

                <div className="flex space-x-4">
                    <button
                        className={`border rounded-full px-10 py-3 ${isSelected('Game') ? 'text-secondary border-secondary' : 'text-gray-500 border-gray-500'}`}
                        onClick={() => handleButtonClick('Game')}
                    >
                        게임
                    </button>
                    <button
                        className={`border rounded-full px-10 py-3 ${isSelected('Walk') ? 'text-secondary border-secondary' : 'text-gray-500 border-gray-500'}`}
                        onClick={() => handleButtonClick('Walk')}
                    >
                        산책
                    </button>
                    <button
                        className={`border rounded-full px-10 py-3 ${isSelected('Food') ? 'text-secondary border-secondary' : 'text-gray-500 border-gray-500'}`}
                        onClick={() => handleButtonClick('Food')}
                    >
                        음식
                    </button>
                </div>

                <div className="flex space-x-4">
                    <button
                        className={`border rounded-full px-10 py-3 ${isSelected('Daily life') ? 'text-secondary border-secondary' : 'text-gray-500 border-gray-500'}`}
                        onClick={() => handleButtonClick('Daily life')}
                    >
                        일상생활
                    </button>
                    <button
                        className={`border rounded-full px-10 py-3 ${isSelected('Popular in other regions') ? 'text-secondary border-secondary' : 'text-gray-500 border-gray-500'}`}
                        onClick={() => handleButtonClick('Popular in other regions')}
                    >
                        타 지역 인기 와글
                    </button>
                </div>
            </div>

            {/* 완료 버튼 */}
            <button
                className={`mt-10 rounded-full px-10 py-3 ${selectedButtons.length === 3 ? 'bg-white text-black' : 'bg-gray-400 text-gray-700'}`}
                disabled={selectedButtons.length !== 3}
            >
                완료
            </button>
        </div>
    );
}

export default BasicSettingCategory;
