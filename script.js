// 1. Data Structures & Variables
let totalBudget = 0;
let expensesList = []; // Array storing expense objects: { title, amount }

// 2. DOM Element Selectors
const budgetForm = document.getElementById('budget-form');
const totalBudgetInput = document.getElementById('total-budget');
const expenseTitleInput = document.getElementById('expense-title');
const expenseAmountInput = document.getElementById('expense-amount');

const displayBudget = document.getElementById('display-budget');
const displayExpenses = document.getElementById('display-expenses');
const displayBalance = document.getElementById('display-balance');
const statusFeedback = document.getElementById('status-feedback');
const expenseListUI = document.getElementById('expense-list');

// 3. Event Listener: Handle User Actions
budgetForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh

    // Process budget input
    if (totalBudgetInput.value !== "") {
        totalBudget = parseFloat(totalBudgetInput.value);
    }

    // Process expense input if both fields are filled
    const title = expenseTitleInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (title !== "" && !isNaN(amount) && amount > 0) {
        // Add expense object to the array
        expensesList.push({ title: title, amount: amount });

        // Clear expense input fields
        expenseTitleInput.value = '';
        expenseAmountInput.value = '';
    }

    // Update Application Dashboard
    updateDashboard();
});

// 4. Function to Calculate Total Expenses using a Loop
function calculateTotalExpenses() {
    let sum = 0;
    // Processing array elements with a loop
    for (let i = 0; i < expensesList.length; i++) {
        sum += expensesList[i].amount;
    }
    return sum;
}

// 5. Function to Update the UI Dynamically
function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = totalBudget - totalExpenses;

    // DOM Manipulation to display numbers
    displayBudget.textContent = totalBudget.toFixed(2);
    displayExpenses.textContent = totalExpenses.toFixed(2);
    displayBalance.textContent = remainingBalance.toFixed(2);

    // Update Expense List in DOM using a Loop
    expenseListUI.innerHTML = '';
    for (let i = 0; i < expensesList.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${expensesList[i].title}: $${expensesList[i].amount.toFixed(2)}`;
        expenseListUI.appendChild(li);
    }

    // Evaluate Decision Making (Conditionals) for Feedback
    evaluateBudgetStatus(remainingBalance);
}

// 6. Function for Decision Making using Conditionals
function evaluateBudgetStatus(balance) {
    // Reset CSS classes
    statusFeedback.className = 'feedback';

    if (totalBudget === 0) {
        statusFeedback.textContent = "Status: Please set a budget.";
    } else if (balance > (totalBudget * 0.2)) {
        statusFeedback.textContent = "Status: Excellent! Your budget is in good health.";
        statusFeedback.classList.add('good');
    } else if (balance >= 0) {
        statusFeedback.textContent = "Status: Caution! You are close to reaching your limit.";
        statusFeedback.classList.add('warning');
    } else {
        statusFeedback.textContent = "Status: Warning! You have exceeded your total budget!";
        statusFeedback.classList.add('danger');
    }
}
