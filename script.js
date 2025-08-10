const Balance = Document.getElementById("balance");
const money_plus = Document.getElementById("money_plus");
const money_minus = Document.getElementById("money_minus");
const form = Document.getElementById("form");
const text = Document.getElementById("text");
const income_text = Document.getElementById("income_text");
const expense_text = Document.getElementById("expense_text");
const list = Document.getElementById("list");
const amount = Document.getElementById("amount");

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
)

let transactions = localStorage.getItem("transactions") !== null?localStorageTransactions : "";

function addTransaction(e) {}
  e.preventDeafult();

  if (incomeText.value.trim() !== " ") {
    const incomeTransaction = {
    id :generateId(),
    text: "income",
    amount: +incomeText.value
  }
}