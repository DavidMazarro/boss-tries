import "./styles.css";
import ICON from "./React-icon.svg";
import { Counter } from "./Counter";
import Button from "react-bootstrap/Button";

export const App = () => {
  return (
    <>
      <h1>
        React Typescript Webpack Starter Template - {process.env.NODE_ENV}{" "}
        {process.env.name}
      </h1>
      <img src={ICON} alt="React Logo" width="300" />
      <br />
      <Button variant="primary" className="mr-1">
        CLICK ME!
      </Button>
      <Counter></Counter>
    </>
  );
};
