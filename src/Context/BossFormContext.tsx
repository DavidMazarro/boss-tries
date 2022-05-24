import { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export const ShowBossFormContext = createContext({
  showBossForm: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleBossForm: () => {},
});

export const useShowBossFormContext = () => useContext(ShowBossFormContext);

export const BossFormProvider: React.FC<Props> = ({ children }) => {
  const [showBossForm, setShowBossForm] = useState(true);

  const toggleBossForm = () =>
    setShowBossForm((prevShowBossForm) => !prevShowBossForm);

  return (
    <>
      <ShowBossFormContext.Provider value={{ showBossForm, toggleBossForm }}>
        {children}
      </ShowBossFormContext.Provider>
    </>
  );
};
