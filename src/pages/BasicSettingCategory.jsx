import React, { useState } from 'react';
import settingBg from '../assets/bbb.png';
import logoImage from '../assets/wagwagLogo.png';

const categories = [
    '뷰티', '운동', '노래',
    '게임', '산책', '음식',
    '일상생활', '타 지역 인기 와글'
];

const BUTTON_SELECTED_CLASS = 'text-secondary border-secondary';
const BUTTON_UNSELECTED_CLASS = 'text-gray-500 border-gray-500';

const BasicSettingCategory = ({ username = 'waggle' }) => {
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
        <div>
            {/* 로고 이미지 */}
            <div className="absolute" style={{ top: '66px', left: '69px' }}>
                <img src={logoImage} alt="Wagwag Logo" style={{ width: '177px' }} />
            </div>

            {/* 가이드 텍스트 */}
            <div className="text-white text-center">
                <h1 className="text-2xl font-bold">
                    <span className='text-secondary'>{username}</span> 님이 관심있는 주제를 알려주세요
                </h1>
                <p className="text-sm mt-2">
                    <span className='text-secondary'>*</span> 내 취향에 맞는 와글을 더 편리하게 볼 수 있어요
                </p>
            </div>

            {/* 카테고리 선택 영역 */}
            <div className="w-1/3 mx-auto mt-10 max-h-[calc(100vh-400px)] overflow-y-auto">
                <div className="flex flex-wrap justify-center mt-10 gap-4">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`border rounded-full px-10 py-3 ${isSelected(category) ? BUTTON_SELECTED_CLASS : BUTTON_UNSELECTED_CLASS}`}
                            onClick={() => handleButtonClick(category)}
                        >
                            {category}
                        </button>
                    ))}
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
