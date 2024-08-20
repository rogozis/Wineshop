document.getElementById('search-line').addEventListener('input', async function () {
    const query = this.value;
    if (query.length > 0) {
        const response = await fetch('http://localhost:3000/api/wines?q=' + query)
        const wines = await response.json();

        const dropdown = document.getElementById('dropdown');
        dropdown.innerHTML = wines.map(wine => `<div>${wine.name}, ${wine.price}₸<div>`).join('');
        dropdown.style.display = 'block';
    } else {
        document.getElementById('dropdown').style.display = 'none';
    }
});