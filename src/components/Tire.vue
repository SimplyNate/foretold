<template>
    <div class="tireContainer">
        <div class="tire" ref="tire"></div>
        <div class="slipContainer">
            <div class="grip" ref="slipRatio"></div>
            <div class="grip" ref="slipAngle" style="margin-left: 3px; margin-right: 3px;"></div>
            <div class="grip" ref="slipCombined"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Tire',
    props: {
        temperature: {
            type: Number,
            default: 0,
        },
        slipRatio: {
            type: Number,
            default: 0,
        },
        slipAngle: {
            type: Number,
            default: 0,
        },
        slipCombined: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            tempConfig: {
                cold: 160,
                normal: 210,
                hot: 350,
            }
        };
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
    watch: {
        temperature() {
            if (this.temperature > 0) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.$refs.slipRatio.style.backgroundColor = this.gradient(this.temperature, 0, 100);
            }
        },
        slipRatio() {

        },
        slipAngle() {

        },
        slipCombined() {

        },
    },
    methods: {
        gradient(value: number, min: number, max: number) {

        },
    }
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
