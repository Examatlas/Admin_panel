export const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0OWZkNjU0Ny1lZDQ0LTRhZGYtYTExMi1iOWNmMjlmNDU3NmEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyNjQ4NTA5OSwiZXhwIjoxNzI3MDg5ODk5fQ.lEM3m7YbbEV_ppZLwR7UyN6FuYJOp_vpmAW4GYS-bp4";
// export const authToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzN2JmZjc5OC1iYjQyLTQ4ODItOWY3Ni0wMWFiYjNhOGZkOGUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyNjM5MjA4MCwiZXhwIjoxNzI2NDc4NDgwfQ.sZZef9oVnY7aSKsbtUQu9T3dudS1bfqVuk7dS4uZEAQ";

export const createNewRoom = async () => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
  });

  const { roomId } = await res.json();
  return roomId;
};
