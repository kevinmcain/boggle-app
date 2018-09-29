require_relative '../lib/playground'

describe Playground do
     context 'when there are no children' do
        # this is lazy and runs for each example
        let(:playground) {Playground.new(0)}

        it 'boring when there are no children' do
            #expect(actual_value).to equal(expected_value)

            mood = playground.mood
            expect(mood).to eq('boring')
        end

        it 'is empty when there are no children' do
            expect(playground).to be_empty
        end

    end
end