import { WrapperContainer } from './Wrapper.styled';
import PropTypes from 'prop-types';

const Wrapper = ({ children, ...props }) => {
	return <WrapperContainer {...props}>{children}</WrapperContainer>;
};

Wrapper.propTypes = {
	Display: PropTypes.oneOf(['block', 'flex', 'hidden', 'grid', 'inline-grid']),

	// flex-box
	flex: PropTypes.number,
	flexWrap: PropTypes.bool,
	flexDirection: PropTypes.oneOf(['column', 'row', 'row-reverse', 'column-reverse']),
	justifyContent: PropTypes.oneOf([
		'center',
		'space-between',
		'space-around',
		'space-evenly',
		'flex-start',
		'flex-end',
	]),
	alignItems: PropTypes.oneOf(['center', 'flex-start', 'flex-end']),
	alignSelf: PropTypes.oneOf(['center', 'flex-start', 'flex-end']),

	// grid
	gridTemplate: PropTypes.string,
	gridGap: PropTypes.string,

	// positon
	position: PropTypes.oneOf(['relative', 'absolute', 'fixed', 'sticky']),
	top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

	// others
	width: PropTypes.string,
	height: PropTypes.string,
	minWidth: PropTypes.string,
	minHeight: PropTypes.string,
	maxWidth: PropTypes.string,
	maxHeight: PropTypes.string,

	margin: PropTypes.string,
	padding: PropTypes.string,
};

export default Wrapper;
