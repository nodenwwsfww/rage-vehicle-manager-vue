<template>
    <div v-if="audioStream && audioStream.status && audioStream.id">
        <iframe id="audio-stream" width="420" height="345" style="display: none" :src="`https://www.youtube.com/embed/${audioStream.id}?autoplay=1&controls=0`">
        </iframe>
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