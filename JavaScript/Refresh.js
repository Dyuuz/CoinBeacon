async function updateRate(platform) {
    const selectors = {
        btc: `.${platform}-btc-sell`,
        eth: `.${platform}-eth-sell`,
        usdt: `.${platform}-usdt-sell`,
        time: `.${platform}-time`
    };

    try {
        const response = await axios.get(`https://fantastic-rejoicing-prod.up.railway.app/api/rates/${platform}`);
        const { btc, eth, usdt, updated_time } = response.data[0];
        // alert(JSON.stringify(response.data, null, 2));

        document.querySelector(selectors.btc).textContent = btc || '₦--';
        document.querySelector(selectors.eth).textContent = eth || '₦--';
        document.querySelector(selectors.usdt).textContent = usdt || '₦--';
        document.querySelector(selectors.time).textContent = `Updated - ${updated_time || 'Updating..'}`;
    } catch (error) {
        document.querySelector(selectors.btc).textContent = '₦--';
        document.querySelector(selectors.eth).textContent = '₦--';
        document.querySelector(selectors.usdt).textContent = '₦--';
        document.querySelector(selectors.time).textContent = 'Updating..';
        console.error(`Failed to fetch ${platform} rate:`, error);
    }
}

async function updateAllRates() {
    const sources = ['astro-africa', 'breet', 'busha', 'jeroid', 'luno', 'pandar', 'paxful', 'prestmit', 'snappy-exchange'];
    await Promise.all(sources.map(updateRate));
}

updateAllRates();

setInterval(() => {
  updateAllRates().catch(console.error);
}, 3600000);