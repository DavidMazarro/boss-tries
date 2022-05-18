import { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export const ShowBossFormContext = createContext(false);
export const ToggleBossFormContext = createContext(() => {
  return;
});
export const RerenderContext = createContext(false);

export const useShowBossFormContext = () => useContext(ShowBossFormContext);
export const useToggleBossFormContext = () => useContext(ToggleBossFormContext);

export const BossFormProvider: React.FC<Props> = ({ children }) => {
  const [showBossForm, setShowBossForm] = useState(false);

  const toggleBossForm = () =>
    setShowBossForm((prevShowBossForm) => !prevShowBossForm);

  return (
    <>
      <ShowBossFormContext.Provider value={showBossForm}>
        <ToggleBossFormContext.Provider value={toggleBossForm}>
          {children}
        </ToggleBossFormContext.Provider>
      </ShowBossFormContext.Provider>
    </>
  );
};
