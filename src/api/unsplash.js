import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4O_TxQF5fL-CQ1RFrLela89G_Y-t_yQp7_Uzl3gGSgY'
  }
});


