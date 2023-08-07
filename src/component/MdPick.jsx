import React from "react";

const MdPick = () => {
  return (
    <div>
      <div className="mdPick">
        <h2>MD PICK</h2>
        <div className="mdList">
          <ul>
            <li>
              <div className="md-img">
                <img src="img/funi/fun7.jpg" lt="모과 인센스" />
                <span className="bg">
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus provident beatae eum inventore necessitatibus nihil,
                  qui aliquid nam, ab culpa sint earum ipsa enim officia illum
                  deserunt! Co
                </span>
              </div>
              <span className="md-name"> 모과 인센스 홀더</span>
              <span className="md-price"> 35,500</span>
            </li>
            <li>
              <div className="md-img">
                <img src="img/light/light-3.jpg" lt="모과 인센스" />
                <span className="bg">
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus provident beatae eum inventore necessitatibus nihil,
                  qui aliquid nam, ab culpa sint earum ipsa enim officia illum
                  deserunt! Co
                </span>
              </div>
              <span className="md-name"> 접시</span>
              <span className="md-price"> 237,800</span>
            </li>
            <li>
              <div className="md-img">
                <img src="img/incens/incens-4.jpg" lt="모과 인센스" />
                <span className="bg">
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus provident beatae eum inventore necessitatibus nihil,
                  qui aliquid nam, ab culpa sint earum ipsa enim officia illum
                  deserunt! Co
                </span>
              </div>
              <span className="md-name"> 접시</span>
              <span className="md-price"> 37,000</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MdPick;
