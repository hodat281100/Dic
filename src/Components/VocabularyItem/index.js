import { Favorite, OptionWrap, VocabularyItemWrap, VocabularyText } from './VocabularyItem.styled';
import PropTypes from 'prop-types';
import ImageIcon from '../ImageIcon';
import { imageIcon } from '../../Helpers/image';

const VocabularyItem = ({ data: { vi, en, isHighlight }, ...props }) => {
	return (
		<VocabularyItemWrap isHighlight={isHighlight} {...props}>
			<VocabularyText align='left'>{en}</VocabularyText>
			<VocabularyText align='right'>{vi}</VocabularyText>
			<OptionWrap>
				<ImageIcon src={imageIcon.edit} title='Edit' />
				<ImageIcon src={imageIcon.delete} title='Delete' />
				<ImageIcon
					src={isHighlight ? imageIcon.star : imageIcon.unstar}
					title={isHighlight ? 'Unhiglight' : 'Higlight'}
				/>
			</OptionWrap>
			{isHighlight && <Favorite src={imageIcon.favourited} noPointer />}
		</VocabularyItemWrap>
	);
};

VocabularyItem.propTypes = {
	en: PropTypes.string,
	vi: PropTypes.string,
};

export default VocabularyItem;
