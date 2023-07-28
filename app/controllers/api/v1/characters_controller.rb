class Api::V1::CharactersController < ApplicationController
  before_action :set_character, only: %i[ show update destroy ]

  # GET /character
  def index
    @characters = Character.all

    render json: @characters
  end

  # GET /character/1
  def show
    set_character
    render json: @character
  end

  # POST /character
  def create
    @character = Character.new(character_params)

    if @character.save
      render json: @character, status: :created, location: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /character/1
  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # DELETE /character/1
  def destroy
    @character.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def character_params
      params.require(:character).permit(:name, :xcoordinate, :ycoordinate)
    end
end
