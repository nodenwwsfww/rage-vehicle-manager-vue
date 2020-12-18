<template>
    <div>
        <div id="vehicle-functions-list" v-for="f of vehicleFunctionsData" :key="f.id">
            <p v-if="f.status" :id="f.htmlID" class="function">{{f.name}}<span class="turn-status .turned-on">ВКЛ</span>
            </p>
            <p v-else :id="f.htmlID" class="function">{{f.name}}<span class="turn-status .turned-off">ВЫКЛ</span></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'vehicleFunctionsData': {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>
.turned-on {
    color: #49FF33;
}

.turned-off {
    color: red;
}
</style>