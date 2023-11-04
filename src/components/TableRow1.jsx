function TableRow1({log}) {
  return (
    <tr>
      <td>{log.type}</td>
      <td>{log.number}</td>
      <td>{log.date}</td>
      <td>{log.toll}</td>
      <td>{log.tariff}</td>
    </tr>
  )
}

export default TableRow1