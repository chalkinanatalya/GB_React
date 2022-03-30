import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Link } from "react-router-dom";
import { logOut, userRef } from "../services/firebase";
import { onValue, set } from "firebase/database";
import { toggleVisible, userName, authProfile } from "../store/profile/actions";
import { getProfileName, getProfileVisible } from "../store/profile/selectors";

export const Profile = (props) => {
  const visible = useSelector(getProfileVisible, shallowEqual);
  const [name, setName] = useState("");
  const isAuth = useSelector((state) => state.profile.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onValue(userRef, (snapshot) => {
      const user = snapshot.val();
      setName(user.name || "");
    });

    return unsubscribe;
  }, []);

  const handleChangeName = () => {
    set(userRef, { name });
  };

  return (
    <>
      <h2>Profile page</h2>
      <span>Enter user name: </span>
      <input
        type="text"
        placeholder={name}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleChangeName}>Change name</button>

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
        <button onClick={() => logOut()}>Sign Out</button>
      ) : (
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
      )}
    </>
  );
};
