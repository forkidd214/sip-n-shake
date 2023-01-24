import { createGlobalStyle } from "styled-components";
import { COLORS, WEIGHTS } from "./constants";

export default createGlobalStyle`
    body {
        --color-primary-1: ${COLORS.crimson1};
        --color-primary-2: ${COLORS.crimson2};
        --color-primary-3: ${COLORS.crimson3};
        --color-primary-4: ${COLORS.crimson4};
        --color-primary-5: ${COLORS.crimson5};
        --color-primary-6: ${COLORS.crimson6};
        --color-primary-7: ${COLORS.crimson7};
        --color-primary-8: ${COLORS.crimson8};
        --color-primary-9: ${COLORS.crimson9};
        --color-primary-10: ${COLORS.crimson10};
        --color-primary-11: ${COLORS.crimson11};
        --color-primary-12: ${COLORS.crimson12};
        
        --color-gray-1: ${COLORS.gray1};
        --color-gray-2: ${COLORS.gray2};
        --color-gray-3: ${COLORS.gray3};
        --color-gray-4: ${COLORS.gray4};
        --color-gray-5: ${COLORS.gray5};
        --color-gray-6: ${COLORS.gray6};
        --color-gray-7: ${COLORS.gray7};
        --color-gray-8: ${COLORS.gray8};
        --color-gray-9: ${COLORS.gray9};
        --color-gray-10: ${COLORS.gray10};
        --color-gray-11: ${COLORS.gray11};
        --color-gray-12: ${COLORS.gray12};
        
        --weight-normal: ${WEIGHTS.normal};
        --weight-medium: ${WEIGHTS.medium};
        --weight-bold: ${WEIGHTS.bold};
        
        font-family: 'gotham', sans-serif;
        font-weight: 400;
        font-size: calc(16rem / 16);
        line-height: 1.4;
        
        color: var(--color-gray-12);
    }
`;
