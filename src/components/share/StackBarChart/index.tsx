import {Container, Row, Col} from 'react-bootstrap'
import React, { useRef, useEffect } from 'react'
import './StackBarChart.css'
type StackBarChartProps = {}
type StackBarChartState = {
  inputValue: string,
  chartData?: object
}

class StackBarChart extends React.Component<StackBarChartProps, StackBarChartState>{
  constructor(props: StackBarChartProps) {
    super(props);
  }

  render(){
    return (
     <>
      <div className="swap-svg">
        <svg className="" width="500" height="500">
          <circle cx="50" cy="50" r="40" stroke="green" stoke-width="4" fill="yellow" />
          <circle cx="50" cy="100" r="30" stroke="red" stoke-width="10" stroke-linecap="round" fill="yellow"/>
          <rect x="10" y="200" rx="10" width="70" height="100" fill="#AB7C94" stroke="red" stroke-width="10" />
          <line
            stroke-dasharray="5,5" d="M5 20 l215 0"
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="blue"
            stroke-width="10"
          />
        </svg>
      </div>
     </>
    )
  }
}

export default StackBarChart