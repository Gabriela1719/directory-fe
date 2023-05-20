import {
    Button as RBButton,
    ButtonProps as RBButtonProps,
    OverlayTrigger,
    Spinner,
    Tooltip,
} from 'react-bootstrap';

interface ButtonProps extends RBButtonProps {
    label: string;
    loading?: boolean;
    tooltipMessage?: string;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    loading,
    tooltipMessage,
    disabled,
    variant,
    ...props
}) => {
    return tooltipMessage ? (
        <OverlayTrigger
            placement='top'
            overlay={(props) => <Tooltip {...props}>{tooltipMessage ?? ''}</Tooltip>}>
            <span>
                <RBButton disabled={disabled || loading} variant={variant} {...props}>
                    {loading ? (
                        <Spinner
                            as='span'
                            animation='border'
                            size='sm'
                            variant={variant === 'primary' ? 'white' : 'primary'}
                        />
                    ) : (
                        label
                    )}
                </RBButton>
            </span>
        </OverlayTrigger>
    ) : (
        <RBButton disabled={disabled || loading} variant={variant} {...props}>
            {loading ? (
                <Spinner
                    as='span'
                    animation='border'
                    size='sm'
                    variant={variant === 'primary' ? 'white' : 'primary'}
                />
            ) : (
                label
            )}
        </RBButton>
    );
};