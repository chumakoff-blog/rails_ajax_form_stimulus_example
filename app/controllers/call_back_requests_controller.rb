class CallBackRequestsController < ApplicationController
  def create
    # processing request
    succeeded = [true, false].sample

    if succeeded
      head :ok
    else
      head :internal_server_error
    end
  end
end
