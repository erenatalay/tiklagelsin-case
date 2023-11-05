const fetchProductDataFromApi = async () => {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    return data;
};

test('Product API test', async () => {
    const response = await fetchProductDataFromApi();
    expect(response[0]).toEqual(
        {
            id: 1,
            name: "Pizza",
            price: 10,
            description: "Mantar, domates, sucuk, kaşar, biber, soğan",
            image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg"
        }
    );
}
);
