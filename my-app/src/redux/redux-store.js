import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import servicesReducer from "./services-reducer";
import loginReducer from "./login-reducer";
import registrationReducer from "./registration-reducer";
import servicesManagerReducer from "./services-manager-reducer";
import userOrdersReducer from "./user-orders-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    servicesPage: servicesReducer,
    loginPage: loginReducer,
    registrationPage: registrationReducer,
    servicesManagerPage: servicesManagerReducer,
    userOrdersPage: userOrdersReducer,
});   

let store = createStore(reducers);

window.store = store;

export default store;