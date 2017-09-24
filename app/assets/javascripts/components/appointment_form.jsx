class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  render() {
    return (
      <div>
        <h2>Make a new appointment</h2>
        <form>
          <input name='title' type='text' placeholder='Appointment Title'
                 value={this.props.input_title}
                 ref={el => this.el = el}
                 onChange={this.handleChange} />
          <input name='appt_time' type='text' placeholder='Date and Time'
                 value={this.props.input_appt_time}
                 onChange={this.handleChange}  />
          <input type='submit' value='Add Appointment' />
        </form>
      </div>
    )
  }
}