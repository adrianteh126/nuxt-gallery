<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center w-100 font-monospace"
  >
    <p class="d-flex flex-wrap gap-3">
      <input
        type="text"
        v-model="caption"
        id="user-caption"
        placeholder="Type something here!"
      />
      <button @click="testTypingEffect">Test Typing Effect</button>
      <button @click="testErasingEffect">Test Erasing Effect</button>
    </p>
    <p class="console">
      <span>C:\</span><span id="caption">{{ typedText }}</span
      ><span id="cursor">{{ cursorVisible ? "|" : " " }}</span>
    </p>
    <p>
      Credit to
      <a
        href="https://codepen.io/stathisg/pen/nayyyy"
        target="_blank"
        class="text-decoration-none"
        style="color: var(--yellow-color)"
        >https://codepen.io/stathisg/pen/nayyyy</a
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caption: "Type something here!",
      captionLength: 0,
      typedText: "",
      cursorVisible: true,
    };
  },
  methods: {
    testTypingEffect() {
      this.caption = this.caption;
      this.type();
    },
    type() {
      this.typedText = this.caption.substring(0, this.captionLength++);
      if (this.captionLength < this.caption.length + 1) {
        setTimeout(this.type, 50);
      } else {
        this.captionLength = 0;
        this.caption = "";
      }
    },
    testErasingEffect() {
      this.caption = this.typedText;
      this.captionLength = this.typedText.length;
      if (this.captionLength > 0) {
        this.erase();
      } else {
        this.typedText = "You didn't write anything to erase, but that's ok!";
        setTimeout(this.testErasingEffect, 1000);
      }
    },
    erase() {
      this.typedText = this.typedText.substring(0, this.captionLength--);
      if (this.captionLength >= 0) {
        setTimeout(this.erase, 50);
      } else {
        this.captionLength = 0;
        this.caption = "";
      }
    },
    cursorAnimation() {
      this.cursorVisible = !this.cursorVisible;
      setTimeout(this.cursorAnimation, 600);
    },
  },
  mounted() {
    setInterval(this.cursorAnimation, 600);
  },
};
</script>

<style scoped></style>
