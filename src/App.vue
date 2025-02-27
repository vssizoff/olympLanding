<script setup lang="ts">
import ParticlesBg from "@/components/ParticlesBg.vue";
import {computed, ref} from "vue";
import {useColorMode} from "@vueuse/core";
import LetterPullup from "@/components/LetterPullup.vue";
import RippleButton from "@/components/RippleButton.vue";
import {InputText, FloatLabel, Panel} from "primevue";

const isDark = computed(() => useColorMode().value == "dark");
const name = ref("");

function matchMedia(query: string) {
  return window.matchMedia(query).matches;
}
</script>

<template>
  <div
      class="relative flex h-full w-full flex-col items-center justify-center bg-background overflow-hidden"
  >
    <div class="content z-10">
      <div class="first">
        <template v-if="matchMedia('(width >= 800px)')">
          <LetterPullup words="Устная математическая олимпиада" :class="`text-center text-white text ${$style.text}`"/>
        </template>
        <template v-else-if="matchMedia('(width >= 520px)')">
          <LetterPullup words="Устная математическая" :class="`text-center text-white text ${$style.text}`"/>
          <LetterPullup words="олимпиада" :class="`text-center text-white text ${$style.text}`"/>
        </template>
        <template v-else>
          <LetterPullup words="Устная" :class="`text-center text-white text ${$style.text}`"/>
          <LetterPullup words="математическая" :class="`text-center text-white text ${$style.text}`"/>
          <LetterPullup words="олимпиада" :class="`text-center text-white text ${$style.text}`"/>
        </template>
        <LetterPullup words="для 5 классов школы 171" class="text-white"/>
        <RippleButton class="button" @click="$refs.formRef.scrollIntoView({behavior: 'smooth'})">Регистрация</RippleButton>
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
              <InputText id="letter" v-model="name"/>
              <label for="letter">Буква класса</label>
            </FloatLabel>
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
  </div>
</template>

<style module>
.text {
  font-family: "Comfortaa", serif;

  
  @media (width >= 1700px) {
    font-size: 80px;
  }

  @media (1250px <= width < 1700px) {
    font-size: 60px;
  }

  @media (1000px <= width < 1250px) {
    font-size: 48px;
  }
}

.form {
  display: inline;
}
</style>

<style>
html, body, #app {
  height: 100%;
}
</style>

<style scoped>
.content {
  width: 100%;
  overflow: scroll;
  text-align: center;
}

.button {
  font-family: "Comfortaa", serif;
  font-size: 48px;
  color: white;
  background-color: #000;
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