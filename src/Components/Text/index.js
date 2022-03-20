import { TextWrap } from './Text.styled';
import PropTypes from 'prop-types';

const Text = ({ children, ...props }) => {
	return <TextWrap {...props}>{children}</TextWrap>;
};

Text.propTypes = {
	children: PropTypes.string.isRequired,
	bold: PropTypes.bool,
	noWrap: PropTypes.bool,
	fontSize: PropTypes.string,
};

export default Text;
