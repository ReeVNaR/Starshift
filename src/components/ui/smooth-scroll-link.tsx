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
                // Fixed top offset for floating navbar (height ~60px + 20px padding)
                const navbarOffset = 84;
                const elementPosition = element.getBoundingClientRect().top;
                const targetPosition = elementPosition + window.pageYOffset - navbarOffset;

                window.scrollTo({
                    top: Math.max(0, targetPosition),
                    behavior: "smooth"
                });

                if (window.history.pushState) {
                    window.history.pushState(null, '', href);
                }
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
