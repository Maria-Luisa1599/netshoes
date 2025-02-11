// Definir a data alvo
const targetDate = new Date("January 31, 2026 00:00:00").getTime();

// Atualizar a contagem regressiva a cada segundo
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calcular dias, horas, minutos e segundos
    // const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Exibir no HTML
    // document.getElementById("days").textContent = `${days}d`;
    document.getElementById("hours").textContent = `0${hours}`;
    document.getElementById("minutes").textContent = `${minutes}`;
    document.getElementById("seconds").textContent = `${seconds}`;

    // Se a contagem chegar a zero, parar o contador
    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        // document.getElementById("timer").innerHTML = "<h2>Tempo Esgotado!</h2>";
    }
}, 1000);
