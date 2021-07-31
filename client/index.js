fetch("http://localhost:3000", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}).then((res) => res.json()).then((data) => {
  console.log(data);
});