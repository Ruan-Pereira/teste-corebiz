const API2 = 'https://corebiz-test.herokuapp.com/api/v1/products'

const basicFetch = async () => {
    const req = await fetch(`${API2}`);
    const json =await req.json();
    return json;
  }
export default {
    getprodutos: async () => {
        return [{
            
            Array_products: await basicFetch('https://corebiz-test.herokuapp.com/api/v1/products')
        }]
    }
}