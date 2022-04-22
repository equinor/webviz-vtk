import React, { useEffect, useRef } from 'react'

export default function usePreviousValue(value: any) {
    const previousRef = useRef();
    useEffect(() => {
        previousRef.current = value;
    }, [value]);
    return previousRef.current
}