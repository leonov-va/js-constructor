import { model } from "./model";
import "./styles/index.css";

const $site = document.getElementById("site");

model.forEach((block) => {
  $site.insertAdjacentHTML("beforeend", block.toHTML())
});
