/* eslint-disable react/prop-types */
import React from 'react';
import NextLink from 'next/link';

// Link do next para evitar recarregamento, encapsulado aqui

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
