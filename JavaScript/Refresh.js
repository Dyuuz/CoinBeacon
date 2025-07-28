async function updateSnappyRate() {
    try {
        const response = await axios.get('https://fantastic-rejoicing-prod.up.railway.app/rates/snappy-exchange');
        const btcValue = response.data[0].btc;
        const ethValue = response.data[0].eth;
        const usdtValue = response.data[0].usdt;
        const time_updated = response.data[0].updated_time;

        document.querySelector('.snappy-btc-sell').textContent = `₦${btcValue || 'pending'}`;
        document.querySelector('.snappy-eth-sell').textContent = `₦${ethValue || 'pending'}`;
        document.querySelector('.snappy-usdt-sell').textContent = `₦${usdtValue || 'pending'}`;
        document.querySelector('.snappy-time').textContent = `Updated - ${time_updated || 'Updating..'}`;
    } catch (error) {
        document.querySelector('.snappy-btc-sell').textContent = "pending";
        document.querySelector('.snappy-eth-sell').textContent = "pending";
        document.querySelector('.snappy-usdt-sell').textContent = "pending";
        document.querySelector('.snappy-time').textContent = "Updating..";
        console.error('Failed to fetch rate:', error);
    }
}

async function updatePandarRate() {
    try {
        // const response = await axios.get('https://fantastic-rejoicing-prod.up.railway.app/rates/snappy-exchange');
        // const btcValue = response.data[0].btc;
        // const ethValue = response.data[0].eth;
        // const usdtValue = response.data[0].usdt;
        // const time_updated = response.data[0].updated_time;

        document.querySelector('.pandar-btc-sell').textContent = "pending";
        document.querySelector('.pandar-eth-sell').textContent = "pending";
        document.querySelector('.pandar-usdt-sell').textContent = "pending";
        document.querySelector('.pandar-time').textContent = "Updating..";
    } catch (error) {
        document.querySelector('.pandar-btc-sell').textContent = "pending";
        document.querySelector('.pandar-eth-sell').textContent = "pending";
        document.querySelector('.pandar-usdt-sell').textContent = "pending";
        document.querySelector('.pandar-time').textContent = "Updating..";
        console.error('Failed to fetch rate:', error);
    }
}

async function updatePrestmitRate() {
    try {
        // const response = await axios.get('https://fantastic-rejoicing-prod.up.railway.app/rates/snappy-exchange');
        // const btcValue = response.data[0].btc;
        // const ethValue = response.data[0].eth;
        // const usdtValue = response.data[0].usdt;
        // const time_updated = response.data[0].updated_time;

        document.querySelector('.prestmit-btc-sell').textContent = "pending";
        document.querySelector('.prestmit-eth-sell').textContent = "pending";
        document.querySelector('.prestmit-usdt-sell').textContent = "pending";
        document.querySelector('.prestmit-time').textContent = "Updating..";
    } catch (error) {
        document.querySelector('.prestmit-btc-sell').textContent = "pending";
        document.querySelector('.prestmit-eth-sell').textContent = "pending";
        document.querySelector('.prestmit-usdt-sell').textContent = "pending";
        document.querySelector('.prestmit-time').textContent = "Updating..";
        console.error('Failed to fetch rate:', error);
    }
}

async function updateJeroidRate() {
    try {
        // const response = await axios.get('https://fantastic-rejoicing-prod.up.railway.app/rates/snappy-exchange');
        // const btcValue = response.data[0].btc;
        // const ethValue = response.data[0].eth;
        // const usdtValue = response.data[0].usdt;
        // const time_updated = response.data[0].updated_time;

        document.querySelector('.jeroid-btc-sell').textContent = "pending";
        document.querySelector('.jeroid-eth-sell').textContent = "pending";
        document.querySelector('.jeroid-usdt-sell').textContent = "pending";
        document.querySelector('.jeroid-time').textContent = "Updating..";
    } catch (error) {
        document.querySelector('.jeroid-btc-sell').textContent = "pending";
        document.querySelector('.jeroid-eth-sell').textContent = "pending";
        document.querySelector('.jeroid-usdt-sell').textContent = "pending";
        document.querySelector('.jeroid-time').textContent = "Updating..";
        console.error('Failed to fetch rate:', error);
    }
}

async function updateBreetRate() {
    try {
        // const response = await axios.get('https://fantastic-rejoicing-prod.up.railway.app/rates/snappy-exchange');
        // const btcValue = response.data[0].btc;
        // const ethValue = response.data[0].eth;
        // const usdtValue = response.data[0].usdt;
        // const time_updated = response.data[0].updated_time;

        document.querySelector('.breet-btc-sell').textContent = "pending";
        document.querySelector('.breet-eth-sell').textContent = "pending";
        document.querySelector('.breet-usdt-sell').textContent = "pending";
        document.querySelector('.breet-time').textContent = "Updating..";
    } catch (error) {
        document.querySelector('.breet-btc-sell').textContent = "pending";
        document.querySelector('.breet-eth-sell').textContent = "pending";
        document.querySelector('.breet-usdt-sell').textContent = "pending";
        document.querySelector('.breet-time').textContent = "Updating..";
        console.error('Failed to fetch rate:', error);
    }
}

async function updateAstroRate() {
    try {
        // const response = await axios.get('https://fantastic-rejoicing-prod.up.railway.app/rates/snappy-exchange');
        // const btcValue = response.data[0].btc;
        // const ethValue = response.data[0].eth;
        // const usdtValue = response.data[0].usdt;
        // const time_updated = response.data[0].updated_time;

        document.querySelector('.astro-btc-sell').textContent = "pending";
        document.querySelector('.astro-eth-sell').textContent = "pending";
        document.querySelector('.astro-usdt-sell').textContent = "pending";
        document.querySelector('.astro-time').textContent = "Updating..";
    } catch (error) {
        document.querySelector('.astro-btc-sell').textContent = "pending";
        document.querySelector('.astro-eth-sell').textContent = "pending";
        document.querySelector('.astro-usdt-sell').textContent = "pending";
        document.querySelector('.astro-time').textContent = "Updating..";
        console.error('Failed to fetch rate:', error);
    }
}

async function updateAllRates() {
  await updateSnappyRate();
  await updatePandarRate();
  await updatePrestmitRate();
  await updateJeroidRate();
  await updateBreetRate();
  await updateAstroRate();
}

updateAllRates();

setInterval(() => {
  updateAllRates().catch(console.error); // Run and handle errors
}, 3600000);