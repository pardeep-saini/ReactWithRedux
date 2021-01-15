import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { 
  TableRow,
  TableHead, 
  Paper, 
  IconButton,
  Collapse, 
  KeyboardArrowDownIcon, 
  KeyboardArrowUpIcon,
  TableContainer, 
  TableCell, 
  TableBody, 
  Table 
} from "../../includes";

import {
  getUserList,
  fetchTreeData
} from "../../actions/user-listing";

const right = "right";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align={right}>{row.username}</TableCell>
        <TableCell align={right}>{row.phone}</TableCell>
        <TableCell align={right}>{row.email}</TableCell>
        <TableCell align={right}>{row.website}</TableCell>
        <TableCell align={right}>{"View Routers"}</TableCell>
      </TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
              <Table size="small" aria-label="purchases">
                <TableBody>
                    <TableRow key={row.address.city}>
                 <TableCell />
                      <TableCell component="th" scope="row" align={right}>
                        {row.address.city}
                      </TableCell>
                      <TableCell align={right}>{row.address.street}</TableCell>
                      <TableCell align={right}>{row.address.suite}</TableCell>
                      <TableCell align={right}>{row.address.zipcode}</TableCell>
                      <TableCell align={right}>{row.address.geo.lat}</TableCell>
                      <TableCell align={right}>{"View Routers"}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
          </Collapse>
        </TableCell>
    </React.Fragment>
  );
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
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.getUserList.data !== this.state.getUserList) {
      this.setState({getUserList: this.props.getUserList.data})
    }
  }

  render() {
    const {getUserList} = this.state;
    return (
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Account</TableCell>
            <TableCell align={right}>Routers</TableCell>
            <TableCell align={right}>Routers&nbsp;(Online)</TableCell>
            <TableCell align={right}>Router&nbsp;(In Progress)</TableCell>
            <TableCell align={right}>Quaranitine&nbsp;</TableCell>
            <TableCell align={right}>Actions&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(getUserList && getUserList.length>0) && getUserList.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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

Dashboard.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
