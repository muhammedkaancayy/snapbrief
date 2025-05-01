function showDetail(title, text) {
      document.getElementById('detailTitle').innerText = title;
      document.getElementById('detailText').innerText = text;
      document.getElementById('detailModal').style.display = 'block';
    }

    const exampleNews = [
      {
        title: "Merkez Bankası Faiz Kararı",
        summary: "Merkez Bankası, politika faizini %50 seviyesinde sabit tuttuğunu duyurdu.",
        detail: "Merkez Bankası, politika faizini %50 seviyesinde sabit tuttu. Gerekçeler arasında enflasyonla mücadele ve kur istikrarı yer aldı.",
        date: "2025-05-01"
      },
      {
        title: "İstanbul'da Deprem",
        summary: "Marmara açıklarında 4.1 büyüklüğünde deprem meydana geldi.",
        detail: "Bu sabah Marmara Denizi açıklarında 4.1 büyüklüğünde bir deprem meydana geldi. Deprem çevre illerde de hissedildi, can kaybı yaşanmadı.",
        date: "2025-05-01"
      }
    ];

    const newsList = document.getElementById('newsList');
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