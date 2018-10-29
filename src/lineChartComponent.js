import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
class LineChartComponent extends React.Component{
 
  render() {
    const data = this.props.empData;
    console.log(this.props.empData)
    return ( 
<div>
 {/* <LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="Month"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       
       <Line type="monotone" dataKey="Rating" stroke="#82ca9d" />
      </LineChart>    */}
  </div>
  
    );
  
}
}
//export default GetSelectID;
// LineChartComponent.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
LineChartComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default LineChartComponent;


