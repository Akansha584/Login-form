import React from "react";
import { receive_employeeList } from "../store/actions/fetch_employee_list";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

class Details extends React.Component {
  componentDidMount() {
    this.props.receive_employeeList();
  }

  render() {
    if (this.props.employeeList) {
      return (
        <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                {Object.keys(this.props.employeeList.user[0]).map(
                  (heading, index) => {
                    return <th key={index}>{heading.toUpperCase()}</th>;
                  }
                )}
              </tr>
            </thead>
            {this.props.employeeList.user.map((employee, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNo}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  receive_employeeList: () => dispatch(receive_employeeList()),
});

const mapStateToProps = (state) => {
  return {
    employeeList: state.dataReducer.employeeList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
