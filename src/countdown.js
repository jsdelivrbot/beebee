import React, { Component, PropTypes } from 'react';

export default class Countdown extends Component {
	render() {
		const { time, label } = this.props ;
		return (
			<div className={'container'}>
				<div className={'countdown'}>
					<h1>{label}</h1>
					<div className={'countdown-block days'}>
						<span className={'countdown-time-label days'}>{time.days}</span>
						<span className={'countdown-time-sublabel days'}>Days</span>
					</div>
					<div className={'countdown-block hours'}>
						<span className={'countdown-time-label hours'}>{time.hours}</span>
						<span className={'countdown-time-sublabel hours'}>Hours</span>
					</div>
					<div className={'countdown-block minutes'}>
						<span className={'countdown-time-label minutes'}>{time.minutes}</span>
						<span className={'countdown-time-sublabel minutes'}>Minutes</span>
					</div>
					<div className={'countdown-block seconds'}>
						<span className={'countdown-time-label seconds'}>{time.seconds}</span>
						<span className={'countdown-time-sublabel seconds'}>Seconds</span>
					</div>
				</div>
			</div>
		);
	}
}