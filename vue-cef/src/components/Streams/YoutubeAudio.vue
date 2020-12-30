<template>
    <div v-if="audioStream && audioStream.status && audioStream.id">
        <p>Audio on: {{audioStream.link}}</p>
        <iframe width="560" height="315" frameborder="0" style="display: none;" :src ="`https://www.youtube.com/embed/${audioStream.id}?autoplay=1&controls=0`" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    computed: {
        audioStream() {
             return this.$store.getters.getAudioStreamData;
        },
    },
}
</script>