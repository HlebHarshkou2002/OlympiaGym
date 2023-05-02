import React from "react";
import { connect } from "react-redux";
import { servicesAPI } from "../../api/servicesAPI";
import { setServices, setNewService} from "../../redux/services-manager-reducer";
import ServicesManager from "./ServicesManager";

class ServicesManagerAPIContainer extends React.Component {
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
      <ServicesManager
        servicesData={this.props.servicesData}
        setNewService={this.props.setNewService}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    servicesData: state.servicesManagerPage.services,
  };
};

const ServicesManagerContainer = connect(mapStateToProps, {
  setServices,
  setNewService
})(ServicesManagerAPIContainer);

export default ServicesManagerContainer;
