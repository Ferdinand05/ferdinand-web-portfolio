<script setup lang="ts"></script>

<template>
  <div class="max-w-6xl mx-auto px-6">
    <p class="activity-label text-center md:text-left">TOOLKIT</p>
    <h2 class="text-3xl md:text-4xl font-bold mb-2 font-sans text-center md:text-left">
      Technologies Behind the
      <span class="font-playfair italic text-indigo-600"> Solutions </span>
    </h2>
    <p class="font-light text-gray-600 text-center md:text-left max-w-2xl">
      The languages, frameworks, and tools I use to build web applications.
    </p>
    <div class="flex flex-wrap gap-3 mt-8 justify-center md:justify-normal">
      <div
        class="skill-chip"
      >
        <i class="devicon-php-plain colored text-3xl"></i> PHP
      </div>
      <div
        class="skill-chip"
      >
        <i class="devicon-laravel-original colored text-xl"></i> Laravel
      </div>
      <div
        class="skill-chip"
      >
        <i class="devicon-javascript-plain colored text-lg"></i> Javascript
      </div>
      <div
        class="skill-chip"
      >
        <i class="devicon-typescript-plain colored text-lg"></i>
        Typescript
      </div>
      <div
        class="skill-chip"
      >
        <i class="devicon-tailwindcss-original colored text-lg"></i>
        TailwindCSS
      </div>
      <div
        class="skill-chip"
      >
        <i class="devicon-vuejs-plain colored text-lg"></i>
        Vue.js
      </div>
      <div
        class="skill-chip"
      >
        <i class="devicon-express-original colored text-lg"></i>
        Express.js
      </div>
      <div
        class="skill-chip"
      >
        <i class="devicon-mysql-plain-wordmark colored text-2xl"></i>
        MySQL
      </div>
      <div
        class="skill-chip"
      >
        <i class="devicon-postgresql-plain colored text-xl"></i> PostgreSQL
      </div>
      <div
        class="skill-chip"
      >
        <i class="devicon-docker-plain colored text-xl"></i>
        Docker
      </div>
      <div
        class="skill-chip"
      >
        <i class="devicon-git-plain colored text-xl"></i>
        Git
      </div>
      <div
        class="skill-chip"
      >
        <i class="devicon-go-original-wordmark colored text-xl"></i>
        Go
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-chip {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.9rem;
  border: 1px solid rgb(17 24 39 / 12%);
  border-radius: 0.5rem;
  background: #fff;
  color: #374151;
  font-size: 0.95rem;
  transition: border-color 160ms ease, transform 160ms ease;
}

.skill-chip:hover {
  border-color: #4f46e5;
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .skill-chip { transition: none; }
}
</style>
