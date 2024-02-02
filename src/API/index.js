

async function fetchProductData() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const result = await res.json();
    return result;
  } catch (err) {
    throw err;
  }
}

async function fetchSingleProduct() {
  try {
    const res = await fetch("https://fakestoreapi.com/products/1");
    const json = await res.json();
    return json;
  } catch (err) {
    throw err;
  }
}

async function registerUser() {
    try {
        const res = await fetch('https://fakestoreapi.com/users',
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(productData),
        }
    );
    const json = await res.json();
    console.log(json);
    return json;
} catch (err) {
    throw err;
}
}

async function Login() {
    try {
        const res = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "",
                password: ""
            })
        });
        const json = await res.json();
        return json;
    } catch (err) {
        throw err;
    }
}

// async function cart() {
//     try{
//         const res = await fetch()
//         const
//     } catch
// }

async function deleteUser(id) {
    try {
        const res = await fetch('https://fakestoreapi.com/users/6');
        const json = await res.json();
        console.log(json);
        return json;
    } catch (err) {
        throw err;
    }
}

export { fetchProductData, fetchSingleProduct, registerUser, Login, deleteUser, }