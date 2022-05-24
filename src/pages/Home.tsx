import { useContext } from "react";
import { BossesContext } from "../Context/BossesContext";
import BossCard from "../Boss/BossCard";
import NavBar from "../NavBar";

// React-Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { bosses, loadBosses, storeBosses } = useContext(BossesContext);

  return (
    <>
      <NavBar></NavBar>

      <br />
      <div className="w-50 ml-0 mr-0 mx-auto text-center">
        <h1>Boss tries tracker</h1>
      </div>
      <br />

      <Container>
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 m-4">
          {bosses.map((item) => (
            <Col key={item.boss.id}>
              <BossCard boss={item.boss} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
