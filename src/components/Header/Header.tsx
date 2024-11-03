import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #4f7df5, #6a2adb);
    padding: 10px 20px;
    border-radius: 12px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    margin: 10px;
    min-width: 400px;
    box-sizing: border-box;
`;

const RocketIcon = styled.span`
    margin-right: 10px;
    font-size: 1.5rem;
`;

function Header() {
    return (
            <StyledButton>
                <RocketIcon>🚀</RocketIcon> Todo List
            </StyledButton>
    );
}

export default Header;