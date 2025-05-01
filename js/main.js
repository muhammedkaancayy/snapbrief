function showDetail(title, text) {
  document.getElementById('detailTitle').innerText = title;
  document.getElementById('detailText').innerText = text;
  document.getElementById('detailModal').style.display = 'block';
}

const newsList = document.getElementById('newsList');

// JSON'dan haberleri yükle
fetch('data/news.json')
  .then(res => res.json())
  .then(exampleNews => {
    exampleNews.forEach(news => {
      const item = document.createElement('div');
      item.className = 'news';
      item.setAttribute('data-date', news.date);
      item.onclick = () => showDetail(news.title, news.detail);
      item.innerHTML = `
        <div class="news-title">📌 ${news.title}</div>
        <div class="news-summary">${news.summary}</div>
        <div class="news-date-label">${news.date.split('-').reverse().join('.')}</div>
      `;
      newsList.appendChild(item);
    });
  })
  .catch(err => {
    console.error("Haberler yüklenemedi:", err);
  });
