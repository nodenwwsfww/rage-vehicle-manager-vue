<template>
    <div v-if="error && error.text" id="error">
        <div class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Ошибка</h5>
                        <button type="button" class="btn-close" aria-label="Close"
                            v-on:click="removeError"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p>{{error.text}}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            v-on:click="removeError"
                        >Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            error() {
                return this.$store.getters.getErrorData;
            }
        },
        methods: {
            removeError() {
                this.$store.commit('setError', null);
            }
        }
    }
</script>

<style scoped>
    .modal {
        display: inherit;
    }
</style>