<template>
    <div class="tireContainer">
        <div :class="`tire ${tempString}`"></div>
        <div class="slipContainer">
            <div :class="`grip ${slipRatioString}`"></div>
            <div :class="`grip ${slipAngleString}`" style="margin-left: 3px; margin-right: 3px;"></div>
            <div :class="`grip ${slipCombinedString}`"></div>
        </div>
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
            return this.temperature < 160 ? 'cold' :
                this.temperature < 210 ? 'normal' : this.temperature < 350 ? 'warm' : 'hot';
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
.tireContainer {
    display: flex;
    flex-direction: column;
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
.cool {
    background-color: rgba(135, 206, 250, 50%);
}
.normal {
    background-color: transparent;
}
.mild {
    background-color: rgba(255, 255, 0, 50%);
}
.warm {
    background-color: yellow;
}



.heated {
    background-color: orange;
}

.hot {
    background-color: red;
}
</style>