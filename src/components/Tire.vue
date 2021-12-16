<template>
    <div :class="`tire ${tempString}`"></div>
    <div class="slipContainer">
        <div :class="`grip ${slipRatioString}`"></div>
        <div :class="`grip ${slipAngleString}`" style="margin-left: 3px; margin-right: 3px;"></div>
        <div :class="`grip ${slipCombinedString}`"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Tire',
    props: {
        temperature: Number,
        slipRatio: Number,
        slipAngle: Number,
        slipCombined: Number,
    },
    computed: {
        tempString() {
            return this.temperature < 200 ? 'cold' :
                this.temperature < 250 ? 'normal' : this.temperature < 300 ? 'warm' : 'hot';
        },
        slipRatioString() {
            return this.slipRatio < .9 ? 'normal' :
                this.slipRatio < 1 ? 'warm' : 'hot';
        },
        slipAngleString() {
            return this.slipAngle < .9 ? 'normal' :
                this.slipAngle < 1 ? 'warm' : 'hot';
        },
        slipCombinedString() {
            return this.slipCombined < .9 ? 'normal' :
                this.slipCombined < 1 ? 'warm' : 'hot';
        },
    },
});
</script>

<style scoped>
.tire {
    width: 60px;
    height: 100px;
    border-radius: 15%;
    border: 2px solid whitesmoke;
}
.slipContainer {
    display: flex;
    flex-direction: row;
    margin-top:2px;
}
.grip {
    width: 16px;
    height: 8px;
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
