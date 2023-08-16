import React, { useState } from 'react';
import HomeTabItem from './HomeTabItem';
import feedsList from '../ItemData';

const HomeTab = () => {
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
        <button type="button" className={`hoall ${activeTab === 'all' ? 'active' : ''}`}  onClick={() => filterHandler('all')}><span>전체보기</span></button>
        <button type="button" className={`fab ${activeTab === 'homeaccFab' ? 'active' : ''}`} onClick={() => filterHandler('homeaccFab')}><span>패브릭</span></button>
        <button type="button" className={`scent ${activeTab === 'homeaccScent' ? 'active' : ''}`} onClick={() => filterHandler('homeaccScent')}><span>향</span></button>
        <button type="button" className={`vase ${activeTab === 'homeaccVase' ? 'active' : ''}`} onClick={() => filterHandler('homeaccVase')}><span>화병</span></button>
        <button type="button" className={`etc ${activeTab === 'homeaccEtc' ? 'active' : ''}`} onClick={() => filterHandler('homeaccEtc')}><span>그외</span></button>
      </div>
      {/* LightTabItem 컴포넌트로 필터링된 데이터를 전달하여 렌더링 */}
      <HomeTabItem data={filteredData} />
    </div>
  );
};

export default HomeTab;
