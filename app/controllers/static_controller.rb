class StaticController < ActionController::Base
  layout 'index'

  def index
  end

  def futurico
    render :layout => false
  end
end
