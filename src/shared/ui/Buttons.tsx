interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

export function Button({ 
    children, 
    onClick,
    variant = 'primary',
    size = 'medium',
    className = '',
 }: ButtonProps) {

    const baseStyles = "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md hover:shadow-lg";
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300 hover:scale-105',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300 hover:scale-105',
        outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-300',
        text: 'text-gray-600 hover:text-gray-900 shadow-none focus:ring-gray-300',
    }
    const sizeStyles = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-5 py-2.5 text-base',
        large: 'px-6 py-3 text-lg',
    }

    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
    return (
        <button
            onClick={onClick}
            className={combinedClasses}
        >
            {children}
        </button>
    );
}