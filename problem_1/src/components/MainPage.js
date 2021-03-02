import React, { useEffect, useRef } from 'react';

const MainPage = ({ fontSize, setFontSize }) => {

  const titleRef = useRef();
  const descRef = useRef();

  useEffect(() => {  // ...... 폰트 사이즈에 따라 해당 엘리먼트를 재 렌더링
    titleRef.current.style.fontSize = `${fontSize + 2}px`
    descRef.current.style.fontSize = `${fontSize}px`
  }, [fontSize]);

  const handleFontSize = (e) => {  //...... 최대 25, 최소 10의 폰트 사이즈를 조절할 수 있는 함수
    console.log(e.target)
    if(e.target.textContent === '+') {
      if(fontSize < 25) {
        setFontSize(fontSize + 1);
      }
    }
    else {
      if(fontSize > 10) {
        setFontSize(fontSize - 1);
      }
    }
  }

  return(
    <main className='main'>
      <div>
        <h4 className='description-title' ref={titleRef}>Lorem ipsum dolor sit amet</h4>
        <p className='description-desc' ref={descRef}>
        consectetur adipiscing elit.
        Praesent risus risus, fringilla pulvinar gravida eget,
        rhoncus et augue. Vivamus in euismod neque.
        Mauris id massa vel libero luctus viverra at vitae dolor.
        Donec sodales at dolor in blandit. Etiam viverra, leo eget aliquet placerat,
        sem velit efficitur mauris, blandit dictum erat odio ac ipsum.
        </p>
      </div>
      <footer>
        <button onClick={(e) => handleFontSize(e)}>+</button>
        <button onClick={(e) => handleFontSize(e)}>-</button>
      </footer>
    </main>
  );
}

export default MainPage;
