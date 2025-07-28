async function updateRate() {
try {
    const response = await axios.get('https://fantastic-rejoicing-prod.up.railway.app/rates/snappy-exchange');
    const btcValue = data[0].btc;
    const ethValue = data[0].eth;
    const usdtValue = data[0].usdt;

    // Update the BTC rate in the DOM
    document.querySelector('.snappy-btc-sell').textContent = `₦${btcValue || '--'}`;
} catch (error) {
    console.error('Failed to fetch BTC rate:', error);
}
}

// Call once on page load
updateRate();

// Set interval to call it every 60 seconds (60000 ms)
setInterval(updateRate, 60000);