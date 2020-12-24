<template>
    <div>
        <div id="vehicle-function" v-for="f of vehicleFunctionsData" :key="f.id">
            <p v-if="f.status" :id="f.htmlID" class="func" :class="focusFunctionId === f.id ? 'focus-function' : ''">
                {{f.name}}<span class="turn-status turned-on">ВКЛ</span>
            </p>
            <p v-else :id="f.htmlID" class="func" :class="focusFunctionId === f.id ? 'focus-function' : ''">{{f.name}}<span
                    class="turn-status turned-off">ВЫКЛ</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            'vehicleFunctionsData': {
                type: Array,
                required: true,
            },
            'focusFunctionId': {
                type: Number,
                required: true,
            }
        },
    }
</script>

<style>
    .turned-on {
        color: #49FF33;
    }

    .turned-off {
        color: red;
    }

    .focus-function {
         box-shadow: 400px 0 0 0 rgba(0,0,0,.3) inset;
    }

    .turn-status {
        position: relative;
        float: right;
        margin-right: 20px;
    }

    .func {
        color: white;
        font-family: Hacked-Kerx;
        line-height: 10px;
        margin-left: 20px;
    }
</style>