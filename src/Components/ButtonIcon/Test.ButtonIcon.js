import { FacebookOutlined } from '@mui/icons-material';
import ButtonIcon from '.';
import { centerStyle } from '../../globalStyles';

const TestButtonIcon = () => (
	<>
		<div style={centerStyle}>
			<ButtonIcon size='small' icon={FacebookOutlined} title='Facebook' />
			<ButtonIcon icon={FacebookOutlined} title='Facebook' />
			<ButtonIcon size='large' icon={FacebookOutlined} title='Facebook' />
		</div>
		<div style={centerStyle}>
			<ButtonIcon size='small' icon={FacebookOutlined} title='Facebook' />
			<ButtonIcon icon={FacebookOutlined} title='Facebook' />
			<ButtonIcon size='large' icon={FacebookOutlined} title='Facebook' />
		</div>
		<div style={centerStyle}>
			<ButtonIcon
				color='secondary'
				styled='outline'
				size='small'
				icon={FacebookOutlined}
				title='Facebook'
			/>
			<ButtonIcon
				color='secondary'
				styled='outline'
				icon={FacebookOutlined}
				title='Facebook'
			/>
			<ButtonIcon
				color='secondary'
				styled='outline'
				size='large'
				icon={FacebookOutlined}
				title='Facebook'
			/>
		</div>
		<div style={centerStyle}>
			<ButtonIcon
				color='secondary'
				styled='outline'
				circle={false}
				size='small'
				icon={FacebookOutlined}
				title='Facebook'
			/>
			<ButtonIcon
				color='secondary'
				styled='outline'
				circle={false}
				icon={FacebookOutlined}
				title='Facebook'
			/>
			<ButtonIcon
				color='secondary'
				styled='outline'
				circle={false}
				size='large'
				icon={FacebookOutlined}
				title='Facebook'
			/>
		</div>
		<div style={centerStyle}>
			<ButtonIcon
				isHover
				circle
				styled='default'
				color='secondary'
				size='small'
				icon={FacebookOutlined}
				title='Facebook'
			/>
			<ButtonIcon
				isHover
				styled='default'
				color='secondary'
				icon={FacebookOutlined}
				title='Facebook'
			/>
			<ButtonIcon
				styled='default'
				color='secondary'
				size='large'
				icon={FacebookOutlined}
				title='Facebook'
			/>
		</div>
		<div style={centerStyle}>
			<ButtonIcon styled='navigation' size='small' icon={FacebookOutlined} title='Facebook' />
			<ButtonIcon styled='navigation' icon={FacebookOutlined} title='Facebook' />
			<ButtonIcon styled='navigation' size='large' icon={FacebookOutlined} title='Facebook' />
		</div>
	</>
);

export default TestButtonIcon;
