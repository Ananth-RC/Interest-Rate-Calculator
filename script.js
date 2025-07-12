
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers in all fields');
        return;
    }

    const simpleInterest = (principal * rate * time) / 100;
    const compoundInterest = principal * (Math.pow(1 + rate / 100, time) - 1);
    const totalAmountSimple = principal + simpleInterest;
    const totalAmountCompound = principal + compoundInterest;

    resultDiv.innerHTML = `
                <h3>Results:</h3>
                <p><strong>Simple Interest:</strong> ₹ ${simpleInterest.toFixed(2)}</p>
                <p><strong>Total Amount (Simple):</strong> ₹ ${totalAmountSimple.toFixed(2)}</p>
                <p><strong>Compound Interest:</strong> ₹ ${compoundInterest.toFixed(2)}</p>
                <p><strong>Total Amount (Compound):</strong> ₹ ${totalAmountCompound.toFixed(2)}</p>
            `;
    resultDiv.style.display = 'block';
}
