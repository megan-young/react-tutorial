import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      id: 'e1',
      name: 'Chelsea Boots',
      date: new Date(2022, 1, 20),
      amount: 160.00,
    },
    { 
      id: 'e2', 
      name: 'New TV', 
      amount: 799.49, 
      date: new Date(2022, 2, 12) },
    {
      id: 'e3',
      name: 'Pots and Pans',
      amount: 155.99,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      name: 'New Desk',
      amount: 300.00,
      date: new Date(2022, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is a paragraph.</p>
      <ExpenseItem 
        name={expenses[0].name} 
        date={expenses[0].date} 
        amount={expenses[0].amount}>
      </ExpenseItem>
      <ExpenseItem 
        name={expenses[1].name} 
        date={expenses[1].date} 
        amount={expenses[1].amount}>
      </ExpenseItem>
      <ExpenseItem 
        name={expenses[2].name} 
        date={expenses[2].date} 
        amount={expenses[2].amount}>
      </ExpenseItem>
      <ExpenseItem 
        name={expenses[3].name} 
        date={expenses[3].date} 
        amount={expenses[3].amount}>
      </ExpenseItem>

    </div>
  );
}

export default App;
