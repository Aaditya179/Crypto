const coinData = {
    btc: { name: "Bitcoin (BTC)", color: "#f7931a" },
    eth: { name: "Ethereum (ETH)", color: "#3c3c3d" },
    bnb: { name: "Binance Coin (BNB)", color: "#f0b90b" },
    sol: { name: "Solana (SOL)", color: "#9945FF" },
    ada: { name: "Cardano (ADA)", color: "#0033ad" },
    xrp: { name: "XRP (XRP)", color: "#25a0db" },
    doge: { name: "Dogecoin (DOGE)", color: "#c2a633" },
    dot: { name: "Polkadot (DOT)", color: "#e6007a" },
    avax: { name: "Avalanche (AVAX)", color: "#e84142" },
    link: { name: "Chainlink (LINK)", color: "#2a5ada" },
    ltc: { name: "Litecoin (LTC)", color: "#a6a9aa" }
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let selectedCoin = "btc"; // Default to Bitcoin
let chartInstance = null;

// Function to generate random price data
function generateRandomPrices() {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * (50000 - 3000) + 3000));
}

// Function to create chart
function createChart(coinKey) {
    const ctx = document.getElementById("cryptoChart").getContext("2d");

    if (chartInstance) {
        chartInstance.destroy(); // Remove previous chart before creating a new one
    }

    chartInstance = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: coinData[coinKey].name,
                data: generateRandomPrices(),
                borderColor: coinData[coinKey].color,
                backgroundColor: coinData[coinKey].color + "20",
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: "#ffffff",
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { color: "rgba(255, 255, 255, 0.1)" } },
                y: { grid: { color: "rgba(255, 255, 255, 0.1)" } }
            },
            plugins: {
                legend: { labels: { color: "#ffffff" } }
            }
        }
    });
}

// Event listener for dropdown selection
document.getElementById("cryptoSelect").addEventListener("change", function () {
    selectedCoin = this.value;
    createChart(selectedCoin);
});

// Update chart data every 5 seconds
setInterval(() => {
    if (chartInstance) {
        chartInstance.data.datasets[0].data = generateRandomPrices();
        chartInstance.update();
    }
}, 5000);

// Initialize default chart
createChart(selectedCoin);
