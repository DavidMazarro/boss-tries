import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const AddBossErrorPage: React.FC = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();
  return (
    <div
      role="alert"
      className="d-flex flex-column min-vh-100 justify-content-center align-items-center"
    >
      <h2>Couldn't add a new boss because something went wrong:</h2>
      <pre>{error.message}</pre>
      <Button
        onClick={() => {
          navigate("/", { replace: true });
          return resetErrorBoundary;
        }}
      >
        Go back to home page
      </Button>
    </div>
  );
};
