<script setup lang="ts">
import ParticlesBg from "@/components/ParticlesBg.vue";
import {computed, ref, useTemplateRef} from "vue";
import {useColorMode} from "@vueuse/core";
import LetterPullup from "@/components/LetterPullup.vue";
import RippleButton from "@/components/RippleButton.vue";
import {FloatLabel, InputText, Panel} from "primevue";
import MorphingText from "@/components/MorphingText.vue";
import piSvg from "@/assets/pi.svg"
import ParticleImage from "@/components/ParticleImage.vue";
import ProgressIndicator from "@/components/progressIndicator.vue";
import confetti from "canvas-confetti";
import {reg} from "@/api.js";

const isDark = computed(() => useColorMode().value == "dark");
const name = ref<string | undefined>("");
const letter = ref<string | undefined>("");
const pending = ref(false);
const done = ref(false);
const texts = ref(["π =", "3.14", "1592", "654..."]);
const formRef = useTemplateRef("formRef");

function matchMedia(query: string) {
  return window.matchMedia(query).matches;
}

function scroll() {
  if (formRef.value) formRef.value.scrollIntoView({behavior: 'smooth'});
}

function fireworks() {
  const duration = 5 * 1000; // 5 seconds
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  // Helper function to get a random value between a range
  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);

    // Confetti from left side
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });

    // Confetti from right side
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
}

function sideCannons() {
  const end = Date.now() + 6 * 1000; // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

  // Frame function to trigger confetti cannons
  function frame() {
    if (Date.now() > end) return;

    // Left side confetti cannon
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });

    // Right side confetti cannon
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame); // Keep calling the frame function
  }

  frame();
}

async function submit() {
  if (!name.value?.length || !letter.value?.length) return;
  pending.value = true;
  await reg(name.value, letter.value);
  done.value = true;
  pending.value = false;
  fireworks();
  sideCannons();
}
</script>

<template>
  <div
      class="relative flex h-full w-full flex-col items-center justify-center bg-background overflow-hidden"
  >
    <div class="content z-10">
      <div class="first">
<!--        <template v-if="matchMedia('(width >= 800px)')">-->
<!--          <LetterPullup words="Устная математическая олимпиада" :class="`text-center text-white text ${$style.text}`"/>-->
<!--        </template>-->
<!--        <template v-else-if="matchMedia('(width >= 520px)')">-->
<!--          <LetterPullup words="Устная математическая" :class="`text-center text-white text ${$style.text}`"/>-->
<!--          <LetterPullup words="олимпиада" :class="`text-center text-white text ${$style.text}`"/>-->
<!--        </template>-->
<!--        <template v-else>-->
          <LetterPullup words="Устная" :class="`text-center text-white text ${$style.text}`"/>
          <LetterPullup words="математическая" :class="`text-center text-white text ${$style.text}`"/>
          <LetterPullup words="олимпиада" :class="`text-center text-white text ${$style.text}`"/>
<!--        </template>-->
        <LetterPullup words="для 5 классов школы 171" :class="`text-white ${$style.subtext}`"/>
        <RippleButton class="button" @click="scroll">Регистрация</RippleButton>
      </div>
      <div class="form" ref="formRef">
        <Panel :class="$style.form">
          <template #header>
            <span class="formHeader">Регистрация</span>
          </template>
          <div class="formContent">
            <FloatLabel variant="on">
              <InputText id="name" v-model="name"/>
              <label for="name">ФИО</label>
            </FloatLabel>
            <FloatLabel variant="on">
              <InputText id="letter" v-model="letter" :maxLength="1"/>
              <label for="letter">Буква класса</label>
            </FloatLabel>
            <RippleButton class="formButton" @click="submit">Регистрация</RippleButton>
          </div>
        </Panel>
      </div>
    </div>
    <ParticlesBg
      class="absolute inset-0 z-1"
      :quantity="100"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
<!--    <img :src="piSvg" class="pi"/>-->
    <MorphingText :texts="texts" :class="$style.pi"/>
    <div :class="$style.image">
      <ParticleImage :image-src="piSvg" init-position="misplaced" fade-position="explode"/>
    </div>
    <ProgressIndicator v-if="pending"/>
  </div>
</template>

<style module>
.text {
  font-family: "Comfortaa", serif;

  
  @media (width >= 1000px) {
    font-size: 80px;
  }

  @media (770px <= width < 1000px) {
    font-size: 60px;
  }

  @media (500px <= width < 770px) {
    font-size: 48px;
  }

  @media (width < 500px) {
    font-size: 32px;
  }
}

.subtext {
  font-family: "Comfortaa", serif;
  font-size: 24px;
}

.form {
  display: inline;
}

.pi {
  position: absolute;
  bottom: 80px;
  left: 10px;
  text-align: left;
  font-size: 150px;
  font-family: "Comfortaa", serif;
}

.image {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
}
</style>

<style>
html, body, #app {
  height: 100%;
  overflow-x: hidden;
}
</style>

<style scoped>
.content {
  width: 100%;
  overflow: scroll;
  text-align: center;
  overflow-x: hidden;
}

.button {
  font-family: "Comfortaa", serif;
  font-size: 32px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 40px;
}

.formButton {
  font-family: "Comfortaa", serif;
  font-size: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 40px;
}

.first {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.formHeader {
  font-family: "Comfortaa", serif;
  font-size: 48px;
}

.formContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>