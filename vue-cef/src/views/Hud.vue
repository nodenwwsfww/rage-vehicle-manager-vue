<template>
  <div class="gui-screen">
    <h1>Hud page</h1>
    <Modals />
    <Streams/>
  </div>
</template>

<script>

import Modals from '@/components/Modals'; 
import Streams from '@/components/Streams';
 
export default {
  name: "gui",
  components: {
    Modals,
    Streams,
  },
};
</script>