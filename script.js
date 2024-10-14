// Gráfico de Habilidades
const ctx = document.getElementById('graficoHabilidades').getContext('2d');
const habilidades = {

    // Estou aprendendo Html/CSS, Tailwindcss, JavaScript, TypeScript, React, NodeJS, C#, Python, Saas, Bootstrap, ExpressJS, MongoDB, MySQL, PostgreSQL, Azure, AWS, Docker, Kubernetes, Git/GitHub Figma, Google Cloud. Linux e Windows. 
    labels: ['HTML/CSS', 'Tailwindcss', 'JavaScript', 'TypeScript', 'React', 'NodeJS', 'C#', 'Python', 'Saas',
        'Bootstrap', 'ExpressJS', 'MongoDB', 'MySQL', 'PostgreSQL', 'Azure', 'AWS', 'Docker', 'Kubernetes',
        'Git/GitHub', 'Figma', 'Linux/Windows'],

    datasets: [{
        label: 'Nível de Habilidade',
        data: [90, 75, 85, 75, 80, 40, 45, 40, 35, 65, 30, 40, 68, 38, 55, 53, 45, 45, 75, 40, 88],
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
document.getElementById('contato-form').addEventListener('submit', function (e) {
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


// Menu hamburguer
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('toggle');
});


