import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ToDoEdit({todo}) {
  const [description, setDescription] = useState(todo.description);
  const [show, setShow] = useState(false);

  //update description function

  const updateDescription = async(/*e*/) => {
    //e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      }
      );

      window.location = "/";
      console.log(response);
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
      <br></br>
        <Modal.Header>
          <Modal.Title>Submit changes here.</Modal.Title>
        </Modal.Header>
        <div> <input type ='text' defaultValue={todo.description} onChange={e => setDescription(e.target.value)} /></div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={e => updateDescription()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ToDoEdit;