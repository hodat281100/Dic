import { forwardRef } from 'react';
import { InputElement, InputIcon, InputWrap } from './Input.styled';
import PropTypes from 'prop-types';

const Input = forwardRef(
	({ circle = false, maxWidth = false, width, flex, icons, ...props }, ref) => {
		return (
			<InputWrap circle={circle} maxWidth={maxWidth} width={width} flex={flex}>
				<InputElement {...props} ref={ref} />
				{icons?.map(({ icon, onClick, type = 'submit' }, index) => (
					<InputIcon
						key={index}
						type={type}
						styled='default'
						icon={icon}
						size='small'
						onClick={onClick}
					/>
				))}
			</InputWrap>
		);
	}
);

Input.propTypes = {
	circle: PropTypes.bool,
	maxWidth: PropTypes.bool,
	width: PropTypes.string,
	flex: PropTypes.number,
	icons: PropTypes.array,
};

export default Input;
