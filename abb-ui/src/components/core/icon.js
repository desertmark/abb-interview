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


function Icon({ name, ...props }) {
    const Icon = icons[name];
    return <Icon {...props}></Icon>
}

export default Icon;