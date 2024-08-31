import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {
    const { width, height } = useWindowSize();

    const moveOrb = keyframes`
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(${width * 0.1}px, ${height * 0.5}px);
        }
        100% {
            transform: translate(0, 0);
        }
    `;

    const OrbStyled = styled.div`
        width: 10rem;
        height: 10rem;
        position: absolute;
        border-radius: 50%;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(2rem);
        animation: ${moveOrb} 15s alternate linear infinite;
        transition: background 0.5s ease;

        &:hover {
            background: linear-gradient(180deg, #F2994A 0%, #F56692 100%);
        }
    `;

    return <OrbStyled />;
}

export default Orb;