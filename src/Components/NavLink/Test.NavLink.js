import { FacebookOutlined } from '@mui/icons-material';
import NavLink from '.';
import { centerStyle } from '../../globalStyles';

const TestNavLink = () => {
	return (
		<div style={centerStyle}>
			<NavLink to='/' icon={FacebookOutlined} active='true' />
		</div>
	);
};

export default TestNavLink;
