import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, 
  TableRow,
  TableHead, 
  Paper, 
  // Box, 
  Collapse, 
  KeyboardArrowDownIcon, 
  KeyboardArrowUpIcon,
  TableContainer,
  makeStyles, 
  TableCell, 
  TableBody, 
  Table } from "../../includes";
import {
  getUserList,
  fetchTreeData   // Step 3
} from "../../actions/user-listing";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserList:[]
    }
  }
  componentDidMount() {
    this.props.onfetchTreeData();
    console.log("PropsDidMoubnt", this.props)
  }

  componentDidUpdate(previousProps, previousState) {
  
    if (previousProps.getUserList.data !== this.state.getUserList) {
      this.setState({getUserList: this.props.getUserList.data})
    }
    console.log("previousPropspreviousProps", this.state.getUserList)

  }
  render() {
    const {getUserList} = this.state;

    
    const rows = [
      {id: 1, name: "Leanne Graham", calories:237, fat:9.0, carbs:37, protein:4.3},
      {id: 2, name: 'Ice cream sandwich', calories:237, fat:9.0, carbs:37, protein:4.3},
      {id: 3, name: 'Eclair', calories:262, fat:16.0, carbs:24, protein:6.0},
      {id: 4, name: 'Cupcake', calories:305, fat:3.7, carbs:67, protein:4.3},
      {id: 5, name: 'Gingerbread', calories:356, fat:16.0, carbs:49, protein:4.3},
      {id: 5, name: 'Gingerbread', calories:356, fat:16.0, carbs:49, protein:4.3},
      {id: 5, name: 'Gingerbread', calories:356, fat:16.0, carbs:49, protein:4.3},
    ];

    console.log("UpdateData_Props", typeof([getUserList.data]), typeof(rows));
    return (
      <Typography variant="display1" gutterBottom component="h2">
        <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Phone NUmber&nbsp;</TableCell>
            <TableCell align="right">Websites&nbsp;</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {getUserList.map((row, index) => {
            return(
                <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.website}</TableCell>
                </TableRow>
            )
           
  })}
        </TableBody>
      </Table>
    </TableContainer>
      </Typography>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  onGetUserList: getUserList,
  onfetchTreeData: fetchTreeData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
