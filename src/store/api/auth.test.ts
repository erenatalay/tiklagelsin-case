const fetchAuthDataFromApi = async () => {
    const response = await fetch('http://localhost:3000/users?email=admin@admin.com&password=admin.1234');
    const data = await response.json();
    return data;
};

test('User API test', async () => {
    const response = await fetchAuthDataFromApi();
    expect(response.length).toBe(1);
    expect(response).toEqual([
        {
          id: 1,
          name: "Admin",
          email: "admin@admin.com",
          password: "admin.1234",
        }
      ]);
});



