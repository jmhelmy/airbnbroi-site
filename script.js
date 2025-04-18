fetch('public/airbnb_filtered.csv')
  .then(res => res.text())
  .then(csv => {
    const [headerLine, ...lines] = csv.trim().split('\n');
    const headers = headerLine.split(',');

    const thead = document.querySelector('#data-table thead');
    const tbody = document.querySelector('#data-table tbody');

    thead.innerHTML = '<tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr>';
    tbody.innerHTML = lines.map(row =>
      '<tr>' + row.split(',').map(cell => `<td>${cell}</td>`).join('') + '</tr>'
    ).join('');
  });
