import {
	BoxBoxHeader,
	BoxBoxCircle,
	BoxBoxTitle,
	BoxBoxWrap,
	BoxBoxBorder,
	BoxBoxBody,
	BoxBoxContent,
	BoxBoxIcon,
} from './BoxBox.styled';
import PropTypes from 'prop-types';

const BoxBox = ({ title, content, icon, color }) => {
	return (
		<BoxBoxBorder color={color}>
			<BoxBoxWrap>
				<BoxBoxHeader color={color}>
					<BoxBoxTitle>{title}</BoxBoxTitle>
					<BoxBoxCircle color={color}>{icon && <BoxBoxIcon src={icon} />}</BoxBoxCircle>
				</BoxBoxHeader>
				<BoxBoxBody>
					<BoxBoxContent>{content}</BoxBoxContent>
				</BoxBoxBody>
			</BoxBoxWrap>
		</BoxBoxBorder>
	);
};

BoxBox.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	icon: PropTypes.string,
	color: PropTypes.string,
};

export default BoxBox;
