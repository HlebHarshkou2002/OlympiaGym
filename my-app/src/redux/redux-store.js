import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import servicesReducer from "./services-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    servicesPage: servicesReducer,
});   

let store = createStore(reducers);

window.store = store;

export default store;