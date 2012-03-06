class StaticController < ActionController::Base
  def futurico
    render :layout => false
  end
end
