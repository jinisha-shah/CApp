import useForm from "../../hooks/use-form";
import React from "react";
import { setAccessToken } from "../../core/utils/token";
import { useHistory } from "react-router";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import { validateUserLogin } from "../../core/validations/user-validations";
import { userLogin } from "../../core/services/api/user";
import { toast } from "react-toastify";


const Login = () => {

  const history = useHistory();


  const handleLogin = async () => {
    const result = await userLogin(values);
    console.log('result login', JSON.stringify(result));
    if (result && result.status && result.status === 200) {
      setAccessToken(result.data.token);
      history.push("/admin/dashboard");
      return;
    } else {
      toast.error("Something went wrong");
    }

  }

  const { values, errors, handleSubmit, handleChange } = useForm(
    handleLogin,
    validateUserLogin
  );


  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Username"
                    type="text"
                    name="email"
                    value={values.email === undefined ? "" : values.email}
                    onChange={handleChange}
                  />
                </InputGroup>
                {errors.email && (
                  <p className="text-danger">
                    <small>{errors.email}</small>
                  </p>
                )}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={values.password === undefined ? "" : values.password}
                    onChange={handleChange}

                  />
                </InputGroup>
                {errors.password && (
                  <p className="text-danger">
                    <small>{errors.password}</small>
                  </p>
                )}
              </FormGroup>
              {/* <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div> */}
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
