<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  id: number | undefined
  img: string[]
  title: string
  body: string
  stacks: string[]
  category: string
  link?: string
}>()

const cardModal = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <article class="project-card">
    <figure class="project-card-image">
      <img
        :src="`/img/projects/${props.img[0]}`"
        :alt="props.title"
        width="720"
        height="480"
        loading="lazy"
      />
      <span class="project-category">{{ props.category }}</span>
    </figure>
    <div class="project-card-content">
      <h3 class="project-card-title">{{ props.title }}</h3>
      <p class="project-card-description">{{ props.body }}</p>
      <div class="project-stack" aria-label="Technologies used">
        <span class="project-stack-item" v-for="(stack, i) in props.stacks" :key="i">
          {{ stack }}
        </span>
      </div>
      <button class="project-detail-button" type="button" @click="cardModal?.showModal()">
        View project details
      </button>
    </div>
  </article>

  <dialog ref="cardModal" class="modal project-dialog" @click.self="cardModal?.close()">
    <div class="modal-box project-dialog-box">
      <header class="project-dialog-header">
        <div>
          <p class="project-category-text">{{ props.category }}</p>
          <h2 class="text-2xl sm:text-3xl font-bold">{{ props.title }}</h2>
        </div>
        <form method="dialog">
          <button class="dialog-close" aria-label="Close project details">Close</button>
        </form>
      </header>

      <!-- carousel dinamis berdasarkan jumlah gambar -->
      <div v-if="props.img.length > 0" class="carousel project-dialog-carousel">
        <div
          v-for="(image, index) in props.img"
          :key="index"
          :id="`slide-${props.id}-${index}`"
          class="carousel-item relative w-full"
        >
          <img
            :src="`/img/projects/${image}`"
            :alt="`${props.title} - image ${index + 1}`"
            class="project-dialog-image"
          />

          <!-- navigasi carousel -->
          <div
            class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
          >
            <a
              :href="`#slide-${props.id}-${index === 0 ? props.img.length - 1 : index - 1}`"
              class="carousel-control"
              :aria-label="`Previous image for ${props.title}`"
            >
              <span aria-hidden="true">‹</span>
            </a>
            <a
              :href="`#slide-${props.id}-${index === props.img.length - 1 ? 0 : index + 1}`"
              class="carousel-control"
              :aria-label="`Next image for ${props.title}`"
            >
              <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </div>

      <!-- fallback jika tidak ada gambar -->
      <div v-else class="project-image-empty">
        <span class="text-base-content/60">No image available</span>
      </div>

      <!-- deskripsi dan tech stack -->
      <div class="project-dialog-copy">
        <p>{{ props.body }}</p>
        <div class="project-stack project-dialog-stack" aria-label="Technologies used">
          <span class="project-stack-item" v-for="(stack, i) in props.stacks" :key="i">
            {{ stack }}
          </span>
        </div>
      </div>

      <footer class="project-dialog-footer">
        <a v-if="props.link" :href="props.link" class="project-source-link" target="_blank" rel="noopener noreferrer">
          View source on GitHub
        </a>
      </footer>
    </div>
  </dialog>
</template>

<style scoped>
.project-card {
  display: flex;
  width: 100%;
  max-width: 25rem;
  min-height: 100%;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgb(17 24 39 / 10%);
  border-radius: 0.75rem;
  background: #fff;
  transition: border-color 180ms ease, transform 180ms ease;
}

.project-card:hover { border-color: rgb(79 70 229 / 45%); transform: translateY(-3px); }
.project-card-image { position: relative; overflow: hidden; aspect-ratio: 3 / 2; background: #e5e7eb; }
.project-card-image img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform 250ms ease; }
.project-card:hover .project-card-image img { transform: scale(1.025); }
.project-category, .project-category-text { color: #4338ca; font-size: 0.75rem; font-weight: 700; }
.project-category { position: absolute; inset: 0.85rem auto auto 0.85rem; padding: 0.35rem 0.65rem; border-radius: 0.25rem; background: #fff; }
.project-card-content { display: flex; flex: 1; flex-direction: column; align-items: flex-start; padding: 1.25rem; }
.project-card-title { color: #111827; font-size: 1.2rem; font-weight: 700; line-height: 1.25; }
.project-card-description { display: -webkit-box; overflow: hidden; margin-top: 0.65rem; color: #4b5563; line-height: 1.55; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }
.project-stack { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-top: 1rem; }
.project-stack-item { padding: 0.3rem 0.55rem; border-radius: 0.25rem; background: #eef2ff; color: #3730a3; font-size: 0.75rem; line-height: 1.3; }
.project-detail-button, .project-close-button { min-height: 2.75rem; padding: 0.65rem 0.9rem; border: 0; border-radius: 0.35rem; background: #111827; color: #fff; font-weight: 600; cursor: pointer; }
.project-detail-button { margin-top: auto; padding-top: 1rem; background: transparent; color: #4338ca; text-decoration: underline; text-underline-offset: 0.2em; }
.project-detail-button:hover, .project-source-link:hover { color: #312e81; }
.project-dialog { padding: 1rem; background: rgb(17 24 39 / 55%); }
.project-dialog-box { width: min(100%, 60rem); max-width: 60rem; max-height: min(90vh, 56rem); overflow-y: auto; padding: clamp(1.2rem, 4vw, 2rem); border-radius: 0.75rem; background: #fff; color: #111827; }
.project-dialog-header, .project-dialog-footer { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.project-dialog-header { margin-bottom: 1.25rem; }
.project-category-text { margin-bottom: 0.3rem; }
.dialog-close { min-height: 2.75rem; padding: 0.55rem 0.75rem; border: 1px solid rgb(17 24 39 / 16%); border-radius: 0.35rem; background: #fff; color: #111827; cursor: pointer; }
.project-dialog-carousel { width: 100%; overflow: hidden; background: #f3f4f6; }
.project-dialog-image { display: block; width: 100%; height: clamp(15rem, 48vw, 34rem); object-fit: contain; background: #f3f4f6; }
.carousel-control { display: grid; width: 2.75rem; height: 2.75rem; place-items: center; border: 0; border-radius: 50%; background: #fff; color: #111827; font-size: 1.8rem; line-height: 1; cursor: pointer; }
.project-image-empty { display: grid; min-height: 12rem; place-items: center; background: #f3f4f6; color: #4b5563; }
.project-dialog-copy { margin-top: 1.25rem; color: #374151; line-height: 1.65; }
.project-dialog-stack { margin-top: 1rem; }
.project-dialog-footer { margin-top: 1.5rem; }
.project-source-link { color: #4338ca; text-decoration: underline; text-underline-offset: 0.2em; }

:where(.project-card, .project-dialog-box) :focus-visible { outline: 3px solid #4f46e5; outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) {
  .project-card, .project-card-image img { transition: none; }
}
</style>
