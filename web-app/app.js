document.addEventListener('DOMContentLoaded', () => {
    const getDataBtn = document.getElementById('getDataBtn');
    const apiResponseDiv = document.getElementById('apiResponse');

    getDataBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('http://localhost:3000/api/data');
            const data = await response.json();
            apiResponseDiv.innerHTML = `<p>API Response: ${JSON.stringify(data)}</p>`;
        } catch (error) {
            console.error('Error fetching data from API:', error);
            apiResponseDiv.innerHTML = '<p>Error fetching data from API</p>';
        }
    });
});
