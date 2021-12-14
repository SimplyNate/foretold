<template>
    <div class="flex-container fullscreen">
        <div class="flex-item controls">
            <div class="flex-container">
                <div class="flex-item">accelerator: {{ telemetry.accelerator }}</div>
                <progress-bar class="flex-item" color="green" :value="telemetry.accelerator" />
            </div>
            <div>brake: {{ telemetry.brake }}</div>
            <div>clutch: {{ telemetry.clutch }}</div>
            <div>handbrake: {{ telemetry.handbrake }}</div>
            <div>steer: {{ telemetry.steer }}</div>
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
            <div>currentEngineRpm: {{ telemetry.currentEngineRpm }}</div>
            <div>gear: {{ telemetry.gear }}</div>
            <div>speed: {{ telemetry.speed }}</div>
            <div>power: {{ telemetry.power }}</div>
            <div>torque: {{ telemetry.torque }}</div>
            <div>boost: {{ telemetry.boost }}</div>
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
    }
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
            this.telemetry.speed *= this.conversions.speed;
            // @ts-ignore
            this.telemetry.power /= this.conversions.power;
            // @ts-ignore
            this.telemetry.accelerator = this.telemetry.accelerator / 255;
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
    flex-grow: 1;
}

</style>
