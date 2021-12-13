<template>
    <div>
        <div>currentEngineRpm: {{ telemetry.currentEngineRpm }}</div>
        <div>normSuspensionTravelFl: {{ telemetry.normSuspensionTravelFl }}</div>
        <div>normSuspensionTravelFr: {{ telemetry.normSuspensionTravelFr }}</div>
        <div>normSuspensionTravelRl: {{ telemetry.normSuspensionTravelRl }}</div>
        <div>normSuspensionTravelRr: {{ telemetry.normSuspensionTravelRr }}</div>
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
        <div>suspensionTravelMetersFl: {{ telemetry.suspensionTravelMetersFl }}</div>
        <div>suspensionTravelMetersFr: {{ telemetry.suspensionTravelMetersFr }}</div>
        <div>suspensionTravelMetersRl: {{ telemetry.suspensionTravelMetersRl }}</div>
        <div>suspensionTravelMetersRr: {{ telemetry.suspensionTravelMetersRr }}</div>
        <div>speed: {{ telemetry.speed }}</div>
        <div>power: {{ telemetry.power }}</div>
        <div>torque: {{ telemetry.torque }}</div>
        <div>tireTempFl: {{ telemetry.tireTempFl }}</div>
        <div>tireTempFr: {{ telemetry.tireTempFr }}</div>
        <div>tireTempRl: {{ telemetry.tireTempRl }}</div>
        <div>tireTempRr: {{ telemetry.tireTempRr }}</div>
        <div>boost: {{ telemetry.boost }}</div>
        <div>accelerator: {{ telemetry.accelerator }}</div>
        <div>brake: {{ telemetry.brake }}</div>
        <div>clutch: {{ telemetry.clutch }}</div>
        <div>handbrake: {{ telemetry.handbrake }}</div>
        <div>gear: {{ telemetry.gear }}</div>
        <div>steer: {{ telemetry.steer }}</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ForzaTelemetry',
    data() {
        return {
            telemetry: {},
        };
    },
    mounted() {
        const ws = new WebSocket('ws://localhost:3001');
        ws.onmessage = (payload) => {
            this.telemetry = JSON.parse(payload.data);
        }
    },
});
</script>

<style scoped lang="scss">

</style>
