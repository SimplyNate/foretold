<template>
    <div class="flex-container fullscreen">
        <div class="flex-item controls">
            <div class="flex-container">
                <div class="flex-item">Accelerator</div>
                <progress-bar class="flex-item-2" color="green" :value="telemetry.accelerator" />
            </div>
            <div class="flex-container">
                <div class="flex-item">Brake</div>
                <progress-bar class="flex-item-2" color="red" :value="telemetry.brake" />
            </div>
            <div class="flex-container">
                <div class="flex-item">Clutch</div>
                <progress-bar class="flex-item-2" color="yellow" :value="telemetry.clutch" />
            </div>
            <div class="flex-container">
                <div class="flex-item">Handbrake</div>
                <progress-bar class="flex-item-2" color="blue" :value="telemetry.handbrake" />
            </div>
            <div class="flex-container">
                <div class="flex-item">Steer</div>
                <progress-bar class="flex-item-2" color="green" :value="telemetry.steer" />
            </div>
        </div>
        <div class="flex-item tires">
            <div>normSuspensionTravelFl: {{ telemetry.normSuspensionTravelFl }}</div>
            <div>normSuspensionTravelFr: {{ telemetry.normSuspensionTravelFr }}</div>
            <div>normSuspensionTravelRl: {{ telemetry.normSuspensionTravelRl }}</div>
            <div>normSuspensionTravelRr: {{ telemetry.normSuspensionTravelRr }}</div>
            <div>suspensionTravelMetersFl: {{ telemetry.suspensionTravelMetersFl }}</div>
            <div>suspensionTravelMetersFr: {{ telemetry.suspensionTravelMetersFr }}</div>
            <div>suspensionTravelMetersRl: {{ telemetry.suspensionTravelMetersRl }}</div>
            <div>suspensionTravelMetersRr: {{ telemetry.suspensionTravelMetersRr }}</div>

            <div>tireSlipRatioFl: {{ telemetry.tireSlipRatioFl }}</div>
            <div>tireSlipRatioFr: {{ telemetry.tireSlipRatioFr }}</div>
            <div>tireSlipRatioRl: {{ telemetry.tireSlipRatioRl }}</div>
            <div>tireSlipRatioRr: {{ telemetry.tireSlipRatioRr }}</div>
            <div>wheelRotationSpeedFl: {{ telemetry.wheelRotationSpeedFl }}</div>
            <div>wheelRotationSpeedFr: {{ telemetry.wheelRotationSpeedFr }}</div>
            <div>wheelRotationSpeedRl: {{ telemetry.wheelRotationSpeedRl }}</div>
            <div>wheelRotationSpeedRr: {{ telemetry.wheelRotationSpeedRr }}</div>
            <div>tireSlipAngleFl: {{ telemetry.tireSlipAngleFl }}</div>
            <div>tireSlipAngleFr: {{ telemetry.tireSlipAngleFr }}</div>
            <div>tireSlipAngleRl: {{ telemetry.tireSlipAngleRl }}</div>
            <div>tireSlipAngleRr: {{ telemetry.tireSlipAngleRr }}</div>
            <div>tireCombinedSlipFl: {{ telemetry.tireCombinedSlipFl }}</div>
            <div>tireCombinedSlipFr: {{ telemetry.tireCombinedSlipFr }}</div>
            <div>tireCombinedSlipRl: {{ telemetry.tireCombinedSlipRl }}</div>
            <div>tireCombinedSlipRr: {{ telemetry.tireCombinedSlipRr }}</div>
            <div>tireTempFl: {{ telemetry.tireTempFl }}</div>
            <div>tireTempFr: {{ telemetry.tireTempFr }}</div>
            <div>tireTempRl: {{ telemetry.tireTempRl }}</div>
            <div>tireTempRr: {{ telemetry.tireTempRr }}</div>
        </div>
        <div class="flex-item power">
            <div class="flex-container">
                <div class="flex-item">Tachometer</div>
                <progress-bar class="flex-item-2" color="green" :value="telemetry.currentEngineRpmPercent" :text="telemetry.currentEngineRpmDisplay" />
            </div>
            <div class="flex-container">
                <div class="flex-item">Gear</div>
                <div class="flex-item-2"> {{ telemetry.gear }}</div>
            </div>
            <div class="flex-container">
                <div class="flex-item">Speed</div>
                <div class="flex-item-2"> {{ telemetry.speed }} MPH</div>
            </div>
            <div class="flex-container">
                <div class="flex-item">Power</div>
                <div class="flex-item-2"> {{ telemetry.power }} HP</div>
            </div>
            <div class="flex-container">
                <div class="flex-item">Torque</div>
                <div class="flex-item-2"> {{ telemetry.torque }} N/m</div>
            </div>
            <div class="flex-container">
                <div class="flex-item">Boost</div>
                <div class="flex-item-2"> {{ telemetry.boost }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineComponent } from 'vue';
import { ForzaPacket } from '../../server/ForzaParser';
import ProgressBar from '@/components/ProgressBar.vue';

interface ForzaTelemetryData {
    telemetry: ForzaPacket | null,
    conversions: {
        speed: number,
        power: number,
    },
}

export default defineComponent({
    name: 'ForzaTelemetry',
    components: {
        ProgressBar,
    },
    data(): ForzaTelemetryData {
        return {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            telemetry: {},
            conversions: {
                speed: 2.23694, // meters per second to mph
                power: 745.7, // watts to horsepower
            }
        };
    },
    mounted() {
        const ws = new WebSocket('ws://localhost:3001');
        ws.onmessage = (payload) => {
            this.telemetry = JSON.parse(payload.data);
            // @ts-ignore
            this.telemetry.speed = Math.floor(this.telemetry.speed * this.conversions.speed);
            // @ts-ignore
            this.telemetry.power /= Math.round(this.conversions.power);
            // @ts-ignore
            this.telemetry.accelerator = this.telemetry.accelerator / 2.55;
            // @ts-ignore
            this.telemetry.steer = (this.telemetry.steer + 127) / 2.55;
            // @ts-ignore
            this.telemetry.brake = this.telemetry.brake / 2.55;
            // @ts-ignore
            this.telemetry.clutch = this.telemetry.clutch / 2.55;
            // @ts-ignore
            this.telemetry.handbrake = this.telemetry.handbrake / 2.55;
            // @ts-ignore
            this.telemetry.currentEngineRpmPercent = this.telemetry.currentEngineRpm / this.telemetry.engineMaxRpm * 100;
            // @ts-ignore
            this.telemetry.currentEngineRpmDisplay = Math.round(this.telemetry.currentEngineRpm);
            // @ts-ignore
            this.telemetry.torque = Math.round(this.telemetry.torque);
            // @ts-ignore
            this.telemetry.boost = this.telemetry.boost > 0 ? Math.round(this.telemetry.boost) : 0;
        }
    },
});
</script>

<style scoped lang="scss">
.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.fullscreen {
    height: 100vh;
    width: 100vw;
}

.flex-item {
    flex-basis: 50px;
    flex-grow: 1;
}

.flex-item-2 {
    flex-grow: 2;
}

</style>
