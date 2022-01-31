import image from "./assets/mountains.jpg";

export const model = [
  {
    type: "title",
    value: "Конструктор сайтов на JS",
    options: {
      tag: "h2",
      styles: {
        padding: "1.5rem",
        background: "linear-gradient(to right, #ff0099, #493240)",
        color: "#fff",
        "text-align": "center",
      },
    },
  },
  {
    type: "image",
    value: image,
    options: {
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
    },
  },
  {
    type: "columns",
    value: ["111111", "222222", "333333"],
    options: {
      styles: {
        padding: "2rem",
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        color: "#fff",
        "font-weight": "700",
      },
    },
  },
  {
    type: "text",
    value: "Some text",
    options: {
      styles: {
        padding: "1rem",
        background: "linear-gradient(to left, #f2994a, #f2c94c)",
        "font-weight": "700",
      },
    },
  },
];
