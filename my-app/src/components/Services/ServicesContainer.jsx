import React from "react";
import { connect } from "react-redux";
import { servicesAPI } from "../../api/servicesAPI";
import { setServices, followService, unFollowService } from "../../redux/services-reducer";
import Services from "./Services";

class ServicesAPIContainer extends React.Component {
  componentDidMount() {
    if (this.props.servicesData.length === 0) {
      servicesAPI
        .getServices()
        .then((data) => {
          console.log("ВЫЗОВ ФУНКЦИИ 1")
          this.props.setServices(data.data);
        })
        .catch((err) => {
          // if(err.response.status === 403) {
          //   alert("Вы не авторизованы.")
          // }
        });
    }
  }

  render() {
    return (
      <Services
        followService={this.props.followService}
        unFollowService={this.props.unFollowService}
        servicesData={this.props.servicesData}
        setServices={this.props.setServices}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    servicesData: state.servicesPage.services,
  };
};

const ServicesContainer = connect(mapStateToProps, {
  setServices,
  followService,
  unFollowService
})(ServicesAPIContainer);

export default ServicesContainer;
