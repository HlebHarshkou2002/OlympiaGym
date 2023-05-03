import React, { createRef } from "react";
import s from "./CategoriesManager.module.css";
import CategoryManager from "./CategoryManager/CategoryManager";
import { categoriesAPI } from "../../api/categoriesAPI";

const CategoriesManager = (props) => {
  let categoriesElements = props.categoriesData.map((c) => (
    <CategoryManager categoryName={c.name} categoryId={c.id} categoryDescription={c.description}/>
  ));

  console.log(props);

  let categoryName = React.createRef();
  let categoryDescription = React.createRef();

  let addCategory = () => {
    categoryName = categoryName.current.value;
    categoryDescription = categoryDescription.current.value;

    categoriesAPI
      .addNewCategory(categoryName, categoryDescription)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          props.setNewCategory(response.data);
          //  window.location.reload();
        }
      });
  };

  return (
    <div className={s.services__wrapper}>
      <div>
        <h1>Управление категориями</h1>
        {categoriesElements}
      </div>

      <div className={s.services__manager}>
        <div className={s.services__manager__buttons}>
          <div className={s.services__add}>
            <button onClick={addCategory}>Добавить категорию</button>
          </div>
        </div>

        <div className={s.edit__fields}>
          <div>
            <p>Введите наименование категории</p>
            <input type="text" ref={categoryName} />
          </div>
          <div>
            <p>Введите описание категории</p>
            <input type="text" ref={categoryDescription} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesManager;
