const express = require('express');
const { fetchAoeDump } = require('./services/apiClient.js')

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/getPlayerStats', async (req, res) => {
  const data = await fetchAoeDump();
  console.log(data);
  return data;
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});