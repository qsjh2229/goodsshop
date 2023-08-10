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
    <div className='light-tab-wrap'>
      <h1> CATEGORY</h1>
      <div className='light-tab-btn'>
        <button type="button" className={`ligall ${activeTab === 'all' ? 'active' : ''}`}  onClick={() => filterHandler('all')}><span>전체보기</span></button>
        <button type="button" className={`pan ${activeTab === 'lightpandunt' ? 'active' : ''}`} onClick={() => filterHandler('lightpandunt')}><span>팬던트</span></button>
        <button type="button" className={`tab ${activeTab === 'lighttable' ? 'active' : ''}`} onClick={() => filterHandler('lighttable')}><span>테이블</span></button>
        <button type="button" className={`fol ${activeTab === 'lightfloor' ? 'active' : ''}`} onClick={() => filterHandler('lightfloor')}><span>플로어</span></button>
      </div>
      {/* LightTabItem 컴포넌트로 필터링된 데이터를 전달하여 렌더링 */}
      <LightTabItem data={filteredData} />
    </div>
  );
};

export default LightTab;
