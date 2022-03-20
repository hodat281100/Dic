import { Image, ImageIconWrap } from './ImageIcon.styled';
import PropTypes from 'prop-types';

const ImageIcon = ({ src, alt = '', ...props }) => {
	return (
		<ImageIconWrap {...props}>
			<Image src={src} alt={alt} />
		</ImageIconWrap>
	);
};

ImageIcon.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string,
	fontSize: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	noPointer: PropTypes.bool,
};

export default ImageIcon;
