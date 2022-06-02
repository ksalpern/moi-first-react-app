import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Friends.module.css";

const FriendsItems = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default FriendsItems;
