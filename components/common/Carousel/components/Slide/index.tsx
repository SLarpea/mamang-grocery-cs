"use client";
import { useRef, useEffect } from 'react';
import React from 'react'

interface Props {
    children: React.ReactNode;
    [key: string]: any;
}

const Slide = ({ children, ...props }: Props) => {
  return (
    <div {...props} style={{margin: '.2rem'}}>
        {children}
    </div>
  )
}

export default Slide;