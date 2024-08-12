const API_URL = 'http://localhost:5000/api/products';

async function getProducts() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

export default { getProducts };