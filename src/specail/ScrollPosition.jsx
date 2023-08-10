/* y스크롤 도착시 이벤트 발생 */

/* 사용법

const scrollPosition = ScrollPosition() 함수 선언 후
타겟에 <div className={`기존클래스 transPosition ${scrollPosition >= 600 ? 'originPosition' : ''}`}>
css에 추가 : .originPosition{ transform: translateY(0px) translateX(0px) !important;}
css에 추가 : .transPosition{transform: translateY(500px) scale(.2); transition: .5s;}

*/

// 주의사항 : 웹페이지 전체 영역이 아닌 컴포넌트 기준 y위치입니다.
// 주의사항 : CSS 지배관계는 일반적인 CSS 원칙을 따릅니다.

/* import { useState, useEffect } from "react"

const ScrollPosition = () => {
   const [scrollPosition, setScrollPosition] = useState(0)

   useEffect(() => {
      const handleScroll = () => {
         setScrollPosition(window.scrollY)
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [])

   return scrollPosition
}

export default ScrollPosition */
import { useState, useEffect } from "react";

const ScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default ScrollPosition;
