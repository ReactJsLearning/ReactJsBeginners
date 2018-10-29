

export class serviceComponent extends Component{
    constructor(){
        this.state ={
            empDetails:[]
        }
    }
    getEmpList(){
            fetch('./jsonData/employeeDetails.json')
            .then(response => response.json())
            .then(data => this.setState({ empDetails: data})
        );
    }
    render(){
        return(
        <div>
            {
                this.state.empDetails.map((dynamicList,i) => <p>{dynamicList.EmployeeName}</p>)
            }
            </div>
            );
    }
}