import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import selectOptionData from "./jsonData/employeeDetails.json";
import Button from '@material-ui/core/Button';
import LineChartComponent from './lineChartComponent';
import Content from './App';
import SimpleTabs from './chartTypeComponent';
const styles = theme => ({
   mainDiv:{
    
   },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
 
  constructor(props){
    super(props)
    this.state = {
     employeeDetails:this.props.initalData,
    empName:this.props.inputPropsname};
  }
  onSelecthandleChange = event => {
    var selctedData = this.props.emp;
    this.setState({ [event.target.name]: event.target.value });
    for (var i = 0; i < selctedData.length; i++) {
    
      if (selctedData[i].EmployeeId === event.target.value) {
      
        this.setState({
          
         employeeDetails: selctedData[i].Performance,
         empName: event.target.value,
        
        });
        
        console.log(this.state.employeeDetails);
      }
    }
  };

  render() {
    //const { classes } = this.props;
    console.log(this.props);
    

    return (
      
      <div>
      <form autoComplete="off" >
       <div style={{float: "right", margin: "10px 30px 0px 0"}}>
        <FormControl>
          <InputLabel htmlFor="empList-id" style={{color:'Black'}}>Employee List</InputLabel>
          <Select 
          style ={{borderBottom: "1px solid #fff",color:"Black"}}
          onOpen={this.props.open}
          onClose={this.props.close}
          value={this.state.empName}
          onChange={this.onSelecthandleChange}
          inputProps={{
            name: this.state.empName,
            id: 'empList-id',
          }}
          >
           
          {this.props.emp.map((postdetail, index)=>{ 
              return <MenuItem value={postdetail.EmployeeId} >{postdetail.EmployeeName}</MenuItem>
              })}
            
          </Select>
        </FormControl> 
        </div>
       
      </form>
      <div  style={{margin: "10px 0px 0px 0"}}>
      <LineChartComponent empData={this.state.employeeDetails} /> </div>
      </div>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
