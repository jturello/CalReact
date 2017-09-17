class Appointments extends React.Component {
  render() {
    return (
      <div>
        <AppointmentForm />
        {this.props.appointments.map(function(appointment) {
          return (
            <Appointment appointment={appointment} />
          )
        })}
      </div>
    )
  }
}

