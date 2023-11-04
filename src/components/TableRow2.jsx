function TableRow2({log}) {
  return (
    <tr>
      <td>{log.name}</td>
      <td>{log.carSingle}/{log.carReturn}</td>
      <td>{log.lcvSingle}/{log.lcvReturn}</td>
      <td>{log.truckSingle}/{log.truckReturn}</td>
      <td>{log.heavySingle}/{log.heavyReturn}</td>
    </tr>
  )
}

export default TableRow2