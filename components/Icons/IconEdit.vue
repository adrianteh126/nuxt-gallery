<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
  >
    <path
      d="M163 439.573l-90.569-90.569L322.78 98.656l90.57 90.569z"
      :fill="fill"
    ></path>
    <path
      d="M471.723 88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304 1.85l-45.202 45.203 90.569 90.568 45.202-45.202c12.743-12.746 13.572-32.582 1.85-44.305z"
      :fill="fill"
    ></path>
    <path d="M64.021 363.252L32 480l116.737-32.021z" :fill="fill"></path>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IonEdit',
  props: {
    width: {
      type: String,
      default: '0.75em'
    },
    height: {
      type: String,
      default: '0.75em'
    },
    fill: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
