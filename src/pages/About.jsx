import React, { FC } from "react";
import { connect } from "react-redux";

import { toggleVisible } from "../store/profile/actions";

export const About = (props) => {
  return (
    <>
      <h2>About page</h2>
      <input type="checkbox" checked={props.visible} onChange={props.toggle} />
      <p>{props.name}</p>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.profile.name,
  visible: state.profile.visible,
  chatlist: state.chatlist,
});

const mapDispatchToProps = {
  toggle: () => toggleVisible,
};

export const AboutWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
