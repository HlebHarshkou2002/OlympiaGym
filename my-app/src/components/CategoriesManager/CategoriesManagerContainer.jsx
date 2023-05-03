import React from "react";
import { connect } from "react-redux";
import { setCategories, setNewCategory} from "../../redux/categories-manager-reducer";
import CategoriesManager from "./CategoriesManager";
import { categoriesAPI } from "../../api/categoriesAPI";

class CategoriesManagerAPIContainer extends React.Component {
  componentDidMount() {
    if (this.props.categoriesData.length === 0) {
      categoriesAPI
        .getCategories()
        .then((data) => {
          this.props.setCategories(data.data);
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
      <CategoriesManager
        categoriesData={this.props.categoriesData}
        setNewCategory={this.props.setNewCategory}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoriesData: state.categoriesManagerPage.categories,
  };
};

const CategoriesManagerContainer = connect(mapStateToProps, {
    setCategories,
    setNewCategory
})(CategoriesManagerAPIContainer);

export default CategoriesManagerContainer;
