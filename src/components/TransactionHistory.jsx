export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
          <tr>
            <td>{el.type[0].toUpperCase()}{el.type.slice(1)}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
        {/* <tr> */}
        {/*   <td>Invoice</td> */}
        {/*   <td>125</td> */}
        {/*   <td>USD</td> */}
        {/* </tr> */}
        {/* <tr> */}
        {/*   <td>Withdrawal</td> */}
        {/*   <td>85</td> */}
        {/*   <td>USD</td> */}
        {/* </tr> */}
      </tbody>
    </table>
  )
}

