import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { toggleVisible, userName, authProfile } from "../store/profile/actions";
import { getProfileName, getProfileVisible } from "../store/profile/selectors";

export const Profile = (props) => {
  const visible = useSelector(getProfileVisible, shallowEqual);
  const name = useSelector(getProfileName, shallowEqual);
  const isAuth = useSelector(state => state.profile.isAuth);
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
      <input
        type="checkbox"
        checked={visible}
        onChange={() => dispatch(toggleVisible)}
      />
      <br />
      <button onClick={() => dispatch(toggleVisible)}>change profile</button>
      <p>{name}</p>
      {isAuth ? (
        <button onClick={() => dispatch(authProfile(false))}>Sign Out</button>
      ) : (
        <button onClick={() => props.history.push("/signin")}>Sign In</button>
      )}
    </>
  );
};
