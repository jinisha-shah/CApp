import React from 'react';
import Header from 'components/Headers/Header';
import { Container, Card, CardHeader } from 'reactstrap';
import { Row, Col, Nav } from 'reactstrap';
// import { Tab } from 'react-bootstrap';
// import Calls from './devicedetailstabs/calls';
// import Messages from './devicedetailstabs/message';


const DeviceDetails = () => {




    return (
        <>
            <Header show={true} />
            <Container className="mt--7" fluid>
                <div className="col">
                    <Card className="shadow">

                        <CardHeader className="border-0">
                            <h3 className="mb-0">Device Information</h3>
                        </CardHeader>
                        <div>
                            {/* <Tab id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Calls />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Messages />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab> */}
                        </div>
                    </Card>




                </div>

            </Container>
        </>
    )
};
export default DeviceDetails;