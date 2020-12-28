<template>
    <div class="popup-overlay">
        <div class="popup">
            <div class="content">
                <h1 class="header">Auto Audio</h1>
            
                <p class="tip-message" style="color: #5e93c0;">Ссылка должна указывать на аудио-файл, в обычном формате: https://computerhope.com/jargon/m/example.mp3</p>

                <div class="wrapper">
                    <div class="input-link-overlay">
                        <input type="text" class="form-control" id="link-input" placeholder="ссылка на аудио" />
                    </div>

                    <div class="buttons">
                        <button type="button" class="btn btn-primary btn-1"
                            v-on:click="audioLinkHandler"
                        
                        >Запустить</button>
                        <button type="button" class="btn btn-primary btn-2"
                            v-on:click="returnBack"

                        >Назад</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        computed: {

            activeModal() {
                return this.$store.getters.getActiveModal;
            },

            modalData() {
                return this.$store.getters.getActiveModalData;
            },


        },

        data() {
            return {
                audioLink: '',
                audio: null,
            }
        },

        methods: {
            audioLinkHandler() {
                let link = document.querySelector('#link-input')?.value;
                link = link.trim();
                if (!link || link.length < 6) return;

                try {
                    link = new URL(link);
                } catch(err) {
                    this.$store.commit('setError', 'Некорректная ссылка на аудио');
                    console.log('error');
                    return;
                }

                this.audioLink = link;
                this.startAudioStreamInBrowser();
            },

            startAudioStreamInBrowser() {
                this.audio = new Audio(this.audioLink);
                this.audio.addEventListener('canplaythrough', () => {
                    this.audio.play();
                });

            },

            returnBack() {

            },
        }
    }
</script>


<style scoped>
    @font-face {
        font-family: Roboto;
        src: url('~@/assets/fonts/Roboto-Regular.ttf');
        font-weight: 100;
    }

    .popup-overlay {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


    .tip-message {
        font-family: Roboto;
        font-size: 18px;
    }
    .popup {
        display: inline-block;
        top: 50%;
        width: 450px;
        height: 370px;
        vertical-align: middle;
        border-radius: 10px;
        background-color: #21272E;
    }


    .content {
        justify-content: center;
        align-items: center;
        margin-top: auto;
        margin-left: 20px;
    }

    body {
        font-family: Roboto;
        text-transform: uppercase;
        font-size: 24px;
    }

    .header {
        color: white;
        text-align: center;
        font-family: Roboto;
        font-size: 48px;
        line-height: 70px;
    }

    .input-link-overlay {
        padding-bottom: 25px;
    }

    .wrapper {
        margin-top: 50px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .btn-1 {
        margin-right: 5px;
    }

    .btn-2 {
        width: auto;
        margin-left: 30px;
    }



</style>