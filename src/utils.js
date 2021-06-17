const updateTopping = async (topping, setTopping) => {
  const res = await fetch("http://localhost:5000/toppings", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: topping._id,
      wins: topping.wins,
      battles: topping.battles,
    }),
  });
  const data = await res.json();
  await setTopping(data.data);
};

export default updateTopping;
