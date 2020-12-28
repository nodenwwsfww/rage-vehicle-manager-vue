<template>
  <div class="gui-modals">
    <VehicleManager />
    <Error />
  </div>
</template>

<script>
import VehicleManager from '@/components/Modals/Vehicle/VehicleManagerMenu/VehicleManager';


import Error from '@/components/Modals/Messages/Error';

export default {
  name: "Modals",
  components: {
      VehicleManager,
      Error
  },
};
</script>