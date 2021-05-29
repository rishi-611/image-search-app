import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID wadvXnYmL9zVkRNpIY0J-_HAXs7Vt37JTBF4AlICleY",
  },
});
