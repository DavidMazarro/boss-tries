import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Boss, StorageBoss } from "../Boss/Boss";
import { FaTrash } from "react-icons/fa";

type Props = {
  boss: Boss;
};

const BossCard: React.FC<Props> = ({ boss }) => {
  const bosses: StorageBoss[] = JSON.parse(
    localStorage.getItem("bosses") || "{}"
  );
  const storedBoss = bosses.find((x: StorageBoss) => x.boss.id === boss.id);
  console.log(storedBoss);
  const initialTries = storedBoss?.tries || 0;
  const [tries, setTries] = useState(initialTries);

  const increaseTries = () => {
    setTries((prevTries) => prevTries + 1);
    localStorage.setItem(
      "bosses",
      JSON.stringify(
        bosses.map((x) => {
          if (x.boss.id === boss.id) x.tries = tries + 1;
          return x;
        })
      )
    );
  };

  const decreaseTries = () => {
    setTries((prevTries) => (prevTries <= 0 ? 0 : prevTries - 1));
    localStorage.setItem(
      "bosses",
      JSON.stringify(
        bosses.map((x) => {
          if (x.boss.id === boss.id) x.tries = tries <= 0 ? 0 : tries - 1;
          return x;
        })
      )
    );
  };

  const deleteBoss = () => {
    localStorage.setItem(
      "bosses",
      JSON.stringify(bosses.filter((x) => x.boss.id != boss.id))
    );
    // how to re-render component here?
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
        <Button onClick={() => decreaseTries()}>-</Button>
        <Button onClick={() => increaseTries()}>+</Button>
        <Button variant="danger" onClick={() => deleteBoss()}>
          <FaTrash />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BossCard;
