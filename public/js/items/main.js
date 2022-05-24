async function addItem() {
  function reloadPage() {
    window.location.href = '/api/items';
  }

  const data = {};
  try {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert('Item adicionado com sucesso');
      reloadPage();
      return;
    }
    if (!response.ok) {
      alert('Erro ao adicionar item');
      return;
    }
  } catch (error) {
    alert('Erro ao adicionar item');
    console.log(error);
    return;
  }
}
