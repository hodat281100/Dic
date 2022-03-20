import VocabularyItem from '../../Components/VocabularyItem';
import Wrapper from '../../Components/Wrapper';
import List from '../../Components/List';
import SpecialButton from '../../Components/SpecialButton';
import { VocabularyData } from '../../Helpers/data';
import { useWindowSize } from '../../Hooks';
import { Container } from '../../globalStyles';
import { imageIcon } from '../../Helpers/image';
import { WINDOW_ENTRY_SIZE } from '.';

const HomeBody = () => {
	const { width } = useWindowSize();

	return (
		<Container>
			<Wrapper Display='flex' margin='30px 0'>
				{width > WINDOW_ENTRY_SIZE && (
					<Wrapper
						flex={1}
						alignSelf='flex-start'
						position='sticky'
						top='100px'
						padding='0 20px 0 0'>
						<SpecialButton
							icon={imageIcon.note}
							title='New note'
							onClick={() => alert(132)}
						/>
					</Wrapper>
				)}
				<Wrapper
					flex={2}
					Display='flex'
					flexDirection='column'
					alignItems='center'
					padding={width <= WINDOW_ENTRY_SIZE ? '0' : '0 20px'}>
					<List noWrap data={VocabularyData} fullWidth maxWidth='650px'>
						{(item, index) => <VocabularyItem key={index} data={item} />}
					</List>
				</Wrapper>
				{width > WINDOW_ENTRY_SIZE && <Wrapper flex={1} padding='0 0 0 20px'></Wrapper>}
			</Wrapper>
		</Container>
	);
};

export default HomeBody;
