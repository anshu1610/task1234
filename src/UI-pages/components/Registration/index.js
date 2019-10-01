import React, { Component } from "react";

import Flexi from "../../../UI-components/Flexi/index";
import hoc from "../../../UI-hocs/ScreenHoc/screenhoc";
import flexConfigForRegistration from "../../../UI-config/screen/specs/registration";

class Registration extends Component {
  render() {
    //console.log(this.props.config.flexConfigForRegistration);
    const { config, handleChange, onSubmit } = this.props;

    return (
      <div>
        <Flexi
          config={config}
          handleChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}

export default hoc(flexConfigForRegistration)(Registration);
