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
import {defineComponent} from 'vue';

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
    computed: {
        tempString() {
            return Math.floor(this.temperature);
        },
    },
    watch: {
        temperature() {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.$refs.tire.style.backgroundColor = this.tireGradient();
        },
        slipRatio() {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.$refs.slipRatio.style.backgroundColor = this.gripGradient(this.slipRatio);
        },
        slipAngle() {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.$refs.slipAngle.style.backgroundColor = this.gripGradient(this.slipAngle);
        },
        slipCombined() {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.$refs.slipCombined.style.backgroundColor = this.gripGradient(this.slipCombined);
        },
    },
    methods: {
        percentInRange(value: number, min: number, max: number): number {
            const proportion =  (value - min) / (max - min);
            return proportion > 1 ? 1 : proportion < 0 ? 0 : proportion;
        },
        tireGradient() {
            /*
            blue = 0
            blue-green = 256
            green = 512
            yellow = 768
            red = 1024
             */
            /*
            current distribution:
              - blue: <= 135F
              - cyan: 160F
              - green (center): 185F
              - yellow: 210F
              - red: >= 350F
             */
            const redNormalized = this.percentInRange(this.temperature, 185, 210);
            // FIX THIS FOR GOING UP AND DOWN
            let greenNormalized;
            if (this.temperature > 210) {
                greenNormalized = 1 - this.percentInRange(this.temperature, 210, 350);
            }
            else {
                greenNormalized = this.percentInRange(this.temperature, 135, 185);
            }
            if (greenNormalized > 1) {
                greenNormalized = 1 - (greenNormalized - 1);
            }
            const blueNormalized = 1 - this.percentInRange(this.temperature, 160, 185);
            const r = 255 * redNormalized;
            const g = 255 * greenNormalized;
            const b = 255 * blueNormalized;
            return `rgba(${r}, ${g}, ${b}, ${1})`;
        },
        blueGradient(value: number, min: number, max: number): string {
            const r = 135;
            const g = 206;
            const b = 250;
            const a = 1 / (value / (max - min));
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        },
        gripGradient(value: number): string {
            /*
            grip distribution:
              - green: 0        0 - 255
              - yellow: 0.5     256 - 5
              - red: 1
             */
            const g = 255 - (value >= 0.5 ? ((value - 0.5) / 0.5) * 255 : 0);
            let r = (value * 2) * 255;
            r = r > 255 ? 255 : r;
            return `rgba(${r}, ${g}, 0, 1)`;
        },
    }
});
</script>

<style scoped>
.tire {
    width: 100%;
    height: 100%;
    border-radius: 15%;
    border: 2px solid whitesmoke;
}
.tireContainer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.slipContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top:2px;
}
.grip {
    width: 33%;
    height: 8px;
    border: 2px solid whitesmoke;
}
</style>
