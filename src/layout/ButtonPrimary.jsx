import { useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  clicked: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CLICK':
      return {
        ...state,
        clicked: true
      };
    default:
      throw new Error();
  }
};

const ButtonPrimary = ({ onClick, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: 'CLICK' });
    onClick();
  };

  const buttonStyle = `bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;

  return (
    <button
      className={buttonStyle}
      onClick={handleClick}
      disabled={state.clicked}
    >
      {children}
    </button>
  );
};

ButtonPrimary.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default ButtonPrimary;