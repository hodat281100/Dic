import { ButtonWrap, LinkWrap } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => {
	let Component = ButtonWrap;
	if (props.to) Component = LinkWrap;

	return <Component {...props}>{children}</Component>;
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	to: PropTypes.string,
	color: PropTypes.oneOf(['primary', 'secondary']),
	styled: PropTypes.oneOf(['primary', 'outline']),
	onClick: PropTypes.func,
};

export default Button;
