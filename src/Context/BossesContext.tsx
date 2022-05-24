/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useContext, useState } from "react";
import { StorageBoss } from "../Boss/Boss";

type Props = {
  children: ReactNode;
};

const emptyBosses: StorageBoss[] = [];
export const BossesContext = createContext({
  bosses: emptyBosses,
  loadBosses: () => {},
  storeBosses: (bosses: StorageBoss[]) => {},
});

export const useBossesContext = () => useContext(BossesContext);

export const BossesProvider: React.FC<Props> = ({ children }) => {
  const data: StorageBoss[] = JSON.parse(
    localStorage.getItem("bosses") || "{}"
  );
  const [bosses, setBosses] = useState(data);

  const loadBosses = () =>
    setBosses((prevBosses) => {
      // Retrieves the bosses that are stored in the localStorage.
      const data: StorageBoss[] = JSON.parse(
        localStorage.getItem("bosses") || "{}"
      );
      return data;
    });

  const storeBosses = (bosses: StorageBoss[]) =>
    setBosses((prevBosses) => {
      localStorage.setItem("bosses", JSON.stringify(bosses));
      return bosses;
    });

  return (
    <>
      <BossesContext.Provider value={{ bosses, loadBosses, storeBosses }}>
        {children}
      </BossesContext.Provider>
    </>
  );
};
