'use client';

import 'wired-elements';
import { WiredCard, WiredButton } from 'wired-elements-react';

export default function HelloCard() {
  return (
    <WiredCard className="p-4 flex flex-col items-center gap-4">
      <h1 className="text-xl font-semibold">Hello Wired</h1>
      <WiredButton>Click me</WiredButton>
    </WiredCard>
  );
}
