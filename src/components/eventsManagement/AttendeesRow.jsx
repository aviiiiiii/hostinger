function AttendeesRow({attendee}) {
    return (
      <tr>
        <td>{attendee.AttendeeId}</td>
        <td>{attendee.EventId}</td>
        <td>{attendee.Name}</td>
        <td>{attendee.Email}</td>
        <td>{attendee.Phone}</td>
      </tr>
    )
  }
  
  export default AttendeesRow