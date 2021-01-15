import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "../../includes";
import {
  getUserList,
  fetchTreeData   // Step 3
} from "../../actions/user-listing";
class Dashboard extends Component {
  componentDidMount() {
    this.props.onfetchTreeData();
  }
  
  render() {
    console.log("UpdateData_Props", this.props);
    return (
      <Typography variant="display1" gutterBottom component="h2">
        Index
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
