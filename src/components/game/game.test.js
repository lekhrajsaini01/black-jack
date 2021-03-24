import React from 'react';
import Game from './';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import cardDeckGenerator from '../../helper/cardDeckGenerator';

Enzyme.configure({ adapter: new Adapter() });

describe('<Game />', () => {

	let wrapper;
	let props;

	beforeEach(() => {

		props = {
			cards: cardDeckGenerator()
		}

		wrapper = mount(
			<Game {...props} />
		);
	});

	it('renders the component', () => {

		expect(wrapper.length).toEqual(1);
	});

	it('has 52 cards in the deck when the game starts', () => {

		expect(wrapper.props().cards.length).toEqual(52);

	});

	it('deals two cards to the human, and one to the computer in deal', () => {

	});

});
