function FeedbacksRow({feedback}) {
    return (
      <tr>
        <td>{feedback.EventId}</td>
        <td>{feedback.Attendee}</td>
        <td>{feedback.Rating}</td>
        <td>{feedback.Comments}</td>
      </tr>
    )
  }
  
  export default FeedbacksRow