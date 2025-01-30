<script setup>
  const route = useRoute()
  // saving new latest months latest from 3 to 1
  const slides = [{
    id: 1,
    image: "https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/m3.png"
  }, {
    id: 2,
    image: "https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/m2.png"
  }, {
    id: 3,
    image: "https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/m1.png"
  }]
  const currentSlide = ref(3);
  const btnCurrentSlide = (id) => {
    currentSlide.value = id
  }
</script>
<template>
  <div>
    <!-- <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/Monthly%20Calendar.png" 
        class="w-full"/> -->
    <div class="slider-wrapper">
      <div class="slider">
        <div :id="`calendar-${j.id}`" v-for="(j,i) in slides" :key="i" class="calendar" 
        :style="`background-image: url(${j.image});`"></div>
      </div>
      <div class="dots">
        <a :href="`#calendar-${j.id}`" v-for="(j,i) in slides" :key="i" @click="btnCurrentSlide(j.id)" :class="[
                j.id === currentSlide ? 'bg-green-600':'bg-black',
        ]"></a>
      </div>
    </div>
    <p class="mb-10 text-center">Use the arrow keys or dots to navigate</p>
  </div>
</template>
<style lang="scss" scoped>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    background-image: linear-gradient(120deg, #f9f9f9, #f2f2f2);
    font-family: Tahoma, sans-serif;
  }

  .slider-wrapper {
    position: relative;
  }

  .slider {
    --slide-width: 100vw;
    --slide-height: 100vh;
    display: grid;
    grid-auto-flow: column;
    // scroll-snap-type: x mandatory;
    max-width: var(--slide-width);
    border: 5px solid #fff;
    // box-shadow: 0 2px 15px rgba(#000, 0.2), 0 2px 20px rgba(#000, 0.25);
    // overflow-y: hidden;
    overflow-x: hidden;
    scroll-behavior: smooth;
    // -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .calendar {
    scroll-snap-align: start;
    width: var(--slide-width);
    height: var(--slide-height);
    background-size: 100vh;
    background-position: center;
    background-repeat: no-repeat;
  }

  .dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    gap: 15px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      $dots-size: 15px;
      width: $dots-size;
      height: $dots-size;
      border-radius: 50%;
      //   background-color: #000000;
      opacity: 0.75;
      transition: opacity ease 250ms;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }

  .caption {
    display: block;
    margin-top: 25px;
    color: #999;
    letter-spacing: 0.5px;
  }

  @media only screen and (max-width: 600px) {
    .slider {
      --slide-height: 60vh;
    }
    .calendar {
      background-size: 100%;
    }
  }
</style>