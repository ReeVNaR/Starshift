"use client";

import React from 'react';

interface SmoothScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
}

export function SmoothScrollLink({ href, children, onClick, ...props }: SmoothScrollLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.substring(1);
            const element = document.getElementById(id);
            if (element) {
                const navbarHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navbarHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    );
}
