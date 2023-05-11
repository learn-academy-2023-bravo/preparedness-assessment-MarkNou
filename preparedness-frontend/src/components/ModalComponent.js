import React from "react"
import { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';

const ModalComponent = ({args, form}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="button" style={{ backgroundColor: '#0dcaf0' }} onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader class="modal-header" toggle={toggle}><h3>Hello, { form }</h3></ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button className="button" color="secondary" onClick={toggle}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent
