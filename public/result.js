document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/results') // Adjust this endpoint as needed
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching results:', error);
        });
});

function displayResults(data) {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    if (data.length === 0) {
        const noResultMessage = document.createElement('p');
        noResultMessage.textContent = "There seems to be no results available for you per your information provided. " +
                                      "Kindly try again later or ";

        const moreInfoLink = document.createElement('a');
        moreInfoLink.href = 'http://example.com'; // Replace with your actual URL
        moreInfoLink.textContent = 'visit this page';
        moreInfoLink.target = '_blank'; // Open in a new tab

        noResultMessage.appendChild(moreInfoLink);
        noResultMessage.appendChild(document.createTextNode(" to see possible reasons for no result display."));
        
        resultsList.appendChild(noResultMessage);
        return;
    }

    data.sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate)); 

    data.forEach(result => {
        const item = document.createElement('div');
        item.className = 'result-item';

        const logo = document.createElement('img');
        logo.src = result.logoUrl;
        logo.alt = `${result.name} Logo`;

        const link = document.createElement('a');
        link.href = result.url;
        link.textContent = result.name;

        const rate = document.createElement('div');
        rate.className = 'exchange-rate';
        rate.textContent = `Rate: ${result.rate}`;

        item.appendChild(logo);
        item.appendChild(link);
        item.appendChild(rate);

        resultsList.appendChild(item);
    });
}
