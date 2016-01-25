import React, { Component, PropTypes } from 'react';
import moment from 'moment';

const misterLeaves = new Date('01/24/16 12:10:00 GMT-1000');
const beebeeArrives = new Date('02/02/16 7:38:00 GMT-8000');


//This math is completely fucked
const getTimeParts = function(timespan) {
	let result = {};
	var duration = moment.duration(Math.abs(timespan));

	result.seconds = duration.seconds();
	result.minutes = duration.minutes();
	result.hours = duration.hours();
	result.days = duration.days();

	return result;
};

export default class Countdown extends Component {
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
		const t = getTimeParts(this.state.t.getTime() - beebeeArrives.getTime());

		return (
			<div className={'container'}>
				<div className={'countdown'}>
					<h1>Time until BeeBee sees Mister</h1>
					<div className={'countdown-block days'}>
						<span className={'countdown-time-label days'}>{t.days}</span>
						<span className={'countdown-time-sublabel days'}>Days</span>
					</div>
					<div className={'countdown-block hours'}>
						<span className={'countdown-time-label hours'}>{t.hours}</span>
						<span className={'countdown-time-sublabel hours'}>Hours</span>
					</div>
					<div className={'countdown-block minutes'}>
						<span className={'countdown-time-label minutes'}>{t.minutes}</span>
						<span className={'countdown-time-sublabel minutes'}>Minutes</span>
					</div>
					<div className={'countdown-block seconds'}>
						<span className={'countdown-time-label seconds'}>{t.seconds}</span>
						<span className={'countdown-time-sublabel seconds'}>Seconds</span>
					</div>
				</div>
			</div>
		);
	}
}