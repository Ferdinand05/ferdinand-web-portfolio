<script lang="ts" setup>
import HomeCard from '@/components/HomeCard.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import type { IHomeCard } from '@/types'

const cards: IHomeCard[] = [
  {
    img: 'trendigo.jpg',
    title: 'Trendigo',
    body: 'E-commerce website project, integrated with Midtrans(Payment), Raja Ongkir(Shiping cost calculation), and WhatsApp messaging',
    stacks: ['Vue.js', 'Laravel', 'Inertia', 'MySql'],
    category: 'Web Apps',
  },
  {
    img: 'hrms.jpg',
    title: 'Human Resource Management System',
    body: 'HRMS project, with an in/out attendance system with GPS tracking, selfie capture. Manage employees, salaries, payroll, and leave.',
    stacks: ['Vue.js', 'Laravel REST API', 'MySql'],
    category: 'Dashboards',
  },
]
</script>

<template>
  <main class="">
    <section style="background-image: url('img/bg2.png')">
      <NavigationBar />

      <!-- HERO -->
      <section class="min-h-screen flex items-center">
        <div class="max-w-6xl mx-auto px-6 w-full text-center md:text-left">
          <div class="badge badge-soft badge-success mb-5">• Available for work</div>

          <!-- Headline -->
          <h1
            class="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-gray-900 mb-6 text-balance"
          >
            I turn ideas and problems into
            <span class="text-indigo-600 font-playfair italic"> digital solutions </span>
          </h1>

          <!-- Subheadline -->
          <div class="my-8">
            <span class="text-lg text-gray-600 max-w-2xl font-light">
              Jakarta-based Fullstack Web Developer building practical digital solutions for
              <span class="text-rotate">
                <span class="font-normal">
                  <span class="bg-teal-200 text-teal-800 px-2">Startups</span>
                  <span class="bg-red-200 text-red-800 px-2">Businesses</span>
                  <span class="bg-blue-200 text-blue-800 px-2">Product teams</span>
                </span>
              </span>
            </span>
          </div>

          <!-- CTA -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#projects" class="btn btn-neutral"> View Projects </a>
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-outline w-full">Contact Me</div>
              <ul
                tabindex="-1"
                class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>
                    <img
                      width="21"
                      height="21"
                      src="https://img.icons8.com/fluency/48/instagram-new.png"
                      alt="instagram-new"
                    />
                    Instagram</a
                  >
                </li>
                <li>
                  <a
                    ><img
                      width="21"
                      height="21"
                      src="https://img.icons8.com/color/48/linkedin.png"
                      alt="linkedin"
                    />
                    LinkedIn</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="pb-20 bg-gray-100 pt-20">
      <div class="max-w-6xl mx-auto px-6 w-full text-left">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 font-sans">
          Selected
          <span class="font-playfair italic text-indigo-600"> Solutions </span>
        </h2>

        <div class="flex flex-wrap gap-3 mb-10">
          <button
            class="badge badge-soft badge-neutral btn font-normal text-gray-700 hover:border-gray-400"
          >
            All
          </button>
          <button
            class="badge badge-soft badge-host btn font-normal text-gray-700 hover:border-gray-400"
          >
            Web Apps
          </button>
          <button
            class="badge badge-soft badge-host btn font-normal text-gray-700 hover:border-gray-400"
          >
            Landing Pages
          </button>
          <button
            class="badge badge-soft badge-host btn font-normal text-gray-700 hover:border-gray-400"
          >
            Dashboards
          </button>
        </div>

        <!-- cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8 md:gap-y-0 place-items-center">
          <!-- card -->
          <HomeCard
            v-for="(card, i) in cards"
            :key="i"
            :category="card.category ?? ''"
            :img="card.img"
            :title="card.title"
            :body="card.body"
            :stacks="card.stacks"
          />
        </div>
      </div>
    </section>
  </main>
</template>
