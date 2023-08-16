import React, { useState } from 'react';
import FuniTabItem from './FuniTabItem';
import feedsList from '../ItemData';

const FuniTab = () => {
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
        <button type="button" className={`fuall ${activeTab === 'all' ? 'active' : ''}`}  onClick={() => filterHandler('all')}><span>전체보기</span></button>
        <button type="button" className={`shelf ${activeTab === 'funishelf' ? 'active' : ''}`} onClick={() => filterHandler('funishelf')}><span>선반/수납</span></button>
        <button type="button" className={`table ${activeTab === 'funiTable' ? 'active' : ''}`} onClick={() => filterHandler('funiTable')}><span>테이블</span></button>
        <button type="button" className={`chair ${activeTab === 'funiChair' ? 'active' : ''}`} onClick={() => filterHandler('funiChair')}><span>의자</span></button>
   
      </div>
      {/* LightTabItem 컴포넌트로 필터링된 데이터를 전달하여 렌더링 */}
      <FuniTabItem data={filteredData} />
    </div>
  );
};

export default FuniTab;
