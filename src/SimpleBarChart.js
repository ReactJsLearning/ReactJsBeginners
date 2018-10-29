import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import CustomizedLabel from './CustomizedLabel.js';
class SimpleBarChart extends Component {

    constructor() {
        super();
        this.state = {
        };
    }
  render() {
    
        return (
            <div>
               <BarChart width={1000} height={500} data={this.props.myProp}
                    margin={{ top: 30, right: 30, left: 30, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="rating" fill="#8884d8"label={<CustomizedLabel />}/>
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart> 

            </div>
        );
    }
}

export default SimpleBarChart;