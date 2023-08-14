import axios from 'axios';

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

export const fetchKoiosPoolInfo = async(pool_id: string) => {
  const res = await axios.post('/api/koios/pool',{
    // id: "pool13qppafmw3vq5rl4ewmxv7zy84x3rshx9sdczs0zq40cxu0dqkrg",
    id: pool_id,
  });
  return res.data;
}