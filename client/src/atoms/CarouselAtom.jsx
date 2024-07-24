import { atom } from "recoil";

export const CarouselStateRecoil = atom({
  key: "CarouselStateRecoil",
  default: false,
});

export const CarouselImageRecoil = atom({
  key: "CarouselImageRecoil",
  default: 0,
});
