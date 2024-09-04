
function populateUI(data) {
    document.getElementById('name').textContent = data.name; 
    document.getElementById('picture').src = data.profile_picture;
}


fetch('https://fedskillstest.coalitiontechnologies.workers.dev') 
    .then(response => response.json()) 
    .then(data => {
        populateUI(data); 
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });

    document.addEventListener('DOMContentLoaded', function() {
    
    const bloodPressureData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Systolic Blood Pressure',
                data: [120, 125, 130, 128, 132, 135, 138, 136, 140, 142, 144, 146],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: true
            },
            {
                label: 'Diastolic Blood Pressure',
                data: [80, 82, 85, 84, 87, 89, 90, 88, 92, 94, 95, 96],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: true
            }
        ]
    };

    const ctx = document.getElementById('bloodPressureChart').getContext('2d');
    const bloodPressureChart = new Chart(ctx, {
        type: 'line',
        data: bloodPressureData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
});
