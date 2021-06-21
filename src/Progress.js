import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Progress extends Component {
	render() {
		return (
			<div className='row'>
				<motion.div
					className='col green prog lighten-4'
					whileHover={{ color: 'black' }}
				>
					COMPLETED
				</motion.div>
				<motion.div
					className='col right red prog lighten-3'
					whileHover={{ color: 'black' }}
				>
					INCOMPLETE
				</motion.div>
			</div>
		);
	}
}

export default Progress;
