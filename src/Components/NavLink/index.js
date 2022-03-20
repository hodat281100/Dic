import { SvgIcon } from '@mui/material';
import PropTypes from 'prop-types';
import { NavLinkWrap } from './NavLink.styled';

const NavLink = ({ icon, ...props }) => {
	return (
		<NavLinkWrap {...props}>
			<SvgIcon component={icon} fontSize='large' />
		</NavLinkWrap>
	);
};

NavLink.propTypes = {
	to: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired,
	active: PropTypes.string,
	title: PropTypes.string,
};

export default NavLink;
