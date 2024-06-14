import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../images';
const Icon = styled.Image`
    border-color: ${({ theme, correct }) => 
        correct ? theme.correct : theme.wrong};
    border: 1px;
    width: 30px;
    height: 30px;
    margin: 10px;
`;
const IconButton = ({ type, onPressOut, id, correct }) => {
    const _onPressOut = () => {
        onPressOut(id);
    };
    return (
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon source={type} correct={correct} />
        </TouchableOpacity>
    );
};

IconButton.defaultProps = {
    onPressOut: () => {},
};
IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
    id: PropTypes.string,
    correct:  PropTypes.bool,
};

export default IconButton;
