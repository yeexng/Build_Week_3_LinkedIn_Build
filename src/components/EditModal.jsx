import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const EditModal = (data) => {
    const dispatch = useDispatch();
    const [showPut, setShowPut] = useState(false);
    const handleClosePen = () => setShowPut(false);
    const handleShowPen = () => setShowPut(true);
    const userProfileAPIRS = useSelector((state) => state.userDataAPI.stock);
    console.log(userProfileAPIRS)

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Edit Experience</Modal.Title>
            </Modal.Header>
            <InputGroup className="mb-3 px-4">
                <InputGroup.Text id="basic-addon1">Role</InputGroup.Text>
                <Form.Control
                    placeholder={data.experienceData.role}
                    aria-label=""
                    aria-describedby="basic-addon1"
                    id="put-experience-role"
                />
            </InputGroup>
            {/* <InputGroup className="mb-3 px-4">
                <InputGroup.Text id="basic-addon1">Company</InputGroup.Text>
                <Form.Control
                    placeholder={data.company}
                    aria-label="Company"
                    aria-describedby="basic-addon1"
                    id="put-experience-company"
                />
            </InputGroup>
            <InputGroup className="mb-3 px-4">
                <InputGroup.Text id="basic-addon1">Start Date</InputGroup.Text>
                <Form.Control
                    placeholder={data.startDate}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="put-experience-startdate"
                />
            </InputGroup>
            <InputGroup className="mb-3 px-4">
                <InputGroup.Text id="basic-addon1">End Date</InputGroup.Text>
                <Form.Control
                    placeholder={data.endDate}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="put-experience-enddate"
                />
            </InputGroup>
            <InputGroup className="mb-3 px-4">
                <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                <Form.Control
                    placeholder={data.description}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="put-experience-description"
                />
            </InputGroup>
            <InputGroup className="mb-3 px-4">
                <InputGroup.Text id="basic-addon1">Location</InputGroup.Text>
                <Form.Control
                    placeholder={data.area}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="put-experience-area"
                />
            </InputGroup> */}
            <Button variant="primary" onClick={() => {
                dispatch()
            }}>
                Edit Experience
            </Button>
        </>
    )
}

export default EditModal