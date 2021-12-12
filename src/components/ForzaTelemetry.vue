<template>
    <div>
        <div>isRaceOn: {{ telemetry.isRaceOn }}</div>
        <div>timestamp: {{ telemetry.timestamp }}</div>
        <div>engineMaxRpm: {{ telemetry.engineMaxRpm }}</div>
        <div>engineIdleRpm: {{ telemetry.engineIdleRpm }}</div>
        <div>currentEngineRpm: {{ telemetry.currentEngineRpm }}</div>
        <div>accelerationX: {{ telemetry.accelerationX }}</div>
        <div>accelerationY: {{ telemetry.accelerationY }}</div>
        <div>accelerationZ: {{ telemetry.accelerationZ }}</div>
        <div>velocityX: {{ telemetry.velocityX }}</div>
        <div>velocityY: {{ telemetry.velocityY }}</div>
        <div>velocityZ: {{ telemetry.velocityZ }}</div>
        <div>angularVelocityX: {{ telemetry.angularVelocityX }}</div>
        <div>angularVelocityY: {{ telemetry.angularVelocityY }}</div>
        <div>angularVelocityZ: {{ telemetry.angularVelocityZ }}</div>
        <div>yaw: {{ telemetry.yaw }}</div>
        <div>pitch: {{ telemetry.pitch }}</div>
        <div>roll: {{ telemetry.roll }}</div>
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
        <div>wheelOnRumbleStripFl: {{ telemetry.wheelOnRumbleStripFl }}</div>
        <div>wheelOnRumbleStripFr: {{ telemetry.wheelOnRumbleStripFr }}</div>
        <div>wheelOnRumbleStripRl: {{ telemetry.wheelOnRumbleStripRl }}</div>
        <div>wheelOnRumbleStripRr: {{ telemetry.wheelOnRumbleStripRr }}</div>
        <div>wheelInPuddleFl: {{ telemetry.wheelInPuddleFl }}</div>
        <div>wheelInPuddleFr: {{ telemetry.wheelInPuddleFr }}</div>
        <div>wheelInPuddleRl: {{ telemetry.wheelInPuddleRl }}</div>
        <div>wheelInPuddleRr: {{ telemetry.wheelInPuddleRr }}</div>
        <div>surfaceRumbleFl: {{ telemetry.surfaceRumbleFl }}</div>
        <div>surfaceRumbleFr: {{ telemetry.surfaceRumbleFr }}</div>
        <div>surfaceRumbleRl: {{ telemetry.surfaceRumbleRl }}</div>
        <div>surfaceRumbleRr: {{ telemetry.surfaceRumbleRr }}</div>
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
        <div>carOrdinal: {{ telemetry.carOrdinal }}</div>
        <div>carClass: {{ telemetry.carClass }}</div>
        <div>carPerformanceIndex: {{ telemetry.carPerformanceIndex }}</div>
        <div>driveTrain: {{ telemetry.driveTrain }}</div>
        <div>numCylinders: {{ telemetry.numCylinders }}</div>
        <div>positionX: {{ telemetry.positionX }}</div>
        <div>positionY: {{ telemetry.positionY }}</div>
        <div>positionZ: {{ telemetry.positionZ }}</div>
        <div>speed: {{ telemetry.speed }}</div>
        <div>power: {{ telemetry.power }}</div>
        <div>torque: {{ telemetry.torque }}</div>
        <div>tireTempFl: {{ telemetry.tireTempFl }}</div>
        <div>tireTempFr: {{ telemetry.tireTempFr }}</div>
        <div>tireTempRl: {{ telemetry.tireTempRl }}</div>
        <div>tireTempRr: {{ telemetry.tireTempRr }}</div>
        <div>boost: {{ telemetry.boost }}</div>
        <div>fuel: {{ telemetry.fuel }}</div>
        <div>distance: {{ telemetry.distance }}</div>
        <div>bestLapTime: {{ telemetry.bestLapTime }}</div>
        <div>lastLapTime: {{ telemetry.lastLapTime }}</div>
        <div>currentLapTime: {{ telemetry.currentLapTime }}</div>
        <div>currentRaceTime: {{ telemetry.currentRaceTime }}</div>
        <div>lap: {{ telemetry.lap }}</div>
        <div>racePosition: {{ telemetry.racePosition }}</div>
        <div>accelerator: {{ telemetry.accelerator }}</div>
        <div>brake: {{ telemetry.brake }}</div>
        <div>clutch: {{ telemetry.clutch }}</div>
        <div>handbrake: {{ telemetry.handbrake }}</div>
        <div>gear: {{ telemetry.gear }}</div>
        <div>steer: {{ telemetry.steer }}</div>
        <div>normalDrivingLine: {{ telemetry.normalDrivingLine }}</div>
        <div>normalAiBrakeDifference: {{ telemetry.normalAiBrakeDifference }}</div>
        <div>unknown1: {{ telemetry.unknown1 }}</div>
        <div>unknown2: {{ telemetry.unknown2 }}</div>
        <div>unknown3: {{ telemetry.unknown3 }}</div>
        <div>unknown4: {{ telemetry.unknown4 }}</div>
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
