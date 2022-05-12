import { Boss, StorageBoss } from "./Boss/Boss";

export const initializeBosses = () => {
  const storageBosses: StorageBoss[] = initialBosses.map((boss) => ({
    boss: boss,
    tries: 0,
    notes: "",
  }));
  // If the bosses are not already populated on the local storage, do so.
  if (localStorage.getItem("bosses") == null)
    localStorage.setItem("bosses", JSON.stringify(storageBosses));
  if (localStorage.getItem("nextId") == null) {
    const bosses: StorageBoss[] = JSON.parse(
      localStorage.getItem("bosses") || "{}"
    );
    const nextId: number = bosses.reduce((x, y) =>
      x.boss.id > y.boss.id ? x : y
    ).boss.id;
    localStorage.setItem("nextId", JSON.stringify(nextId));
  }
};

const initialBosses: Boss[] = [
  {
    id: 1,
    name: "Asylum Demon",
    notes: "",
    image:
      "https://external-preview.redd.it/tPgmoxfuhbVo0UHnICtPo94oG6I6yA1P9_SpPxMk7F4.jpg?auto=webp&s=289ac7f9459f035d4dd039bae2c5011f106df6e1",
  },
  {
    id: 2,
    name: "Taurus Demon",
    notes: "",
    image: "https://i.ytimg.com/vi/dQU1h4p_zms/maxresdefault.jpg",
  },
  {
    id: 3,
    name: "Bell Gargoyles",
    notes: "",
    image:
      "https://i.pinimg.com/originals/7e/f5/04/7ef5043586728dc2bdf39d957bf84760.jpg",
  },
  {
    id: 4,
    name: "Capra Demon",
    notes: "",
    image:
      "http://soulslore.wdfiles.com/local--resized-images/data:capra-demon/capra.jpg/medium.jpg",
  },
  {
    id: 5,
    name: "Gaping Dragon",
    notes: "",
    image:
      "https://static.wikia.nocookie.net/darksouls/images/f/f1/Gaping_Dragon.png",
  },
  {
    id: 6,
    name: "Iron Golem",
    notes: "",
    image: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Img0044.jpg",
  },
  {
    id: 7,
    name: "Centipede Demon",
    notes: "",
    image:
      "https://static.wikia.nocookie.net/darksouls/images/7/74/Centipede_Demon_Render.png",
  },
  {
    id: 8,
    name: "Pinwheel",
    notes: "The easiest boss!",
    image: "https://www.models-resource.com/resources/big_icons/42/41065.png",
  },
];
