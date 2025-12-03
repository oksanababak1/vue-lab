<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import OnboardingCard from '@/components/OnboardingCard.vue'

const router = useRouter()
const currentSlide = ref(0)

const slides = [
  {
    title: 'MEET NEW PEOPLE',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    illustration: '👥',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'CHAT WITH EASE',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    illustration: '💬',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'FIND YOUR MATCH',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    illustration: '❤️',
    bgColor: 'bg-pink-50',
  },
]

const nextSlide = () => {
  if (currentSlide.value < slides.length - 1) {
    currentSlide.value++
  } else {
    router.push('/auth')
  }
}
</script>

<template>
  <div @click="nextSlide" class="cursor-pointer">
    <OnboardingCard
      :title="slides[currentSlide].title"
      :description="slides[currentSlide].description"
      :illustration="slides[currentSlide].illustration"
      :bgColor="slides[currentSlide].bgColor"
    />
  </div>
</template>
