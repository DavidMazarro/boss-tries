// React
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

// Components
import Home from "./pages/Home";
import NewBossForm from "./pages/NewBossForm";

import { initializeBosses } from "./Examples";
import { initBossStorage } from "./Boss/Boss";
import { BossFormProvider } from "./Context/BossFormContext";
import { BossesProvider } from "./Context/BossesContext";
import { ErrorBoundary } from "react-error-boundary";
import { AddBossErrorPage } from "./pages/AddBossErrorPage";

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
                    FallbackComponent={AddBossErrorPage}
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
