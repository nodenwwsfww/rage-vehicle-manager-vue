<template>
  <div class="gui-screen">
    <Modals />
  </div>
</template>

<script>

import Modals from '@/components/Modals.vue' 
 
export default {
  name: "gui",
  components: {
    Modals,
  },
  mounted: function() {    
    // eslint-disable-next-line no-undef
    gui.modals = this.$refs.modals;
  }
};
</script>