<template>
  <div class="gui-screen">
    <h1>Hud page</h1>
    <Modals />
  </div>
</template>

<script>

import Modals from '@/components/Modals' 
 
export default {
  name: "gui",
  components: {
    Modals,
  },
};
</script>