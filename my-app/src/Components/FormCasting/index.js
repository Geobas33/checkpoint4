import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Form, Button, Container, Row, Col, Label, FormGroup,
}
  from 'reactstrap';
import InputField from '../InputField/index';


  let FormCasting = (props) => {
    const { handleSubmit, erreur } = props;
    return (
      <Container>
        <Row>
          <Col xs={{ size: 12 }}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  component={InputField}
                  className="form-control"
                  placeholder="Votre prénom"
                />
              </FormGroup>
              <Field
                id="lastname"
                type="text"
                name="lastname"
                component={InputField}
                className="form-control"
                placeholder="Votre nom"
              />
              <Label for="bic">Age</Label>
              <Field
                id="age"
                type="date"
                name="age"
                component={InputField}
                className="form-control"
                placeholder="Votre age"
              />
              <Field
                id="description"
                type="text"
                name="description"
                component={InputField}
                className="form-control"
                placeholder="Votre description"
              />
              <Button>Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.lenght > 100) {
      errors.name = 'Name too long';
    }
    if (!values.lastname) {
      errors.lastname = 'lastname is required';
    } else if (values.lastname.length > 100) {
      errors.lastname = 'lastname too long';
    }
    if (!values.age) {
      errors.age = 'age is required';
    }
    if (!values.description) {
      errors.age = 'description is required';
    }

    return errors;
  };
  
  FormCasting = reduxForm({
    form: 'FormCasting',
    validate,
  })(FormCasting);
  
  export default FormCasting;
  
    
