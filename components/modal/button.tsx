'use client'

import React from 'react';
import { IconType } from 'react-icons'; // Ensure IconType is imported from react-icons

interface Props {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled: boolean;
    outline: boolean;
    small?: boolean;
    icon?: IconType; // Optional icon
}

const Button: React.FC<Props> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon,
}) => {
    // Base button styles
    let buttonClass = 'p-2 rounded-md transition duration-300 ease-in-out w-full';

    // Outline style
    if (outline) {
        buttonClass += ' border-2 border-gray-600 text-blue-500 hover:bg-gray-500 hover:text-white';
    } else {
        buttonClass += ' bg-gray-500 text-white hover:bg-gray-700';
    }

    // Small button style
    if (small) {
        buttonClass += ' text-sm py-1 px-3';
    }

    // Disabled button style
    if (disabled) {
        buttonClass += ' bg-gray-300 text-gray-600 cursor-not-allowed';
    }

    return (
        <button
        
            onClick={onClick}
            className={buttonClass}
            disabled={disabled}
            aria-disabled={disabled ? 'true' : 'false'} // Accessibility improvement

        >
            {Icon && <Icon size={24} className="mr-2 inline-block" />} {/* If icon is passed, render it */}
            {label}
        </button>
    );
};

export default Button;
