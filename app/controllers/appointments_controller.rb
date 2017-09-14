class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('appt_time ASC')
    @appointment = Appointment.new
  end

  def create
    @appointment = Appointment.create!(appointment_params)
    puts @appointment
    @appointments = Appointment.order('appt_time ASC')
    redirect_to :root
  end




  :private

  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end

end


# TODO refactor create method per example below
=begin

  def create
    @country = Country.new(country_params)
    if @country.save
      flash[:notice] = "Country successfully added!"
      redirect_to countries_path
    else
      flash[:alert] = "Country not added. Try again!"
      render :new
    end
  end

=end