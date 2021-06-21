import React, { Component } from 'react';
import AddTodo from './AddForms';
import Todos from './Todos';
import { motion } from 'framer-motion';
import Progress from '../src/Progress';

const appVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

const headVariants = {
	hidden: {
		y: 1000,
	},
	visible: {
		y: 0,
	},
};

class App extends Component {
	state = {
		todos: [{ id: 0, content: '' }],
	};

	deleteTodo = (id) => {
		const todos = this.state.todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({ todos: todos });
	};

	addTodo = (todo) => {
		todo.id = Math.random();
		let todos = [...this.state.todos, todo];
		this.setState({ todos: todos });
	};

	render() {
		return (
			<div>
				<motion.div
					className='todo-app container'
					variants={appVariants}
					initial='hidden'
					animate='visible'
				>
					<motion.h4
						className='center heading'
						variants={headVariants}
						initial='hidden'
						animate='visible'
					>
						FloatyNotes
					</motion.h4>
					<motion.div class='inside'>
						<div className='conainer'>
							<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
						</div>
						<Progress />
						<AddTodo addTodo={this.addTodo} />
					</motion.div>
				</motion.div>
			</div>
		);
	}
}

export default App;
