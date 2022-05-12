// React
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Components
import Home from "./pages/Home";
import NewBossForm from "./pages/NewBossForm";

import { initializeBosses } from "./Examples";
import { initBossStorage } from "./Boss/Boss";

export const App = () => {
  const [showAddBoss, setShowAddBoss] = useState(true);

  initBossStorage();
  initializeBosses();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add"
            element={
              <NewBossForm show={showAddBoss} setShow={setShowAddBoss} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
