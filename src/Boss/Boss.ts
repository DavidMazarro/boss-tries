export type Boss = {
  id: number;
  name: string;
  notes: string;
  image: string;
};

export type NewBoss = {
  name: string;
  notes: string;
  image: string;
};

export type StorageBoss = {
  boss: Boss;
  tries: number;
};

export type BossAction =
  | { action: "Create" }
  | { action: "Edit"; bossId: number };

/**
 * This function is intended to be used at the start of the app.
 * It checks if the 'nextId' and 'bosses' values are stored in
 * the {@link localStorage}. If they are not present, they are initialized.
 */
function initBossStorage(): void {
  const storageNextId = localStorage.getItem("nextId");
  if (storageNextId === null) {
    localStorage.setItem("nextId", JSON.stringify(1));
  }
  const storageBosses = localStorage.getItem("bosses");
  if (storageBosses === null) {
    localStorage.setItem("bosses", JSON.stringify([]));
  }
}

/**
 * This function stores a boss into the {@link localStorage}, with its corresponding id.
 * For this function to work as expected, {@link initBossStorage} should be called
 * as a pre-requisite.
 * @param newBoss The boss that is going to be stored.
 */
function storeNewBoss(newBoss: NewBoss): void {
  const storageNextId = localStorage.getItem("nextId");
  if (storageNextId === null) {
    throw new Error("The 'nextId' key wasn't found in the localStorage");
  }
  const nextId: number | undefined = JSON.parse(storageNextId);
  if (nextId === undefined) {
    throw new Error(
      `The stored value for 'nextId' is not a number: nextId = ${nextId}`
    );
  } else {
    const boss: Boss = {
      id: nextId,
      name: newBoss.name,
      notes: newBoss.notes,
      image: newBoss.image,
    };
    const toStoreBoss: StorageBoss = { boss: boss, tries: 0 };
    const storageBosses = localStorage.getItem("bosses");
    if (storageBosses === null) {
      throw new Error("The 'bosses' key wasn't found in the localStorage");
    }
    const bosses: StorageBoss[] | undefined = JSON.parse(storageBosses);
    if (bosses === undefined) {
      throw new Error(
        `The 'bosses' key isn't a StorageBoss[]: bosses = ${bosses}`
      );
    } else {
      bosses.push(toStoreBoss);
      localStorage.setItem("bosses", JSON.stringify(bosses));
      localStorage.setItem("nextId", JSON.stringify(nextId + 1));
    }
  }
}

export { initBossStorage, storeNewBoss };
