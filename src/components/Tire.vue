<template>
    <div :class="`tire ${tempString}`"></div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Tire',
    props: {
        temperature: Number,
    },
    computed: {
        tempString() {
            return this.temperature < 200 ? 'cold' :
                this.temperature < 250 ? 'normal' : this.temperature < 300 ? 'warm' : 'hot';
        },
    },
});
</script>

<style scoped>
.tire {
    width: 50px;
    height: 100px;
    border-radius: 10%;
    border: 2px solid whitesmoke;
}
.cold {
    background-color: lightskyblue;
}
.normal {
    background-color: transparent;
}

.warm {
    background-color: goldenrod;
}

.hot {
    background-color: firebrick;
}
</style>
