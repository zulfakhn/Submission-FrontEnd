import axios from "axios";
import createCard from "./component/card";

const rowImageContainer = document.querySelector(".row-image-container");

const getData = async () => {
  const response = await axios.get("https://api.jikan.moe/v4/seasons/now");
  const { data } = response.data;

  console.log(data);

  data.forEach((data) => {
    rowImageContainer.innerHTML += createCard(data);
  });
};

getData();
