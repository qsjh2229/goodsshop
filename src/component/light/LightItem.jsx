import React from 'react';
import feedsList from '../../component/ItemData';

const LightItem = () => {
    return (
        <div>
            <h2>안녕</h2>
            {feedsList.filter(item => item.category.includes('light')).map(item => (
                <div key={item.id}>
                    <img src={item.img} alt="" />
                    <img src={item.subimg1} alt="" />
                    <img src={item.subimg2} alt="" />
                    <img src={item.subimg3} alt="" />
                </div>
            ))}
        </div>
    );
};

export default LightItem;
