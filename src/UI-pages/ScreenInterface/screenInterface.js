import React from 'react';

import Flexi from "../../UI-components/Flexi/index";
import hoc from "../../UI-hocs/ScreenHoc/screenhoc";

class ScreenInterface extends React.Component {
  render() {
    const {config, handleChange, onSubmit} = this.props;
    // console.log(this.props.location.pathname);
    // console.log(this.props);    
    
    return(

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

export default hoc()(ScreenInterface);
