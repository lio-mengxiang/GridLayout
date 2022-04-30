import React, { FC } from 'react';
import { ICell } from '../../interface';

const middleStyle = (middle) => {
  if (middle) {
    return {
      display: 'inline-flex',
      flexFlow: 'column wrap',
      justifyContent: 'center',
      alignItem: 'center',
    };
  }
};

const Cell: FC<ICell> = ({ width = 1, height = 1, isFlex = false, area, middle, style = {}, left, top, children, className }) => {
  const mergedstyle: Record<string, any> = {
    minWidth: 0,
    gridColumnEnd: `span ${width}`, // 使用 grid-column-end 属性设置网格元素跨越多少列，或者在哪一列结束。
    gridRowEnd: `span ${height}`, // grid-row-start 属性指定哪一行开始显示网格元素
    gridColumnStart: left, // grid-column-start 属性定义了网格元素从哪一列开始
    gridRowStart: top, // grid-row-end 属性指定哪一行停止显示网格元素，或设置跨越多少行
    ...middleStyle(middle),
    ...style,
  };
  if (area) mergedstyle.gridArea = area;
  if (isFlex) mergedstyle.display = 'flex';
  return (
    <div className={className} style={mergedstyle}>
      {children}
    </div>
  );
};

export default React.memo<ICell>(Cell);
