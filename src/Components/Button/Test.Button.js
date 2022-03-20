import Button from '.';

const TestButton = () => (
	<>
		<Button>Primary button</Button>
		<Button color='secondary'>Secondary Button</Button>
		<Button styled='outline'>Outline Button</Button>
		<Button styled='outline' color='secondary'>
			Secondary Outline Button
		</Button>
	</>
);

export default TestButton;
