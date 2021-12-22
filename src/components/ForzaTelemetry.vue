<template>
    <div class="flex-container fullscreen">
        <div class="flex-item controls">
            <div class="flex-container-column h-100">
                <div>
                    <h1>Inputs</h1>
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
                <div>
                    <h1>Engine Telemetry</h1>
                    <div class="flex-container wrap">
                        <div class="telemetry-box">
                            <h3>Tachometer</h3>
                            <div class="telemetry-value">{{ telemetry.currentEngineRpmDisplay }}</div>
                            <div class="telemetry-unit">RPM</div>
                        </div>
                        <div class="telemetry-box">
                            <h3>Gear</h3>
                            <div class="telemetry-value">{{ telemetry.gear }}</div>
                        </div>
                        <div class="telemetry-box">
                            <h3>Speed</h3>
                            <div class="telemetry-value">{{ telemetry.speed }}</div>
                            <div class="telemetry-unit">MPH</div>
                        </div>
                        <div class="telemetry-box">
                            <h3>Power</h3>
                            <div class="telemetry-value">{{ telemetry.power }}</div>
                            <div class="telemetry-unit">HP</div>
                        </div>
                        <div class="telemetry-box">
                            <h3>Torque</h3>
                            <div class="telemetry-value">{{ telemetry.torque }}</div>
                            <div class="telemetry-unit">ft-lbs</div>
                        </div>
                        <div class="telemetry-box">
                            <h3>Boost</h3>
                            <div class="telemetry-value">{{ telemetry.boost }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-item">
            <h1>Tires and Suspension</h1>
            <div class="flex-container tires" style="margin-bottom: 4em;">
                <div style="margin-right: 2em;" class="flex-container">
                    <div style="margin-right: 1em;">
                        <vertical-progress :value="telemetry.normSuspensionTravelFl" />
                    </div>
                    <tire :temperature="telemetry.tireTempFl" :slip-angle="telemetry.tireSlipAngleFl" :slip-ratio="telemetry.tireSlipRatioFl" :slip-combined="telemetry.tireCombinedSlipFl" />
                </div>
                <div>
                    <tire :temperature="telemetry.tireTempFr" :slip-angle="telemetry.tireSlipAngleFr" :slip-ratio="telemetry.tireSlipRatioFr" :slip-combined="telemetry.tireCombinedSlipFr" />
                </div>
                <div style="margin-left: 1em;">
                    <vertical-progress :value="telemetry.normSuspensionTravelFr" />
                </div>
            </div>
            <div class="flex-container tires">
                <div style="margin-right: 2em;" class="flex-container">
                    <div style="margin-right: 1em;">
                        <vertical-progress :value="telemetry.normSuspensionTravelRl" />
                    </div>
                    <tire :temperature="telemetry.tireTempRl" :slip-angle="telemetry.tireSlipAngleRl" :slip-ratio="telemetry.tireSlipRatioRl" :slip-combined="telemetry.tireCombinedSlipRl" />
                </div>
                <div>
                    <tire :temperature="telemetry.tireTempRr" :slip-angle="telemetry.tireSlipAngleRr" :slip-ratio="telemetry.tireSlipRatioRr" :slip-combined="telemetry.tireCombinedSlipRr" />
                </div>
                <div style="margin-left: 1em;">
                    <vertical-progress :value="telemetry.normSuspensionTravelRr" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineComponent } from 'vue';
import { ForzaPacket } from '../../server/ForzaParser';
import ProgressBar from '@/components/ProgressBar.vue';
import Tire from '@/components/Tire.vue';
import VerticalProgress from '@/components/VerticalProgress.vue';

interface ForzaTelemetryData {
    telemetry: ForzaPacket | null,
    conversions: {
        speed: number,
        power: number,
        torque: number,
    },
}

export default defineComponent({
    name: 'ForzaTelemetry',
    components: {
        VerticalProgress,
        Tire,
        ProgressBar,
    },
    data(): ForzaTelemetryData {
        return {
            // @ts-ignore
            telemetry: {
                speed: 0,
                power: 0,
                accelerator: 0,
                steer: 0,
                brake: 0,
                clutch: 0,
                handbrake: 0,
                currentEngineRpm: 0,
                engineMaxRpm: 1,
                // @ts-ignore
                currentEngineRpmPercent: 0,
                // @ts-ignore
                currentEngineRpmDisplay: 0,
                torque: 0,
                boost: 0,
                gear: 1,
                normSuspensionTravelFl: 0,
                normSuspensionTravelFr: 0,
                normSuspensionTravelRl: 0,
                normSuspensionTravelRr: 0,
                tireTempFl: 0,
                tireTempFr: 0,
                tireTempRl: 0,
                tireTempRr: 0,
                tireSlipAngleFl: 0,
                tireSlipAngleFr: 0,
                tireSlipAngleRl: 0,
                tireSlipAngleRr: 0,
                tireSlipRatioFl: 0,
                tireSlipRatioFr: 0,
                tireSlipRatioRl: 0,
                tireSlipRatioRr: 0,
                tireCombinedSlipFl: 0,
                tireCombinedSlipFr: 0,
                tireCombinedSlipRl: 0,
                tireCombinedSlipRr: 0,
            },
            conversions: {
                speed: 2.23694, // meters per second to mph
                power: 745.7, // watts to horsepower
                torque: 0.73756215, // foot-pounds to newton-meter
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
            this.telemetry.power = this.telemetry.power > 0 ? Math.round(this.telemetry.power / this.conversions.power) : 0;
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
            this.telemetry.currentEngineRpmDisplay = Math.floor(this.telemetry.currentEngineRpm);
            // @ts-ignore
            this.telemetry.torque = this.telemetry.torque > 0 ? Math.round(this.telemetry.torque * this.conversions.torque) : 0;
            // @ts-ignore
            this.telemetry.boost = this.telemetry.boost > 0 ? Math.round(this.telemetry.boost) : 0;
            // @ts-ignore
            this.telemetry.normSuspensionTravelFl *= 100;
            // @ts-ignore
            this.telemetry.normSuspensionTravelFr *= 100;
            // @ts-ignore
            this.telemetry.normSuspensionTravelRl *= 100;
            // @ts-ignore
            this.telemetry.normSuspensionTravelRr *= 100;
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

.wrap {
    flex-wrap: wrap;
}

.flex-container-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.fullscreen {
    height: 100vh;
    width: 100vw;
}

.h-100 {
    height: 100vh;
}

.flex-item {
    flex-basis: 50px;
    flex-grow: 1;
}

.flex-item-2 {
    flex-grow: 2;
}

.telemetry-box {
    border: 1px solid ghostwhite;
    width: 25%;
    height: 25vh;
    margin: 10px;
    border-radius: 5%;
}

.telemetry-value {
    font-weight: bold;
    font-size: 2em;
    padding-top: 25%;
}

.telemetry-unit {
    margin-top: 5%;
}

</style>
