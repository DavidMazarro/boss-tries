import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useState } from "react";
import { Boss, StorageBoss } from "../Boss/Boss";
import { FaTrash, FaPenSquare, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BossesContext } from "../Context/BossesContext";

type Props = {
  boss: Boss;
};

const BossCard: React.FC<Props> = ({ boss }) => {
  const { bosses, loadBosses, storeBosses } = useContext(BossesContext);
  const storedBoss = bosses.find((x: StorageBoss) => x.boss.id === boss.id);
  const initialTries = storedBoss?.tries || 0;
  const navigate = useNavigate();
  const [tries, setTries] = useState(initialTries);

  const increaseTries = () => {
    setTries((prevTries) => prevTries + 1);
    storeBosses(
      bosses.map((x) => {
        if (x.boss.id === boss.id) x.tries = tries + 1;
        return x;
      })
    );
  };

  const decreaseTries = () => {
    setTries((prevTries) => (prevTries <= 0 ? 0 : prevTries - 1));
    storeBosses(
      bosses.map((x) => {
        if (x.boss.id === boss.id) x.tries = tries <= 0 ? 0 : tries - 1;
        return x;
      })
    );
  };

  const deleteBoss = () => {
    storeBosses(bosses.filter((x) => x.boss.id != boss.id));
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        style={{ width: "287px", height: "287px", objectFit: "cover" }}
        variant="top"
        src={boss.image}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "25px", textAlign: "center" }}>
          {boss.name}
        </Card.Title>
        <Card.Text>{storedBoss?.boss.notes || ""}</Card.Text>
        <h4>Number of tries: {tries}</h4>
        <Button onClick={() => decreaseTries()}>
          <FaMinus />
        </Button>
        <Button onClick={() => increaseTries()}>
          <FaPlus />
        </Button>
        <Button variant="danger" onClick={() => deleteBoss()}>
          <FaTrash />
        </Button>
        {/* <Button
          variant="secondary"
          onClick={() => navigate(`/edit/${boss.id}`, { replace: true })}
        >
          <FaPenSquare />
        </Button> */}
      </Card.Body>
    </Card>
  );
};

export default BossCard;
