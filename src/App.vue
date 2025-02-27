<script setup lang="ts">
import ParticlesBg from "@/components/ParticlesBg.vue";
import {computed, ref, useTemplateRef} from "vue";
import {useColorMode} from "@vueuse/core";
import LetterPullup from "@/components/LetterPullup.vue";
import RippleButton from "@/components/RippleButton.vue";
import {FloatLabel, InputText, Panel} from "primevue";
import MorphingText from "@/components/MorphingText.vue";

const isDark = computed(() => useColorMode().value == "dark");
const name = ref("");
const letter = ref("");
const texts = ref(["π =", "3.14", "1592", "654..."]);
const formRef = useTemplateRef("formRef");

function matchMedia(query: string) {
  return window.matchMedia(query).matches;
}

function scroll() {
  if (formRef.value) formRef.value.scrollIntoView({behavior: 'smooth'});
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
              <InputText id="letter" v-model="letter"/>
              <label for="letter">Буква класса</label>
            </FloatLabel>
            <RippleButton class="formButton">Регистрация</RippleButton>
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
  right: 10px;
  text-align: right;
  font-size: 150px;
  font-family: "Comfortaa", serif;
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

@keyframes piAnimate {
  0%, 100% {
    bottom: 0;
    right: 0;
    transform: rotate(0);
  }
  20% {
    bottom: 60vh;
    right: 0;
    transform: rotate(60deg);
  }
  40% {
    bottom: 70vh;
    right: 60vw;
    transform: rotate(60deg);
  }
  60% {
    bottom: 20vh;
    right: 0;
    transform: rotate(60deg);
  }
  80% {
    bottom: 20vh;
    right: 0;
    transform: rotate(60deg);
  }
}

.pi {
  position: absolute;
  height: 30vh;
  z-index: 0;
  animation: piAnimate 2s infinite ease-in-out;
}
</style>