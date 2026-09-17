const API_BASE = 'http://localhost:5000/api';

async function api(path, method = 'GET', body = null) {
  const options = { method, headers: { 'Content-Type': 'application/json' } };
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(API_BASE + path, options);
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
}
