// React
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

// Components
import Home from "./pages/Home";
import NewBossForm from "./pages/NewBossForm";

import { initializeBosses } from "./Examples";
import { initBossStorage } from "./Boss/Boss";
import { BossFormProvider } from "./Context/BossFormContext";
import { BossesProvider } from "./Context/BossesContext";
import { ErrorBoundary } from "react-error-boundary";
import Button from "react-bootstrap/Button";

const ErrorPage: React.FC = ({ error, resetErrorBoundary }) => {
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

export const App = () => {
  // const { id } = useParams();

  initBossStorage();
  initializeBosses();

  return (
    <>
      <BossFormProvider>
        <BossesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/add"
                element={
                  <ErrorBoundary
                    FallbackComponent={ErrorPage}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onReset={() => {}}
                  >
                    <NewBossForm bossAction={{ action: "Create" }} />
                  </ErrorBoundary>
                }
              />
              {/* <Route
            path="/edit/:id"
            element={
              <NewBossForm
                bossAction={{ action: "Edit", bossId: id as unknown as number }}
                show={showAddBoss}
                setShow={setShowAddBoss}
              />
            }
          /> */}
            </Routes>
          </BrowserRouter>
        </BossesProvider>
      </BossFormProvider>
    </>
  );
};
