class AppointmentForm extends React.Component {
  render() {
    return (
      <div>
        <h3> Make a new appointment</h3>
        <form id='new_appointment_frm'>
          <input name='title' type='text' placeholder='Appointment Title' />
          <input name='appt_time' type='text' placeholder='Date and Time' />
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }
}