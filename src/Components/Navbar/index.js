import {
	ArrowUpwardOutlined,
	LightModeOutlined,
	NightlightOutlined,
	NoteAddOutlined,
	Search,
} from '@mui/icons-material';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import {
	NavbarContainer,
	NavbarItem,
	NavbarLogo,
	NavbarSearchForm,
	NavbarSpace,
	NavbarWrap,
	OnTopBtn,
} from './Navbar.styled';
import { useEventListener, useWindowSize } from '../../Hooks';
import { useEffect, useState } from 'react';
import { WINDOW_SCROLL_NAVBAR_ACTIVE } from '../../Helpers/constant';
import Input from '../Input';

const Navbar = ({ darkMode, set }) => {
	const { width } = useWindowSize();

	const [active, setActive] = useState(false);
	useEffect(() => {
		setActive(window.scrollY > WINDOW_SCROLL_NAVBAR_ACTIVE);
	}, []);
	useEventListener('scroll', () => setActive(window.scrollY > WINDOW_SCROLL_NAVBAR_ACTIVE));

	const [isShowOntopBtn, setIsShowOntopBtn] = useState(false);
	useEffect(() => {
		setIsShowOntopBtn(window.scrollY > 1000);
	}, []);
	useEventListener('scroll', () => setIsShowOntopBtn(window.scrollY > 1000));

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<NavbarContainer active={active}>
				<NavbarWrap active={active}>
					<NavbarItem flex={1} side='left'>
						<NavbarLogo to='/'>DICTIONARY</NavbarLogo>
					</NavbarItem>
					{width > 800 && (
						<NavbarItem flex={2}>
							<NavbarSearchForm onSubmit={handleSubmit}>
								<Input
									maxWidth
									placeholder='Some keyword...'
									icons={[{ icon: Search, onClick: () => alert(1) }]}
								/>
							</NavbarSearchForm>
						</NavbarItem>
					)}
					<NavbarItem flex={1} side='right'>
						{width <= 800 && (
							<ButtonIcon
								styled='navigation'
								size='medium'
								title='Tìm kiếm'
								icon={Search}
								onClick={() => alert(1)}
							/>
						)}
						{width <= 1100 && (
							<ButtonIcon
								styled='navigation'
								size='medium'
								title='Note'
								icon={NoteAddOutlined}
								onClick={() => alert(2)}
							/>
						)}
						<ButtonIcon
							styled='navigation'
							size='medium'
							title={darkMode ? 'Bật đèn' : 'Tắt đèn'}
							icon={darkMode ? LightModeOutlined : NightlightOutlined}
							onClick={() => set(!darkMode)}
						/>
						{isShowOntopBtn && (
							<OnTopBtn
								styled='navigation'
								size='medium'
								title='Ontop'
								icon={ArrowUpwardOutlined}
								onClick={() => alert(3)}
							/>
						)}
					</NavbarItem>
				</NavbarWrap>
			</NavbarContainer>
			<NavbarSpace />
		</>
	);
};

Navbar.propTypes = {
	darkMode: PropTypes.bool,
	set: PropTypes.func,
};

export default Navbar;
