/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import {

  Card,
  CardHeader,
  CardFooter,

  Pagination,
  PaginationItem,
  PaginationLink,

  Table,
  Container,
  Row,

} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import { getDeviceList } from "../../core/services/api/device";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillRead } from "react-icons/ai"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useHistory } from "react-router-dom";


const Devices = () => {

  const [devicelists, setDeviceLists] = useState([]);


  const fetchDeviceList = async () => {
    const result = await getDeviceList();

    console.log("device list resp", (result.data));
    if (result && result.data) {

      setDeviceLists(result.data)

    }

  }



  useEffect(() => {
    fetchDeviceList();
  }, [])

  const history = useHistory();
  const deletebyId = () => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes api call')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')

        }
      ]
    });


    return (
      <div className='container'>
        <button >Confirm dialog</button>
      </div>
    );

  }
  const deviceDetails = () => {
    history.push("/devicedetails");
  }

  return (
    <>
      <Header show={true} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Devices Tables</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Device Id</th>
                    <th scope="col">Android Id</th>
                    <th scope="col">IMEI </th>
                    <th scope="col">IMSI</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Operator Type</th>
                    <th scope="col">Registration Time</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>


                <tbody>
                  {
                    devicelists !== undefined && devicelists.map((devicelist, index) => (
                      <tr
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >


                        <td>{devicelist.device_id}</td>
                        <td>
                          {devicelist.android_id}
                        </td>
                        <td>
                          {devicelist.imei}
                        </td>
                        <td>
                          {devicelist.imsi}
                        </td>
                        <td>{devicelist.phone_number}</td>
                        <td>{devicelist.operator_type}</td>
                        <td>{devicelist.reg_timestamp}</td>
                        <td>
                          <AiFillDelete size={20} style={{ margin: 10 }} onClick={deletebyId} />
                          <AiFillRead size={20} onClick={deviceDetails} />
                        </td>
                      </tr>))}


                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* Dark table */}

      </Container >
    </>
  );
};

export default Devices;
