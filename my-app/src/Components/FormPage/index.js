import React from 'react';
import { withRouter } from 'react-router-dom';
import FormCasting from '../FormCasting';


class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
    };
  }

    handleClick = (values) => {
      const config = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values),
      };
      const url = '/auth/formcasting';
      const { history } = this.props;
      fetch(url, config)
        .then((res) => {
          if (res.status === 200) {
            history.push('/homepage');
          } else {
            this.setState({ err: true });
          }
        });
    }

    render() {
      const { err } = this.state;
      return (
        <div>
          <FormCasting onSubmit={this.handleLogin} erreur={err} />
        </div>
      );
    }
}
export default withRouter(FormPage);