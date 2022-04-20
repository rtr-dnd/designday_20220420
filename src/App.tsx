import useMouse, { MousePosition } from '@react-hook/mouse-position';
import React, { useRef } from 'react';
import './App.css';

function App() {
  const ref = useRef(null)
  const mouse = useMouse(ref)

  const dist = (mouse: MousePosition) => {
    return Math.pow((mouse.elementWidth! / 2 - mouse.x!) ** 2 + (mouse.elementHeight! / 2 - mouse.y!) ** 2, 1/2)
  }

  return (
    <div ref={ref} className="App">
      <div
        className='container'
        style={{
          boxShadow:
            ((mouse.x! * -1 + mouse.elementWidth! / 2) * (!mouse.isDown ? 1 : 1.2)).toString() + 'px '
            + ((mouse.y! * -1 + mouse.elementHeight! / 2) * (!mouse.isDown ? 1 : 1.2)).toString() + 'px '
            + ((dist(mouse) * 0.05) * (!mouse.isDown ? 1 : 0.7)).toString() +'px '
            + ((dist(mouse) * 0.1 + 5) * (!mouse.isDown ? 1 : 1.3)).toString() + 'px '
            + 'rgba(55, 57, 59, ' + ((1.001 ** (-dist(mouse))) + (!mouse.isDown ? 0 : 0.1)).toString() + ')'
          //右(左)px 下(上)px ぼかし量px 影の拡大px 色
        }}
        >
        <div className='overlay'
          style={{
            opacity: ((1.001 ** (-dist(mouse))) * 100).toString() + '%'
          }}
        ></div>
        <h3>Shadow</h3>
        {/* <p>Mouse pointer casts a shadow.</p>
        <p>mouse position is: {mouse.x}, {mouse.y}</p>
        <p>screen size is: {mouse.elementWidth}, {mouse.elementHeight}</p>
        <p>distance from center is: {Math.round(dist(mouse))}</p> */}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
      </div>
    </div>
  );
}

export default App;
