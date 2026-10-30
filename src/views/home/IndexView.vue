<script lang="ts" setup>
import AnimatedContent from '@/component/AnimatedContent/AnimatedContent.vue'
import DecryptedText from '@/component/DecryptedText/DecryptedText.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HomeCard from '@/components/HomeCard.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import SkillSection from '@/components/SkillSection.vue'
import type { IHomeCard } from '@/types'
import { fire, shoot } from '@/utils/confetti'
import { useWindowScroll } from '@vueuse/core'
import { onMounted, ref, watch } from 'vue'
import { cards } from './Card'

const { y } = useWindowScroll()
const hasFired = ref<boolean>(false)
watch(y, (val) => {
  if (val >= 550 && hasFired.value == false) {
    hasFired.value = true

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    })

    fire(0.2, {
      spread: 60,
    })

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    })

    setTimeout(() => {
      shoot()
    }, 1000)
  }
})

const selectedProjects = ref<IHomeCard[]>(cards)
const activeProjectFilter = ref('All')
type ContributionDay = { date: string; count: number; level: number }
const contributionTotal = ref<number | null>(null)
const contributionDays = ref<ContributionDay[]>([])
const contributionError = ref(false)
const contributionLoading = ref(true)
const contributionTooltip = ref('')

onMounted(async () => {
  try {
    const response = await fetch('https://github-contributions-api.jogruber.de/v4/Ferdinand05?y=last')
    if (!response.ok) throw new Error('GitHub contributions request failed')
    const data: { total?: { lastYear?: number }; contributions?: ContributionDay[] } = await response.json()
    if (typeof data.total?.lastYear !== 'number' || !Array.isArray(data.contributions)) {
      throw new Error('Contribution data missing')
    }
    contributionTotal.value = data.total.lastYear
    contributionDays.value = data.contributions
  } catch {
    contributionError.value = true
  } finally {
    contributionLoading.value = false
  }
})

function filterProjects(category: string) {
  activeProjectFilter.value = category
  selectedProjects.value = category === 'All' ? cards : cards.filter((project) => project.category === category)
}

function formatContributionDate(date: string) {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
}

function showContribution(day: ContributionDay) {
  contributionTooltip.value = `${formatContributionDate(day.date)} · ${day.count} ${day.count === 1 ? 'contribution' : 'contributions'}`
}
</script>

<template>
  <div ref="el" />
  <main class="">
    <NavigationBar />
    <section style="background-image: url('img/bg2.png')" id="home">
      <!-- HERO -->
      <section class="min-h-screen flex items-center">
        <div class="max-w-6xl mx-auto px-6 w-full text-center md:text-left">
          <div class="badge badge-soft badge-success mb-5">• Available for work</div>
          <!-- Headline -->
          <h1
            class="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-gray-900 mb-6 text-balance"
          >
            <!-- bagian 1 -->
            <DecryptedText
              text="I turn ideas and problems into"
              :speed="100"
              :max-iterations="12"
              :sequential="true"
              reveal-direction="start"
              :use-original-chars-only="true"
              animate-on="view"
              class-name="text-gray-900"
              parent-class-name="inline"
              encrypted-class-name="text-gray-900"
            />
            <DecryptedText
              text="digital solutions"
              :speed="130"
              :max-iterations="12"
              :sequential="true"
              reveal-direction="start"
              :use-original-chars-only="true"
              animate-on="view"
              class-name="text-indigo-600 font-playfair italic"
              encrypted-class-name="text-indigo-600  font-playfair"
            />
          </h1>

          <!-- Subheadline -->
          <div class="my-8">
            <span class="md:text-lg text-gray-600 max-w-2xl font-light">
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
                class="dropdown-content menu bg-base-100 rounded-box z-1 w-full md:w-44 p-2 shadow-sm"
              >
                <li>
                  <a href="https://www.instagram.com/_ferdinandk">
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
                  <a href="https://www.linkedin.com/in/ferdiinand/"
                    ><img
                      width="21"
                      height="21"
                      src="https://img.icons8.com/color/48/linkedin.png"
                      alt="linkedin"
                    />
                    LinkedIn</a
                  >
                </li>
                <li>
                  <a href="mailto:ferdiinand05@gmail.com"
                    ><img
                      width="21"
                      height="21"
                      src="https://img.icons8.com/fluency/48/new-post.png"
                      alt="new-post"
                    />
                    Email</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>

    <AnimatedContent
      :distance="100"
      direction="vertical"
      :reverse="false"
      :duration="1.2"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.2"
      :delay="0"
    >
        <!-- PROJECTS -->

      <section id="projects" class="pb-20 bg-base-200 pt-20">
        <div class="max-w-6xl mx-auto px-6 w-full text-left">
          <h2 class="text-3xl md:text-4xl font-bold mb-2 font-sans text-center md:text-left">
            Selected <span class="font-playfair italic text-indigo-600">Solutions</span>
          </h2>
          <p class="section-description mb-8 text-center md:text-left">
            A selection of web apps, landing pages, and dashboards I have built.
          </p>

          <div class="project-filters mb-10" role="group" aria-label="Filter projects by category">
            <button
              v-for="category in ['All', 'Web Apps', 'Landing Pages', 'Dashboards']"
              :key="category"
              type="button"
              class="project-filter"
              :class="{ 'is-active': activeProjectFilter === category }"
              :aria-pressed="activeProjectFilter === category"
              @click="filterProjects(category)"
            >
              {{ category }}
            </button>
          </div>

          <!-- cards -->
          <div
            v-if="selectedProjects.length >= 1"
            class="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8 md:gap-y-4 place-items-center"
          >
            <!-- card -->
            <HomeCard
              v-for="card in selectedProjects"
              :id="card.id"
              :key="card.id"
              :category="card.category ?? ''"
              :img="card.img"
              :title="card.title"
              :body="card.body"
              :stacks="card.stacks"
              :link="card.link"
            />
          </div>

          <div v-else class="italic text-gray-700 md:text-lg text-center md:text-left">
            No projects found in this category.
          </div>
        </div>
      </section>
    </AnimatedContent>

    <!-- skills -->
    <AnimatedContent
      :distance="100"
      direction="vertical"
      :reverse="false"
      :duration="1.2"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.2"
      :delay="0"
    >
      <section class="py-20" id="skills">
        <SkillSection />
        <!-- cta -->
      </section>
    </AnimatedContent>

    <AnimatedContent
      :distance="70"
      direction="vertical"
      :reverse="false"
      :duration="1"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.15"
      :delay="0"
    >
      <section id="activity" class="activity-section py-20">
        <div class="activity-container mx-auto px-6">
          <div class="activity-heading">
            <h2 class="text-3xl md:text-4xl font-bold">
              Code in <span>motion</span>
            </h2>
            <p class="section-description">Recent coding time and contributions from GitHub and WakaTime.</p>
          </div>
          <div class="activity-stack">
            <article class="activity-panel github-panel">
              <div class="activity-panel-heading">
                <div>
                  <p class="activity-label">GITHUB</p>
                  <h3>12 months of contributions</h3>
                  <p v-if="contributionTotal !== null" class="contribution-total" aria-live="polite">
                    <strong>{{ contributionTotal.toLocaleString() }}</strong>
                    <span>contributions</span>
                  </p>
                  <p v-else-if="contributionLoading" class="contribution-total" role="status">Loading total…</p>
                  <p v-else-if="contributionError" class="contribution-total contribution-error" role="status">
                    Total unavailable. View the profile for current activity.
                  </p>
                </div>
                <a href="https://github.com/Ferdinand05" target="_blank" rel="noopener noreferrer" aria-label="View Ferdinand05 on GitHub">Ferdinand05 ↗</a>
              </div>
              <div v-if="contributionDays.length" class="contribution-calendar" aria-label="Daily GitHub contributions over the past year">
                <div class="contribution-grid">
                  <button
                    v-for="day in contributionDays"
                    :key="day.date"
                    type="button"
                    class="contribution-day"
                    :class="`level-${Math.min(4, Math.max(0, day.level))}`"
                    :aria-label="`${formatContributionDate(day.date)}: ${day.count} ${day.count === 1 ? 'contribution' : 'contributions'}`"
                    :title="formatContributionDate(day.date)"
                  />
                </div>
              </div>
              <p v-else-if="contributionLoading" class="activity-caption" role="status">Loading contribution calendar…</p>
              <p v-else class="activity-caption" role="status">Contribution calendar unavailable. Visit the GitHub profile to see activity.</p>
              <p class="activity-caption">Daily contributions over the past year</p>
            </article>
            <article class="activity-panel wakatime-panel">
              <div class="activity-panel-heading">
                <div>
                  <p class="activity-label">WAKATIME</p>
                  <h3>Time spent building</h3>
                </div>
                <a href="https://wakatime.com/@55805ae7-b2dd-4c18-ab75-0d56ccfe4c6e" target="_blank" rel="noopener noreferrer">WakaTime ↗</a>
              </div>
              <div class="wakatime-charts">
                <figure class="wakatime-embed">
                  <iframe
                    src="https://wakatime.com/share/@55805ae7-b2dd-4c18-ab75-0d56ccfe4c6e/16cfd89a-59ef-4ed5-a2ea-189b239b39d3.svg"
                    title="WakaTime coding activity"
                    loading="lazy"
                    referrerpolicy="no-referrer"
                  />
                </figure>
                <figure class="wakatime-embed language-stats-embed">
                  <iframe
                    src="https://wakatime.com/share/@55805ae7-b2dd-4c18-ab75-0d56ccfe4c6e/cc6297f4-de88-4acd-bace-575c6581c0f2.svg"
                    title="WakaTime language statistics"
                    loading="lazy"
                    referrerpolicy="no-referrer"
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
      </section>
    </AnimatedContent>
    <section>
      <FooterComponent />
    </section>
  </main>
</template>
