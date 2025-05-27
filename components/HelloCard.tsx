"use client";
import "wired-elements";
import { WiredButton, WiredCard, WiredInput } from "wired-elements-react";
import { useRef } from "react";

export default function HelloCard() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    alert(`Hello ${inputRef.current?.value || "there"}!`);
  };
  return (
    <div className="flex justify-center p-4">
      <WiredCard elevation={5}>
        <h1 className="text-xl mb-4">wired-elements demo</h1>
        <section className="flex flex-col gap-4">
          <WiredInput placeholder="your name" ref={inputRef} />
          <WiredButton elevation={2} onClick={handleClick}>
            Submit
          </WiredButton>
        </section>
      </WiredCard>
    </div>
  );
}
