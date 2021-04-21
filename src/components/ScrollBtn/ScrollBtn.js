import { ArrowUpward } from "@material-ui/icons";
import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import CustomButton from "../Button/Button";
import "./ScrollBtn.css";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          ContainerClassName="AnyClassForContainer"
          TransitionClassName="AnyClassForTransition"
          AnimationDuration={2000}
        >
          <CustomButton text="Go to top" icon={<ArrowUpward />} />
        </ScrollUpButton>
      </div>
    );
  }
}
