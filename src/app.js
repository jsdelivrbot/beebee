import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Countdown from 'countdown';

const misterLeaves = new Date('01/24/16 12:10:00 GMT-1000');
const beebeeArrives = new Date('02/02/16 19:38:00 GMT-0800');

function getTimeParts(start, end) {
	let result = {};

	if (end.getTime() - start.getTime() <= 0) {
		return null;
	}

	var duration = moment.duration(end.getTime() - start.getTime());

	result.seconds = duration.seconds();
	result.minutes = duration.minutes();
	result.hours = duration.hours();
	result.days = duration.days();

	return result;
};

export default class App extends Component {
	constructor(...args) {
		super(...args);
		this.interval = null;
		this.state = {t: new Date()};
	}
	componentWillMount() {
		this.interval = setInterval(() => this.setState({t: new Date()}), 1000);
	}
	componentWillUnmount() {
		if (this.interval)
			clearInterval(this.interval);
	}
	render() {
		const arrival = getTimeParts(this.state.t, beebeeArrives),
			departure = getTimeParts(misterLeaves, this.state.t);

		if (!arrival) return (
			<div className={'container'}>
				<div className={'complete'}>
					<h1>BeeBee is with Mister!</h1>
				</div>
			</div>
		);

		return (
			<div>
				<Countdown label={'Time until BeeBee sees Mister'} time={arrival} />
				<Countdown label={'BeeBee has not seen Mister in'} time={departure} />
			</div>
		);
	}
}