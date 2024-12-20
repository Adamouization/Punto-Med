import React from 'react';

interface StyledListProps {
  items: string[];
}

export function StyledList({ items }: StyledListProps) {
  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className="pl-2">
          {item}
        </li>
      ))}
    </ul>
  );
}