
const clientID = '791b1ab9d26e4593a0bb174329061274';
const clientSecret = 'd12307f7c1294cd586aefc3958107e05';

export const getAccessToken = async () => {
  const credentials = btoa(`${clientID}:${clientSecret}`);
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${credentials}`,
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token;
};
