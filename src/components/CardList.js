import React from 'react';
import Card from './Card';

// using destructure instead of(props)
// directly parse to the argument
const CardList = ({ robots }) => {
	return (
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card
							key={robots[i].id}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
						/>);
				})
			}
		</div>
	)

}

export default CardList;