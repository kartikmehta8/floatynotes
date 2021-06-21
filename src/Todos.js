import React from 'react';
import { motion } from 'framer-motion';

const Todos = ({ todos, deleteTodo }) => {
	const todoList = todos.length
		? todos.map((todo) => {
				if (todo.id !== 0) {
					return (
						<motion.div
							className='collection-item  row cont grey lighten-2'
							key={todo.id}
							drag
							dragConstraints={{
								top: 0,
								left: -115,
								right: 115,
								bottom: 0,
							}}
						>
							<span className='col'>{todo.content}</span>
							<motion.span
								whileHover={{ scale: 1.3 }}
								className='col right butt'
								onClick={() => {
									deleteTodo(todo.id);
								}}
							>
								{' '}
								Delete
							</motion.span>
						</motion.div>
					);
				}
				return null;
		  })
		: null;
	return <div className='todos collection'>{todoList}</div>;
};

export default Todos;
