// React
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

// Components
import Home from "./pages/Home";
import NewBossForm from "./pages/NewBossForm";

import { initializeBosses } from "./Examples";
import { initBossStorage } from "./Boss/Boss";
import { BossFormProvider } from "./Context/BossFormContext";

export const App = () => {
  // const { id } = useParams();

  initBossStorage();
  initializeBosses();

  return (
    <>
      <BossFormProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/add"
              element={<NewBossForm bossAction={{ action: "Create" }} />}
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
      </BossFormProvider>
    </>
  );
};
