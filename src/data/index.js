export async function getProductsPaginated(page = 1, ipp = 10) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products?page=${page}&ipp=${ipp}`);
  const res = await data.json();

  return res;
}

export async function getAllProducts() {
  const res = await getProductsPaginated(1, 1000);
  return res.products;
}

export async function getProductById(id) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`);
  const res = await data.json();

  return res;
}