import React from "react";
import { connect } from "react-redux";
import { servicesAPI } from "../../api/servicesAPI";
import { setServices } from "../../redux/services-reducer";
import Services from "./Services";

class ServicesAPIContainer extends React.Component {
  componentDidMount() {
    if (this.props.servicesData.length === 0) {
      servicesAPI.getServices()
        .then((data) => {
          console.log("Data!!!! ", data)
          this.props.setServices(data.data);
        }).catch((err) => {
          // if(err.response.status === 403) {
          //   alert("Вы не авторизованы.")
          // }
        });
    }
  }

  render() {
    return <Services servicesData={this.props.servicesData} />;
  }
}

const mapStateToProps = (state) => {
  return {
    servicesData: state.servicesPage.services,
  };
};

const ServicesContainer = connect(mapStateToProps, {
  setServices,
})(ServicesAPIContainer);

export default ServicesContainer;
