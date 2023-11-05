//cart curd operations
const fetchCartDataFromApi = async () => {
    const response = await fetch('http://localhost:3000/cart');
    const data = await response.json();
    return data;
};

const addCartDataFromApi = async (cart: any) => {
    const response = await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(cart),
    });
    const data = await response.json();
    return data;
}

const updateCartDataFromApi = async (cart: any) => {
    const response = await fetch(`http://localhost:3000/cart/${cart.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(cart),
    });
    const data = await response.json();
    return data;
}

const deleteCartDataFromApi = async (cart: any) => {
    const response = await fetch(`http://localhost:3000/cart/${cart.id}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
}

test("Cart Add API test", async () => {
    const response = await addCartDataFromApi({
        id: 1,
        name: "Pizza",
        price: 10,
        description: "Mantar, domates, sucuk, kaşar, biber, soğan",
        quantity: 1,
        image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg"
    }
    );
    expect(response).toEqual(
        {
            id: 1,
            name: "Pizza",
            price: 10,
            description: "Mantar, domates, sucuk, kaşar, biber, soğan",
            quantity: 1,
            image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg"
        }
    );
}
);

test("Cart Update API test", async () => {
    const response = await updateCartDataFromApi({
        id: 1,
        name: "Pizza",
        price: 10,
        description: "Mantar, domates, sucuk, kaşar, biber, soğan",
        quantity: 2,
        image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg"
    }
    );
    expect(response).toEqual(
        {
            id: 1,
            name: "Pizza",
            price: 10,
            description: "Mantar, domates, sucuk, kaşar, biber, soğan",
            quantity: 2,
            image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg"
        }
    );
}
);

test("Cart Delete API test", async () => {
    const response = await deleteCartDataFromApi({
        id: 1,
    }
    );
    expect(response).toEqual(
        {
        }
    );
}
);