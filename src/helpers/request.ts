import axios from 'axios';

const getHeaders = (token: string) => ({
  'Content-Type': 'application/json',
  Authorization: `Discogs token=${token}`,
});

export async function request<T>(url: string): Promise<T> {
  if (!process.env.TOKEN) throw new Error('Missing Discogs API token in environment');

  const response = await axios({
    url,
    method: 'GET',
    headers: getHeaders(process.env.TOKEN)
  });

  if(response.status === 200) return response.data;
  else throw response;
}
