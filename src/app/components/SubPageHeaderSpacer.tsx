'use client';

interface SubPageHeaderSpacerProps {
  height?: string; // default height
}

export default function SubPageHeaderSpacer({ height = 'h-23' }: SubPageHeaderSpacerProps) {
  return (
    <div
      className={`w-full ${height} md:h-0 bg-gray-400`}
    />
  );
}
