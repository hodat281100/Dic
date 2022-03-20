// LocalStorage constant
export const DARK_MODE_KEY = 'dark_mode';

// other setting
export const WINDOW_SCROLL_NAVBAR_ACTIVE = 20;

// Screen Mode
const screen = {
	screen: {
		mobile: '800px',
		pc: '1300px',
	},
	font: {
		rob: 'Roboto',
		phi: 'Philosopher',
	},
};

export const LIGHT_THEME = {
	...screen,
	mode: 'light',
	color: {
		navigation: '#666',
		primary: '#0047ab',
		secondary: '#ff0000',
		highlight: 'coral',
		navbar: '#fff',
		body: '#F0F2F5',
		txtColor: '#2c3539',
		listItem: 'white',
		input: 'white',
		shadowDark: 'rgba(0, 0, 0, 0.5)',
	},
};

export const DARK_THEME = {
	...screen,
	mode: 'dark',
	color: {
		navigation: '#008080',
		primary: '#008080',
		secondary: '#008080',
		highlight: '#008080',
		navbar: '#242526',
		body: '#18191A',
		txtColor: '#f5f5f5',
		listItem: '#222',
		input: '#333',
		shadowDark: 'rgba(255, 255, 255, 0.5)',
	},
};
