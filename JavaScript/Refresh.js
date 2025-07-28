async function updateRate() {
try {
    const response = await axios.get('https://fantastic-rejoicing-prod.up.railway.app/rates/snappy-exchange');
    const btcValue = response.data[0].btc;
    const ethValue = response.data[0].eth;
    const usdtValue = response.data[0].usdt;

    document.querySelector('.snappy-btc-sell').textContent = `₦${btcValue || '--'}`;
    document.querySelector('.snappy-eth-sell').textContent = `₦${ethValue || '--'}`;
    document.querySelector('.snappy-usdt-sell').textContent = `₦${usdtValue || '--'}`;
} catch (error) {
    document.querySelector('.snappy-btc-sell').textContent = "pending";
    document.querySelector('.snappy-eth-sell').textContent = "pending";
    document.querySelector('.snappy-usdt-sell').textContent = "pending";
    console.error('Failed to fetch BTC rate:', error);
}
}

updateRate();

setInterval(updateRate, 60000);