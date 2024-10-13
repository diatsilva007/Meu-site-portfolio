// Gráfico de Habilidades
const ctx = document.getElementById('graficoHabilidades').getContext('2d');
const habilidades = {
    labels: ['JavaScript', 'Python', 'Java', 'C#', 'HTML/CSS'],
    datasets: [{
        label: 'Nível de Habilidade',
        data: [85, 90, 75, 70, 95],
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
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Nível (%)'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        }
    }
};

const grafico = new Chart(ctx, config);

// Envio do formulário
document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const feedback = document.getElementById('form-feedback');
    const nome = this[0].value;
    const email = this[1].value;
    const mensagem = this[2].value;

    // Validação simples (exemplo)
    if (nome && email && mensagem) {
        feedback.textContent = 'Mensagem enviada com sucesso!';
        feedback.style.color = '#28a745'; // Verde
    } else {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.style.color = '#dc3545'; // Vermelho
    }

    this.reset(); // Limpa o formulário após o envio
});

