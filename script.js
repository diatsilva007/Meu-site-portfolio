// Gráfico de Habilidades
const ctx = document.getElementById('graficoHabilidades').getContext('2d');
const habilidades = {
    labels: ['JavaScript', 'Python', 'Java', 'C#', 'HTML/CSS', 'TypeScript'],
    datasets: [{
        label: 'Nível de Habilidade',
        data: [85, 90, 75, 70, 95, 80],
        backgroundColor: 'rgba(0, 123, 255, 0.6)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: habilidades,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const grafico = new Chart(ctx, config);

// Envio do formulário
document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});
