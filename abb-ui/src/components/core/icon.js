import styled from 'styled-components';
import { ExclamationCircle } from '@styled-icons/heroicons-outline/ExclamationCircle';
import { CloseCircle } from '@styled-icons/ionicons-outline/CloseCircle';
import { CheckCircle } from '@styled-icons/boxicons-regular/CheckCircle';
import { Circle } from '@styled-icons/boxicons-regular/Circle'

const icons = {
    exclamation: ExclamationCircle,
    close: CloseCircle,
    check: CheckCircle,
    circle: Circle,
}


function Icon({ name, color, w }) {
    const StyledIcon = styled(icons[name])`
        color: ${props => props.color || 'white'};
        width: ${props => props.w || '1rem'};
    `;
    return <StyledIcon w={w} color={color}></StyledIcon>
}

export default Icon;