import React from "react";

const hoc = () => Component => {

  class HocComponent extends React.Component {
    state = {
      formData: {},
      hasPath: false
    };

    componentDidMount() {
      console.log('DidMount');

      this.pathHandler()
    }

    pathHandler = () => {
      console.log("pathHandler", this.props);
      const { match } = this.props;
      const { params } = match;

      const configVar = require(`../../UI-config/screen/specs/${params.path}`).default
      console.log(configVar, "Hello!!")

      this.setState({
        hasPath: true,
        configVar
      })
    }

    handleChange = (value, key) => {
      let { formData } = this.state;
      this.setState({
        ...this.state,
        formData: { ...formData, [key]: value }
      });
    };

    onSubmit = e => {
      e.preventDefault();
      console.log(this.state.formData);
    };

    render() {
      const { handleChange, onSubmit } = this;

      return (
        <div>
          {this.state.hasPath ?
            <Component
              config={this.state.configVar}
              handleChange={handleChange}
              onSubmit={onSubmit}
              {...this.props}
            /> : null}
        </div>
      );
    }
  }
  return HocComponent;
};

export default hoc;
