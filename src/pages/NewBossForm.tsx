// React
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

// React-Bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { storeNewBoss, BossAction, StorageBoss } from "../Boss/Boss";
import Home from "./Home";
import { ShowBossFormContext } from "../Context/BossFormContext";

type Props = {
  bossAction: BossAction;
};

const NewBossForm: React.FC<Props> = ({ bossAction }) => {
  const navigate = useNavigate();

  const { showBossForm, toggleBossForm } = useContext(ShowBossFormContext);
  console.log(showBossForm, toggleBossForm);

  const initialState = (() => {
    switch (bossAction.action) {
      case "Create":
        return { name: "", notes: "", image: "" };
      case "Edit": {
        const storedBosses: StorageBoss[] = JSON.parse(
          localStorage.getItem("bosses") || "[]"
        );
        const storedBoss = storedBosses.find(
          (x) => x.boss.id === bossAction.bossId
        );
        if (storedBoss != undefined) {
          return {
            name: storedBoss.boss.name,
            notes: storedBoss.boss.notes,
            image: storedBoss.boss.image,
          };
        } else {
          return { name: "", notes: "", image: "" };
        }
      }
    }
  })();

  const [newBoss, setNewBoss] = useState(initialState);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBoss({
      name: event.target.value,
      notes: newBoss.notes,
      image: newBoss.image,
    });
  };

  const onChangeNotes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBoss({
      name: newBoss.name,
      notes: event.target.value,
      image: newBoss.image,
    });
  };

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBoss({
      name: newBoss.name,
      notes: newBoss.notes,
      image: event.target.value,
    });
  };

  const handleClose = () => {
    toggleBossForm();
    navigate("..", { replace: true });
  };

  const handleAddBoss = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    storeNewBoss(newBoss);
    toggleBossForm();
    navigate("..", { replace: true });
  };

  console.log(`NewBossForm: showBossFormContext = ${showBossForm}`);

  return (
    <>
      <Home />
      <Modal show={showBossForm} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add new boss</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddBoss}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={onChangeName}
                placeholder="Enter boss name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNotes">
              <Form.Label>Notes (optional)</Form.Label>
              <Form.Control type="text" onChange={onChangeNotes} />
              <Form.Text className="text-muted">
                Any notes you have regarding this particular boss fight.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Image (optional)</Form.Label>
              <Form.Control type="text" onChange={onChangeImage} />
              <Form.Text className="text-muted">
                URL pointing to the image you want to appear in the boss card.
              </Form.Text>
            </Form.Group>
            <Button variant="secondary" type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add new boss
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default NewBossForm;
