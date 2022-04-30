import React, { ReactNode } from 'react';

export interface IGridLayout {
  columns: number | string;
  rows?: number | string;
  gap?: string;
  columnGap?: string;
  areas?: string[];
  minRowHeight?: string;
  alignContent?: string;
  rowGap?: string;
  justifyContent?: string;
  flow?: string;
  height?: string;
  style?: Record<string, any>;
  children: ReactNode;
  className?: any;
}

export type ICell = {
  width?: number;
  height?: number;
  isFlex?: boolean;
  area?: string;
  middle?: boolean;
  style?: Record<string, any>;
  left?: number;
  top?: number;
  children: ReactNode;
  className?: any;
};
