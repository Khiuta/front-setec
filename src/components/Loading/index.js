import React from 'react';
import { Spin } from './styled';

export default function Loading() {
  return (
    <Spin>
      <div className="loader" />
    </Spin>
  );
}
