document.addEventListener('DOMContentLoaded', function() {
    function updateWalletBalance(amount) {
        document.getElementById('wallet-balance').textContent = `$${amount}`;
    }

    let walletBalance = 0;

    document.getElementById('investment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading overlay
        document.getElementById('loading-overlay').style.display = 'flex';
        
        // Simulate a 5-second delay
        setTimeout(function() {
            const investmentAmount = parseFloat(document.getElementById('amount').value);

            if (investmentAmount > 0) {
                walletBalance += investmentAmount;
                updateWalletBalance(walletBalance.toFixed(2));
                alert(`Thanks for investing in ScamCoinZ! Your investment of $${investmentAmount} has been recorded in your virtual wallet.`);
            } else {
                alert('Please enter a valid investment amount.');
            }

            // Hide loading overlay
            document.getElementById('loading-overlay').style.display = 'none';
        }, 5000); // 5 seconds
    });

    document.getElementById('transfer-btn').addEventListener('click', function() {
        alert('Transferring funds is not supported. Your virtual wallet balance is for display only.');
    });

    document.getElementById('sell-btn').addEventListener('click', function() {
        alert('An error has occurred while transferring your ScamCoinZ.');
        walletBalance = 0;
        updateWalletBalance(walletBalance.toFixed(2));
    });

    document.getElementById('why-btn').addEventListener('click', function() {
        window.location.href = 'presentation.html';
    });
});