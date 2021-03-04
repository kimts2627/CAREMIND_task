import React, { useState, useEffect } from 'react';
import Chart from "react-google-charts";
import './App.css';


function App() {

  return(
    <Chart
      width={900}
      height={500}
      chartType='PieChart'
      loader={<div>Loading Chart</div>}
      data={[
        ['Task', 'Hours per Day'],
        ['😃', 11],
        ['시간내어', 2],
        ['검토', 2],
        ['해 주셔서', 2],
        ['감사드립니다', 7]
      ]}
      options={{
        title: '주니어 프론트엔드 개발자 김태수',
        is3D: true
      }}
      rootProps={{ 'data-testid': '2' }}
    />
  );
}

export default App;
