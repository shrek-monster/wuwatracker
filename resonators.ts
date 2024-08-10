type ResonatorMetadata = Record<
  string,
  {
    id: number;
    qualityLevel: number;
    imgSrc: string;
    portraitSrc: string;
    element: string;
  }
>;

export const fiveStarResonatorMetadata = {
  "Rover-Havoc": {
    id: 1605,
    qualityLevel: 5,
    imgSrc: "/assets/luckdraw/mrover.webp",
    element: "Havoc",
    portraitSrc: "/assets/portraits/mrover.webp",
  },
  "Rover-Spectro": {
    id: 1502,
    qualityLevel: 5,
    imgSrc: "/assets/luckdraw/frover.webp",
    element: "Spectro",
    portraitSrc: "/assets/portraits/frover.webp",
  },
  Jiyan: {
    id: 1404,
    qualityLevel: 5,
    imgSrc: "/assets/luckdraw/jiyan.webp",
    element: "Broadblade",
    portraitSrc: "/assets/portraits/jiyan.webp",
  },
  Yinlin: {
    id: 1302,
    qualityLevel: 5,
    imgSrc: "/assets/luckdraw/yinlin.webp",
    element: "Conducto",
    portraitSrc: "/assets/portraits/yinlin.webp",
  },
  Jinhsi: {
    id: 1304,
    qualityLevel: 5,
    imgSrc: "/assets/luckdraw/jinhsi.webp",
    element: "Spectro",
    portraitSrc: "/assets/portraits/jinhsi.webp",
  },
  Changli: {
    id: 1205,
    qualityLevel: 5,
    imgSrc: "/assets/luckdraw/changli.webp",
    element: "Fusion",
    portraitSrc: "/assets/portraits/changli.webp",
  },
  Calcharo: {
    id: 1301,
    qualityLevel: 5,
    imgSrc: "/assets/luckdraw/calcharo.webp",
    element: "Conducto",
    portraitSrc: "/assets/portraits/calcharo.webp",
  },
  Verina: {
    id: 1503,
    qualityLevel: 5,
    imgSrc: "/assets/luckdraw/verina.webp",
    element: "Spectro",
    portraitSrc: "/assets/portraits/verina.webp",
  },
  Jianxin: {
    id: 1405,
    qualityLevel: 5,
    imgSrc: "/assets/luckdraw/jianxin.webp",
    element: "Aero",
    portraitSrc: "/assets/portraits/jianxin.webp",
  },
  Lingyang: {
    id: 1104,
    qualityLevel: 5,
    imgSrc: "/assets/luckdraw/lingyang.webp",
    element: "Glacio",
    portraitSrc: "/assets/portraits/lingyang.webp",
  },
  Encore: {
    id: 1203,
    qualityLevel: 5,
    imgSrc: "/assets/luckdraw/encore.webp",
    element: "Fusion",
    portraitSrc: "/assets/portraits/encore.webp",
  },
} as ResonatorMetadata;

export const fourStarResonatorMetadata = {
  Yangyang: {
    id: 1402,
    qualityLevel: 4,
    imgSrc: "/assets/luckdraw/yangyang.webp",
    element: "Aero",
    portraitSrc: "/assets/portraits/yangyang.webp",
  },
  Taoqi: {
    id: 1601,
    qualityLevel: 4,
    imgSrc: "/assets/luckdraw/taoqi.webp",
    element: "Havoc",
    portraitSrc: "/assets/portraits/taoqi.webp",
  },
  Aalto: {
    id: 1403,
    qualityLevel: 4,
    imgSrc: "/assets/luckdraw/aalto.webp",
    element: "Aero",
    portraitSrc: "/assets/portraits/aalto.webp",
  },
  Chixia: {
    id: 1202,
    qualityLevel: 4,
    imgSrc: "/assets/luckdraw/chixia.webp",
    element: "Fusion",
    portraitSrc: "/assets/portraits/chixia.webp",
  },
  Sanhua: {
    id: 1102,
    qualityLevel: 4,
    imgSrc: "/assets/luckdraw/sanhua.webp",
    element: "Glacio",
    portraitSrc: "/assets/portraits/sanhua.webp",
  },
  Danjin: {
    id: 1602,
    qualityLevel: 4,
    imgSrc: "/assets/luckdraw/danjin.webp",
    element: "Havoc",
    portraitSrc: "/assets/portraits/danjin.webp",
  },
  Mortefi: {
    id: 1204,
    qualityLevel: 4,
    imgSrc: "/assets/luckdraw/mortefi.webp",
    element: "Fusion",
    portraitSrc: "/assets/portraits/mortefi.webp",
  },
  Baizhi: {
    id: 1103,
    qualityLevel: 4,
    imgSrc: "/assets/luckdraw/baizhi.webp",
    element: "Glacio",
    portraitSrc: "/assets/portraits/baizhi.webp",
  },
  Yuanwu: {
    id: 1303,
    qualityLevel: 4,
    imgSrc: "/assets/luckdraw/yuanwu.webp",
    element: "Conducto",
    portraitSrc: "/assets/portraits/yuanwu.webp",
  },
} as ResonatorMetadata;

export const validResonatorNames = [
  ...Object.keys(fiveStarResonatorMetadata),
  Object.keys(fourStarResonatorMetadata),
];
