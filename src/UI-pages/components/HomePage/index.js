import React from "react";

import Flexi from "../../../UI-components/Flexi/index";
import hoc from "../../../UI-hocs/ScreenHoc/screenhoc";
import flexConfigForHome from "../../../UI-config/screen/specs/home";

class HomePage extends React.Component {
  render() {
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

export default hoc(flexConfigForHome)(HomePage);
