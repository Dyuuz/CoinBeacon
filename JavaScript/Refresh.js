async function updateRate() {
try {
    const response = await axios.get('/snappy-exchange');
    const data = response.data[0]; // adjust if response is not an array

    // Update the BTC rate in the DOM
    document.querySelector('.snappy-btc-sell').textContent = `₦${data.BTC || '--'}`;
} catch (error) {
    console.error('Failed to fetch BTC rate:', error);
}
}

// Call once on page load
updateRate();

// Set interval to call it every 60 seconds (60000 ms)
setInterval(updateRate, 60000);