import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const counter = useSignal(0);

  return (
    <button
      class=" w-8  text-white bg-blue-500"
      onClick$={() => counter.value++}
    >
      {counter.value}
    </button>
  );
});
