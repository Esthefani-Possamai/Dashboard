import React from "react";

export const formateCurrency = (current: number): string => {
    return current.toLocaleString(
    'pt-br',
    {
        style: 'currency',
        currency: 'BRL'
    });
};
