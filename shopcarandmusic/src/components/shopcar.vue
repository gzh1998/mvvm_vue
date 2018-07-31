<template>
  <div class="wrapper">
    <header>
      <headers/>
    </header>
    <section>
      <sections/>
    </section>
  </div>
</template>

<script>

import headers from "./header.vue"
import sections from "./section.vue"

export default {
  name: '',
  data() {
    return {

    }
  },
  components: {
    headers,
    sections
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: .14rem;
}

html,
body,
.wrapper {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

html {
  font-size: 625%;
}

a {
  text-decoration: none;
  color: #000;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

ul li,
ol li {
  list-style: none;
}

header {
  width: 100%;
  height: .4rem;
  position: fixed;
  top: 0;
  left: 0;
}

section {
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  margin-top: .4rem;
}
</style>
