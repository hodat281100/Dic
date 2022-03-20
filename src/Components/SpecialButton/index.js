import ImageIcon from '../ImageIcon';
import { SpecialButtonWrap } from './SpecialButton.styled';
import PropTypes from 'prop-types';

const SpecialButton = ({ title, icon, spacing = 15, ...props }) => {
	return (
		<SpecialButtonWrap {...props}>
			<ImageIcon
				src={icon}
				size='large'
				style={{ marginRight: spacing, marginLeft: -spacing }}
			/>
			{title}
		</SpecialButtonWrap>
	);
};

SpecialButton.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default SpecialButton;
