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
            },
            tractionConfig: {
                low: 0,
                high: 1,
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
                this.$refs.tire.style.backgroundColor = this.tireGradient();
            }
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
        tireGradient() {
            /*
            blue = 0
            blue-green = 256
            green = 512
            yellow = 768
            red = 1024
             */
            // Step 1: Create a uniform distribution between blue - green - red
            /*
            current distribution:
              - blue: <= 135F
              - cyan: 160F
              - green (center): 185F
              - yellow: 210F
              - red: >= 350F

             */
            const normalizedValue = (value - min) / (max - min);
            const totalUniqueColors = 1024;
            const colorValue = totalUniqueColors * normalizedValue;
            let r = 0;
            if (colorValue > 512) {
                r = colorValue - 512;
            }
            r = r > 255 ? 255 : r;
            let g;
            if (colorValue < 768) {
                if (colorValue > 255) {
                    g = 255;
                }
                else {
                    g = colorValue;
                }
            }
            else {
                g = 255 - (colorValue - 768);
            }
            const blueValue = colorValue - 256;
            let b = 255 - (blueValue > 0 ? blueValue : 0);
            b = b < 0 ? 0 : b;
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
