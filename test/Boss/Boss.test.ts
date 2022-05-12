import {
  initBossStorage,
  NewBoss,
  StorageBoss,
  storeNewBoss,
} from "../../src/Boss/Boss";
import "jest-localstorage-mock";

const bossExample: NewBoss = {
  name: "Capra Demon",
  notes: "Bad. I hate it.",
  image: "url-to-image.jpg",
};

describe(storeNewBoss, () => {
  // Clears the local storage before each test
  beforeEach(() => localStorage.clear());

  it("If the 'nextId' value is not in the localStorage, it throws an error", () => {
    try {
      storeNewBoss(bossExample);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  it("If the 'nextId' value is undefined, it throws an error", () => {
    localStorage.setItem("nextId", "bad value!");
    try {
      storeNewBoss(bossExample);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  it("If the 'bosses' value is not in the localStorage, it throws an error", () => {
    localStorage.setItem("nextId", JSON.stringify(1));
    try {
      storeNewBoss(bossExample);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  it("If the 'bosses' value is undefined, it throws an error", () => {
    localStorage.setItem("nextId", JSON.stringify(1));
    localStorage.setItem("bosses", "bad value!");
    try {
      storeNewBoss(bossExample);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  it("If the 'nextId' value is a number, it stores the new boss properly with that id and increases the 'nextId' by 1", () => {
    initBossStorage();
    storeNewBoss(bossExample);
    const storedBosses: StorageBoss[] = JSON.parse(
      localStorage.getItem("bosses") || ""
    );
    expect(storedBosses[0].boss.id).toBe(1);
    expect(storedBosses[0].boss.name).toBe(bossExample.name);
    expect(storedBosses[0].boss.image).toBe(bossExample.image);
    expect(storedBosses[0].boss.notes).toBe(bossExample.notes);
    const storedNextId: number = JSON.parse(
      localStorage.getItem("nextId") || ""
    );
    expect(storedNextId).toBe(2);
  });
});
