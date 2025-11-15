// Crypto Calculator Functions
function calculateProfit() {
    const investment = parseFloat(document.getElementById('investment').value);
    const buyPrice = parseFloat(document.getElementById('buyPrice').value);
    const sellPrice = parseFloat(document.getElementById('sellPrice').value);
    
    if (!investment || !buyPrice || !sellPrice) {
        alert('Please fill in all fields');
        return;
    }
    
    const coins = investment / buyPrice;
    const totalValue = coins * sellPrice;
    const profit = totalValue - investment;
    const returnPercent = ((profit / investment) * 100);
    
    // Update results
    document.getElementById('coinsResult').textContent = coins.toFixed(8);
    document.getElementById('totalValue').textContent = '$' + totalValue.toFixed(2);
    document.getElementById('profitResult').textContent = '$' + profit.toFixed(2);
    document.getElementById('returnPercent').textContent = returnPercent.toFixed(2) + '%';
    
    // Color code profit
    const profitElement = document.getElementById('profitResult');
    profitElement.className = profit >= 0 ? 'positive' : 'negative';
    
    const returnElement = document.getElementById('returnPercent');
    returnElement.className = returnPercent >= 0 ? 'positive' : 'negative';
}

function calculateMarketCap() {
    const supply = parseFloat(document.getElementById('circulatingSupply').value);
    const price = parseFloat(document.getElementById('tokenPrice').value);
    
    if (!supply || !price) {
        alert('Please fill in all fields');
        return;
    }
    
    const marketCap = supply * price;
    const fullyDiluted = marketCap * 1.1; // Assuming 10% more for fully diluted
    
    document.getElementById('marketCapResult').textContent = '$' + formatNumber(marketCap);
    document.getElementById('fullyDiluted').textContent = '$' + formatNumber(fullyDiluted);
}

function formatNumber(num) {
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + 'K';
    }
    return num.toFixed(2);
}

// Initialize calculator with current Bitcoin price
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('profitCalculator')) {
        // Set current Bitcoin price as example
        document.getElementById('buyPrice').value = 45231.89;
        document.getElementById('sellPrice').value = 50000.00;
        document.getElementById('tokenPrice').value = 45231.89;
    }
});
