import React, { useState } from 'react';
import LightTabItem from './LightTabItem';
import feedsList from '../../component/ItemData';

const LightTab = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredData, setFilteredData] = useState(feedsList); // 추가: 필터링된 데이터를 상태로 관리

  const filterHandler = (category) => {
    setActiveTab(category);

    if (category === 'all') {
      setFilteredData(feedsList); // 전체보기 버튼 클릭 시 모든 데이터 보여줌
    } else {
      const filteredData = feedsList.filter(item => item.category.includes(category));
      setFilteredData(filteredData); // 선택한 카테고리에 해당하는 데이터만 보여줌
    }
  };

  return (
    <div className='page-tab-wrap'>
      <h1> CATEGORY</h1>
      <div className='page-tab-btn'>
        <button type="button" className={`kiall ${activeTab === 'all' ? 'active' : ''}`}  onClick={() => filterHandler('all')}><span>전체보기</span></button>
        <button type="button" className={`cup ${activeTab === 'kitchencup' ? 'active' : ''}`} onClick={() => filterHandler('kitchencup')}><span>컵</span></button>
        <button type="button" className={`dish ${activeTab === 'kitchendish' ? 'active' : ''}`} onClick={() => filterHandler('kitchendish')}><span>접시</span></button>
        <button type="button" className={`etc ${activeTab === 'kitchenetc' ? 'active' : ''}`} onClick={() => filterHandler('kitchenetc')}><span>그외</span></button>
      </div>
      {/* LightTabItem 컴포넌트로 필터링된 데이터를 전달하여 렌더링 */}
      <LightTabItem data={filteredData} />
    </div>
  );
};

export default LightTab;
