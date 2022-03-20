import BoxBox from '../../Components/BoxBox';
import Wrapper from '../../Components/Wrapper';
import { Container } from '../../globalStyles';
import styled from 'styled-components';
import { imageBox } from '../../Helpers/image';

const OptionBox = () => {
	return (
		<Container>
			<Wrapper Display='flex' justifyContent='center'>
				<OptionBoxWrap>
					<BoxBox
						title='Words'
						content='123.456 Words'
						icon={imageBox.words}
						color='linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
					/>
					<BoxBox
						title='Test'
						content='2 lessons'
						icon={imageBox.test}
						color='linear-gradient(60deg, rgba(187, 75, 174, 1) 0%, rgba(0, 212, 255, 1) 100%)'
					/>
					<BoxBox
						title='Star'
						content='1.000 stars'
						color='linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)'
					/>
				</OptionBoxWrap>
			</Wrapper>
		</Container>
	);
};

const OptionBoxWrap = styled.div`
	display: inline-grid;
	grid-gap: 50px 100px;
	margin-bottom: 30px;

	@media (min-width: 450px) {
		grid-template-columns: auto;
	}
	@media (min-width: 600px) {
		grid-template-columns: auto auto;
	}
	@media (min-width: 900px) {
		grid-template-columns: auto auto auto;
	}
`;

export default OptionBox;
