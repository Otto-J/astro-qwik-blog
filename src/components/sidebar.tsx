import { component$, useSignal } from "@builder.io/qwik";

export const SideBar = component$(() => {
  return (
    <div class="w-full">
      <div class="title text-white py-8 text-center bg-gray-900 flex flex-col">
        <h1 class="text-xl">辛宝的玄酒清谈</h1>
        <p class=" text-sm mt-4">A Solo Place.</p>
      </div>
    </div>
  );
});
