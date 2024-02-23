function predictExpense() {
    const date = document.getElementById('date').value;
    const categoryCode = document.getElementById('categoryCode').value;

    const data = {
        date: date,
        category_code: categoryCode
    };

    fetch('https://aipi-ehun.onrender.com/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Prediction:', data.prediction);
        document.getElementById('predictionResult').innerText = 'Predicted Expense: ' + data.prediction;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
