import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//import sample from "./sample.json";
import SimpleBarChart from "./SimpleBarChart";


class ChartFilters extends Component {
    constructor(props) {
        super();
        // this.state = {
        //     dataValue: sample[0].score,
        // }
    }

    handleChange = (event) => {

       this.props.onTextChange(event.target.value);

   }


    render() {
        return (
            <div>
                <FormControl >
                    <Select native
                        value={this.props.selectData.id}
                        onChange={ this.handleChange}>
                        {this.props.selectData.map((id) => {
                            return <option >{[id]}</option>;
                        })}
                    </Select>
                </FormControl>
                {/* <SimpleBarChart myProp = {this.state.dataValue} /> */}
            </div>
        );
    }
}

export default ChartFilters;