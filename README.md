# SpendWise - Interactive Budget Tracker

## Project Improvements
In this iteration, SpendWise was updated from an output-only application to an interactive, dynamic web app. Key improvements include:
- Replaced basic browser `prompt()` prompts with a form user interface.
- Added event listeners to capture user input in real-time without reloading the webpage.
- Integrated dynamic DOM updates to show live budget remaining balance, expense details, and status notifications directly on the UI.

## How Conditionals Are Used
Conditional statements (`if...else if...else`) are implemented in the `evaluateBudgetStatus()` function to evaluate user spending logic dynamically:
- Checks if the budget has been initialized.
- Displays a green positive status message when remaining funds are above 20%.
- Triggers a yellow warning status when the balance falls low.
- Signals a red danger notification when the remaining balance drops below zero (budget exceeded).

## How Arrays Are Used to Store Data
Instead of creating distinct variables for individual inputs, an array named `expensesList` holds objects containing expense items (`title` and `amount`). Using `.push()`, new expense inputs are continually appended into this array.

## How Loops Are Used
Loops (`for` statements) iterate through the `expensesList` array to:
1. Accumulate individual item costs and calculate total spending.
2. Dynamically build and render HTML `<li>` elements to present complete expense history records on the dashboard screen.
