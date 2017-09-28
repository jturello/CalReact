class Appointments extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      appointments: this.props.appointments,
      title: '',
      appt_time: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewAppointment = this.addNewAppointment.bind(this)
  }

  handleUserInput (obj) {
    this.setState (obj)
  }

  handleFormSubmit () {
    const appointment = {title: this.state.title, appt_time: this.state.appt_time}

    this.setState ({ title: '', appt_time: '' })

    $.ajax ({
      url: "/appointments",
      method: "POST",
      data: { appointment: appointment }
    })
    .done ((response) => {
        this.addNewAppointment (response)
      })
    .error (function (xhr) {
      // TODO add error handling
      console.log('error callback', xhr)
    })
  }

  addNewAppointment (appointment) {
    const appointments = React.addons.update(this.state.appointments, { $push: [appointment]} );
    this.setState ({
      appointments: appointments.sort (function (a,b){
        return new Date (a.appt_time) - new Date (b.appt_time);
      })
    })
  }

  render () {
    return (
      <div>
        <AppointmentForm title={this.state.title}
                         appt_time={this.state.appt_time}
                         onUserInput={this.handleUserInput}
                         onFormSubmit={this.handleFormSubmit}/>
        <AppointmentList appointments={this.state.appointments}/>
      </div>
    )
  }
}
