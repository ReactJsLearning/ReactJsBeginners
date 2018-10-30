import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import selectOptionData from "./jsonData/employeeDetails.json";
import ControlledOpenSelect from "./selectOption.js";
import LineChartComponent from './lineChartComponent.js';
import ParentComp from './ParentComp.js';
import SimpleBarChart from './SimpleBarChart.js';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 12 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {

  constructor(props){
    super(props)
    this.state = {
     employeeDetails:selectOptionData[0].Performance,
     empName:selectOptionData[0].EmployeeId ,
     value: 0,};
  }
   
   handleSelectChange(e, index, value,empName,selectOptionData){
     
     this.setState({
       [empName] : value,
     });
   
 }
//  onSelecthandleChange = event => {
//   var selctedData = this.props.emp;
//   this.setState({ [event.target.name]: event.target.value });
//   for (var i = 0; i < selctedData.length; i++) {
  
//     if (selctedData[i].EmployeeId === event.target.value) {
    
//       this.setState({
        
//        employeeDetails: selctedData[i].Performance,
//        empName: event.target.value,
      
//       });
      
//       console.log(this.state.employeeDetails);
//     }
//   }
// };
   onSelecthandleChange = event => {
     this.setState({ [event.target.name]: event.target.value });
     for (var i = 0; i < selectOptionData.length; i++) {
     
       if (selectOptionData[i].EmployeeId === event.target.value) {
       
         this.setState({
           
          employeeDetails: selectOptionData[i].Performance,
          empName: event.target.value,
         
         });
         
         console.log(this.state.employeeDetails);
       }
     }
   };
 
   handleClose = () => {
     this.setState({ open: false });
     
   };
 
   handleOpen = () => {
     console.log(this.state.selectOptionData[0].Performance);
     this.setState({ open: true });
   };
 
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log(this.state.employeeDetails)
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Line Chart" />
            <Tab label="Bar Chart" />
          </Tabs>
         
        </AppBar>
        <ControlledOpenSelect emp={selectOptionData} change={this.onSelecthandleChange} initalData={this.state.employeeDetails}  open={this.handleOpen} close={this.handleClose} value={this.state.empName} inputPropsname={this.state.empName}/>
        {value === 0 && <TabContainer><div><LineChartComponent linechartdata={this.state.employeeDetails}/></div></TabContainer>}
        {value === 1 && <TabContainer><div><SimpleBarChart  barchartdata={this.state.employeeDetails}/>
       </div></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
