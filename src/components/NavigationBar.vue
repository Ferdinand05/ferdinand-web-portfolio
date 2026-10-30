<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
</script>

<template>
  <div class="navbar site-navbar" :class="{ 'is-scrolled': y > 12 }">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="-1"
          class="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl md:px-10 tracking-wide">Ferdinand</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <!-- <a class="btn">Button</a> -->
    </div>
  </div>
</template>

<style scoped>
.site-navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: transparent;
  transition: background-color 180ms ease, backdrop-filter 180ms ease;
}

.site-navbar.is-scrolled {
  background-color: rgb(255 255 255 / 82%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgb(17 24 39 / 8%);
}

@media (prefers-reduced-motion: reduce) {
  .site-navbar { transition: none; }
}
</style>
