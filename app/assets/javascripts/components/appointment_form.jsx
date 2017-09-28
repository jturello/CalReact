class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    return (
      <div>
        <h2>Make a new appointment</h2>
        <form id="new_appt_frm" onSubmit={this.handleSubmit}>
          <input id='title' name='title' type='text' placeholder='Appointment Title'
                 value={this.props.title}
                 onChange={this.handleChange} />
          <input name='appt_time' type='text' placeholder='Date and Time'
                 value={this.props.appt_time}
                 onChange={this.handleChange}  />
          <input type='submit' value='Add Appointment' />
        </form>
      </div>
    )
  }
}