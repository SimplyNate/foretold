<template>
    <div ref="barContainer" class="progress-bar-empty">
        <div ref="bar" :class="`progress-bar-fill ${fillColor}`"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface ProgressBarData {
    width: number,
    bar: HTMLDivElement,
}

export default defineComponent({
    name: `VerticalProgress`,
    props: {
        value: {
            type: Number,
            default: 0,
        },
    },
    data(): ProgressBarData {
        return {
            width: 0,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            bar: null,
        };
    },
    computed: {
        fillColor() {
            return this.value < 75 ? 'green' : this.value < 95 ? 'yellow' : 'red';
        },
    },
    watch: {
        value() {
            this.updateProgress();
        },
    },
    mounted() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.bar = this.$refs['bar'];
    },
    methods: {
        updateProgress() {
            this.bar.style.height = `${this.value}%`;
        }
    }
});
</script>

<style scoped>

.progress-bar-empty {
    width: 12px;
    background-color: lightgray;
}

.progress-bar-fill {
    width: 12px;
    height: 0;
}

.green {
    background-color: limegreen;
}

.red {
    background-color: darkred;
}

.yellow {
    background-color: yellow;
}

</style>
