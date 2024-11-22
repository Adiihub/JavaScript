const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
      <table border="1" cellpadding="10" style="margin: 0 auto; border-collapse: collapse; text-align: center;">
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});