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
          debugger;
          console.log("Данные из ЗАПРОСА", data)
          this.props.setServices(data.items);
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
