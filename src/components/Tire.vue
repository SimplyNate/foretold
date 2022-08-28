<template>
    <div class="tireContainer">
        <div class="tire" ref="tire"></div>
        <div class="slipContainer">
            <div class="grip" ref="slipRatio"></div>
            <div class="grip" ref="slipAngle" style="margin-left: 3px; margin-right: 3px;"></div>
            <div class="grip" ref="slipCombined"></div>
        </div>
        <div class="slipContainer">
            <div class="traction-label">SR</div>
            <div class="traction-label">SA</div>
            <div class="traction-label">SC</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
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
        compound: {
            type: String,
            default: 'Semi-Slick/Slick',
        }
    },
    computed: {
        tempString(): number {
            return Math.floor(this.temperature);
        },
        tireCompoundId(): string {
            return this.compound === 'Semi-Slick/Slick' ? 'semiSlick' : 'other';
        },
    },
    data() {
        return {
            semiSlick: {
                blue: {
                    min: 160,
                    max: 185,
                },
                green: {
                    minUp: 135,
                    maxUp: 185,
                    minDown: 210,
                    maxDown: 350,
                },
                red: {
                    min: 185,
                    max: 210,
                }
            },
            other: {
                blue: {
                    min: 120,
                    max: 155,
                },
                green: {
                    minUp: 100,
                    maxUp: 120,
                    minDown: 230,
                    maxDown: 320,
                },
                red: {
                    min: 155,
                    max: 210,
                },
            },
        };
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
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const redNormalized = this.percentInRange(this.temperature, this[this.tireCompoundId].red.min, this[this.tireCompoundId].red.max);
            let greenNormalized;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (this.temperature > this[this.tireCompoundId].red.max) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                greenNormalized = 1 - this.percentInRange(this.temperature, this[this.tireCompoundId].green.minDown, this[this.tireCompoundId].green.maxDown);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                greenNormalized = this.percentInRange(this.temperature, this[this.tireCompoundId].green.minUp, this[this.tireCompoundId].green.maxUp);
            }
            // if (greenNormalized > 1) {
            //     greenNormalized = 1 - (greenNormalized - 1);
            // }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const blueNormalized = 1 - this.percentInRange(this.temperature, this[this.tireCompoundId].blue.min, this[this.tireCompoundId].blue.max);
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
.traction-label {
    width: 33%;
}
</style>
