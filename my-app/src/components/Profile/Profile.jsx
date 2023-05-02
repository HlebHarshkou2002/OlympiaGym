import React from "react";
import ProfileInfo from "./Profile_Info/Profile_Info";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import OrdersContainer from "../UserOrders/OrdersContainer";

const Profile = (props) => {

    return (
        <div>
            {localStorage.getItem("isAuth") ? (
            <div>
                <ProfileInfo profile={props.profile} />
                <OrdersContainer />
            </div>
            ) : (
                <h1>Вы не авторизованы</h1>
            )}
            {/* <MyPostsContainer store={props.store} /> */}
        </div>
    );
}

export default Profile;