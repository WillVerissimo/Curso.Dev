test("GET to api/v1/status sould return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  console.log(response.status);
});
