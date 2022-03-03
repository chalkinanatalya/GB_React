import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisible, userName } from "../store/profile/actions";
import { RootState } from "../store/profile/reducer";
import { store } from "../store/index";

export const Profile = () => {
  const visible = useSelector((state) => state.visible);
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Profile page</h2>
      <span>Enter new user name: </span>
      <input
        type="text"
        placeholder={name}
        onChange={(e) => dispatch(userName(e.target.value))}
      />
      <p>
        Your name is <b>{name}</b>
      </p>
      <span>This is awsome checkbox: </span>
      <input type="checkbox" checked={visible} />
      <br />
      <button onClick={() => dispatch(toggleVisible)}>change profile</button>
    </>
  );
};
