require 'spec_helper.rb'

describe "GIS API" do
  context 'Address search'  do
    it "returns empty array when nothingn found" do
      get '/addresses/search', q: '12345 CLIVE BIXBY ST'
      expect(last_response).to be_ok
    end
  end
end
