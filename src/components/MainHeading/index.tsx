import React from "react";

export default function MainHeading({ title }: { title: string }) {
  return (
    <div className="px-2 py-4 flex items-center justify-start">
      <h3 className="text-3xl font-semibold text-primary">{title}</h3>
    </div>
  );
}
