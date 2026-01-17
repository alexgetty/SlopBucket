(function() {
  const API_URL = 'https://us-west3-gettynet-51727.cloudfunctions.net/api/v1/slopbucket/counter';
  const STORAGE_KEY = 'slopbucket_last_visit';
  const THRESHOLD_MS = 2 * 60 * 60 * 1000; // 2 hours
  const counterEl = document.getElementById('visitor-count');

  if (!counterEl) return;

  function formatCount(n) {
    return String(n).padStart(7, '0');
  }

  function shouldIncrement() {
    const lastVisit = localStorage.getItem(STORAGE_KEY);
    if (!lastVisit) return true;
    return Date.now() - parseInt(lastVisit, 10) > THRESHOLD_MS;
  }

  function recordVisit() {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }

  const method = shouldIncrement() ? 'POST' : 'GET';
  const options = method === 'POST'
    ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ page: 'home' }) }
    : { method: 'GET' };

  fetch(API_URL + (method === 'GET' ? '?page=home' : ''), options)
    .then(res => res.json())
    .then(data => {
      if (data.data && typeof data.data.count === 'number') {
        counterEl.textContent = formatCount(data.data.count);
        if (method === 'POST') recordVisit();
      }
    })
    .catch(() => {
      counterEl.textContent = '???????';
    });
})();
