const data = {};

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  data.url = e.target[0].value;
  e.target.remove();
  document.querySelector('form .inputs').style.display = 'flex';
  document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    data.domain = e.target[0].value;
    data.custom = e.target[1].value;
    const data = await (
      await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    ).json();
    console.log(data);
  });
});
