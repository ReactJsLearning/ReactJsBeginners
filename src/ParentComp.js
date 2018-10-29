import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import sample from "./sample.json";
import SimpleBarChart from "./SimpleBarChart";
import ChartFilters from "./ChartFilters";

class ParentComp extends Component {
    constructor(props) {
        super();
        this.state = {
            id: [],
            dataValue: [],
            selectedId: null,
        }
    }

    componentDidMount() {
        var idArr = [];
        for (var i = 0; i < sample.length; i++) {
            idArr.push(sample[i].id);
        }
        this.setState({
            id: idArr,
            dataValue: sample[0].score,
        });
    }

    onTextChange = (val) => {
        this.setState({
            selectedId: val,
            dataValue: sample[val].score,
        });

    }


    render() {
        return (
            <div>
                <ChartFilters selectData={this.state.id} onTextChange={this.onTextChange}
                > </ChartFilters>

                <SimpleBarChart myProp = {this.state.dataValue} />
            </div>
        );
    }
}

export default ParentComp;