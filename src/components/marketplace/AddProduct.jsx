import React, {useCallback, useState} from "react";
import PropTypes from "prop-types";
import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import {stringToMicroAlgos} from "../../utils/conversions";


//change the domain here for correct image download
const domain = "https://gitevx.github.io/govtcontract/";

const AddProduct = ({createProduct}) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [document, setDocument] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const isFormFilled = useCallback(() => {
        return name && image && document && date && description && price > 0
    }, [name, image, document, date, description, price]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//...
//...
return (
    <>
        <Button
            onClick={handleShow}
            variant="dark"
            className="rounded-pill px-0"
            style={{width: "300px"}}
        >
           Government Entities: request new tender procedure
        </Button>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>New Tender</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <FloatingLabel
                        controlId="inputName"
                        label="Tender name"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            placeholder="Enter name of the tender"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="inputUrl"
                        label="Select contract type"
                        className="mb-3"    
                    >
                            <Form.Select aria-label="Default select example"
                            value={image}
                            onChange={(e) => {
                                setImage(e.target.value);
                            }}>
      <option>Available Services</option>
      <option value= {`${domain}algorand-marketplace/services/electricity.png`}>Electricity</option>
      <option value={`${domain}algorand-marketplace/services/communications.png`}>Communications</option>
      <option value={`${domain}algorand-marketplace/services/legal.png`}>Legal</option>
      <option value={`${domain}algorand-marketplace/services/it.png`}>IT</option>
      <option value={`${domain}algorand-marketplace/services/crypto.png`}>Crypto</option>
    </Form.Select>


                    </FloatingLabel>
                    
                    <FloatingLabel
                        controlId="inputUrlPdf"
                        label="Contract Documentation URL (PDF)"
                        className="mb-3"    
                    >

                        <Form.Control
                            type="text"
                            placeholder="Select contract type"
                            value={document}
                            onChange={(e) => {
                                setDocument(e.target.value);
                            }}
                        />
                    </FloatingLabel>


                    <FloatingLabel
                        controlId="inputEta"
                        label="Due date"
                        className="mb-3"
                    >
                        <Form.Control
                            type="date"
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                            placeholder="Enter the due date"
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="inputDescription"
                        label="Description"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="description"
                            style={{ height: "120px" }}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="inputPrice"
                        label="Maximum Bid amount in ALGO"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Price"
                            onChange={(e) => {
                                setPrice(stringToMicroAlgos(e.target.value));
                            }}
                        />
                    </FloatingLabel>
                </Modal.Body>
            </Form>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="dark"
                    disabled={!isFormFilled()}
                    onClick={() => {
                        createProduct({
                            name,
                            image,
                            document,
                            date,
                            description,
                            price
                        });
                        handleClose();
                    }}
                >
                    Publish tender
                </Button>
            </Modal.Footer>
        </Modal>
    </>
);
};

AddProduct.propTypes = {
createProduct: PropTypes.func.isRequired,
};

export default AddProduct;