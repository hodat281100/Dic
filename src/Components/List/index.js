import { ListWrap } from './List.styled';
import PropTypes from 'prop-types';

const List = ({ children, data, ...props }) => {
	return <ListWrap {...props}>{data.map(children)}</ListWrap>;
};

List.propTypes = {
	children: PropTypes.func.isRequired,
	data: PropTypes.array.isRequired,
	flexDicorection: PropTypes.oneOf(['column', 'row', 'row-reverse', 'column-reverse']),
	noWrap: PropTypes.bool,
	fullWidth: PropTypes.bool,
	maxWidth: PropTypes.string,
};

export default List;
