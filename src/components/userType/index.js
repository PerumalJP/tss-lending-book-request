import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import httpClient from '../../httpClient';

const UserType = () => {

    const [userTypeList, setUserTypeList] = useState([]);
    const [userTypeForm, setUserTypeForm] = useState({ userType: '', isActive: true });

    useEffect(() => {
        getUserTypes();
        // This is mock data.
        setUserTypeList([{ "UserTypeID": 4, "UserType": "Test", "Status": "N ", "CreatedBy": 1, "CreatedDate": "2019-03-10T18:40:13.787", "LastModifiedBy": 1, "LastModifiedDate": "2019-03-10T18:43:37.707" }, { "UserTypeID": 3, "UserType": "LIBRARIAN", "Status": "Y ", "CreatedBy": 1, "CreatedDate": "2019-02-23T08:07:12.37", "LastModifiedBy": null, "LastModifiedDate": null }, { "UserTypeID": 2, "UserType": "STUDENT", "Status": "Y ", "CreatedBy": 1, "CreatedDate": "2018-10-07T18:35:45.727", "LastModifiedBy": null, "LastModifiedDate": null }, { "UserTypeID": 1, "UserType": "ADMIN", "Status": "Y ", "CreatedBy": null, "CreatedDate": "2018-10-07T18:30:07.21", "LastModifiedBy": null, "LastModifiedDate": null }]);
    }, [])

    const submitUserType = () => {

        const payload = {
            UserType: userTypeForm.userType,
            Status: userTypeForm.isActive
        }

        httpClient.post('/userType', {
            ...payload
        }).then((res) => {
            console.log(res);
            getUserTypes();
        });
    }

    const handleInputChange = (event) => {
        let userForm = { ...userTypeForm };
        if (event.target.id === 'userType') {
            userForm.userType = event.target.value;
        } else {
            userForm.isActive = !userForm.isActive
        }
        setUserTypeForm(userForm);
    }

    const getUserTypes = () => {

        httpClient.get('/UserTypeBind').then((response) => {
            if (response.data) {
                setUserTypeList(response.data.dtTable);
            }
        });

    }

    return (
        <div className="app-page">
            <h4 className="text-center m-3">User Type</h4>
            <Container sm="false">
                <Row className="justify-content-md-center">
                    <Col sm={8}>

                        <Form>
                            <Form.Group as={Row} controlId="userType">
                                <Form.Label column sm={3}>
                                    User Type
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="text" value={userTypeForm.userType} onChange={handleInputChange} placeholder="User type" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="userActive">
                                <Form.Label column sm={3}>
                                    Active Status
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Check defaultChecked={userTypeForm.isActive} value={userTypeForm.isActive} onChange={handleInputChange} />
                                </Col>
                            </Form.Group>
                            <Col sm={12} className="text-center">
                                <Button type="reset" variant="secondary mr-4">Clear</Button>
                                <Button onClick={submitUserType} variant="primary">Submit</Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>
                        <Table bordered className="mt-4" size="sm">
                            <thead style={{ backgroundColor: '#e0e0e0' }}>
                                <tr>
                                    <th>User Type</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userTypeList.map((userTypeObj) => {
                                        return (
                                            <tr key={userTypeObj.UserTypeID}>
                                                <td>{userTypeObj.UserType}</td>
                                                <td>{userTypeObj.Status}</td>
                                                <td>
                                                    <Button variant="link">Edit</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserType;