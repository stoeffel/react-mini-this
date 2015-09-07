jest.dontMock('../');
jest.dontMock('../pure');

import React from 'react/addons';
import { equal } from 'assert';

const { TestUtils } = React.addons;
const mini = require('../');
const pure = require('../pure');

describe('React-Mini-This', () => {
  it('should render the props', () => {
		const Hello = (({greeting = 'Hi', name}) => (
			<h1>{greeting} {name}</h1>))::pure();

		const component = TestUtils.renderIntoDocument( <Hello name='Stoeffel'/>);
		const val = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
    equal(val.getDOMNode().textContent, 'Hi Stoeffel');

		const component2 = TestUtils.renderIntoDocument( <Hello greeting='Hello' name='Stoeffel'/>);
		const val2 = TestUtils.findRenderedDOMComponentWithTag(component2, 'h1');
    equal(val2.getDOMNode().textContent, 'Hello Stoeffel');
	});

  it('should update the state', () => {
		const Counter = (({ step = 3 }, { setState, state: {count} }) => {
			const incCounter = () => setState({ count : count + step });

				return (
					<div>
					  Counter: <span>{count}</span>
						<button onClick={incCounter}>+1</button>
					</div>);
		})::mini( { count: 10 });

		const component = TestUtils.renderIntoDocument( <Counter step={10}/>);
		const countValue = TestUtils.findRenderedDOMComponentWithTag(component, 'span');
		const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');

    equal(countValue.getDOMNode().textContent, '10');
		TestUtils.Simulate.click(button);
		equal(countValue.getDOMNode().textContent, '20');
	});
});
