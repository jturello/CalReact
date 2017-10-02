class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setApptTime = this.setApptTime.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.target.elements.appt_time.value.length > 0) {
      this.props.onFormSubmit();
    }
    else {
      alert('Please select a Date/Time!');
    }
  }

  setApptTime (e) {
    const name = 'appt_time';
    const obj = {};
    if (obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  render() {
    this.inputProps = {
      name: 'appt_time',
      placeholder: 'Select a Date/Time',
      readOnly: true,
      required: true
    }

    return (
      <div>
        <h2>Make a new appointment</h2>
        <form id="new_appt_frm" onSubmit={this.handleSubmit}>
          <input id='title' name='title' type='text' placeholder='Appointment Title'
                 required={true} value={this.props.title}
                 onChange={this.handleChange}
          />
          <Datetime input={false} open={true} inputProps={this.inputProps}
                    value={this.props.appt_time}
                    onChange={this.setApptTime}
          />
          <input type='submit' value='Add Appointment' className='submit-button'/>
        </form>
      </div>
    )
  }
}