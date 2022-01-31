import image from "./assets/mountains.jpg";
import {
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
  TextBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Конструктор сайтов на JS", {
    tag: "h2",
    styles: {
      padding: "1.5rem",
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
    },
  }),
  new ImageBlock(image, {
    styles: {
      display: "flex",
      "justify-content": "center",
      padding: "2rem 0",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "image",
  }),
  new ColumnsBlock(["111111", "222222", "333333"], {
    styles: {
      padding: "2rem",
      background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
      color: "#fff",
      "font-weight": "700",
    },
  }),
  new TextBlock("Some text", {
    styles: {
      padding: "1rem",
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      "font-weight": "700",
    },
  }),
];
