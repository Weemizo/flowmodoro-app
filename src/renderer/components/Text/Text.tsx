import React from 'react';
import style from './Text.module.css';

interface Props {
  children: React.ReactNode;
}

export default function Text({ children }: Props) {
  return <div className={style.text}>{children}</div>;
}
