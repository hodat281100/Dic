import { ButtonIconWrap, LinkIconWrap } from './ButtonIcon.styled';
import { SvgIcon } from '@mui/material';
import PropTypes from 'prop-types';

const ButtonIcon = ({ icon, size = 'medium', ...props }) => {
	let Component = ButtonIconWrap;
	if (props.to) Component = LinkIconWrap;
	return (
		<Component {...props}>
			<SvgIcon component={icon} fontSize={size} />
		</Component>
	);
};

ButtonIcon.propTypes = {
	to: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.object.isRequired,
	styled: PropTypes.oneOf(['primary', 'outline', 'default', 'navigation']),
	color: PropTypes.oneOf(['primary', 'secondary']),
	size: PropTypes.oneOf(['large', 'medium', 'small']),
	circle: PropTypes.bool,
	isHover: PropTypes.bool,
	onClick: PropTypes.func,
};

export default ButtonIcon;
