// @flow
import * as React from 'react';

type Props = {
	name: string
	onClick: () => void

};
export const Button = ({name, onClick,}: Props) => {
	const onClickHandler = () => {
		onClick()
	}
	return (
		<div>
			<button onClick={onClickHandler}>{name}</button>
		</div>
	);
};