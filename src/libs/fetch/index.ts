export const fetchDelegationPool = async(id: string) => {
  const response = await fetch("/api/pool", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
  .then((res) => res.json())
  .then((data) => {
    return data;
  })
  .catch(error => console.log(error));
  return response
}