<template>
    <div ref="barContainer" class="progress-bar-empty">
        <div ref="bar" :class="`progress-bar-fill ${color}`"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface ProgressBarData {
    width: number,
    bar: HTMLDivElement,
}

export default defineComponent({
    name: `ProgressBar`,
    props: {
        color: String,
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
            this.bar.style.width = `${this.value}%`;
        }
    }
});
</script>

<style scoped>

.progress-bar-empty {
    height: 12px;
    background-color: lightgray;
}

.progress-bar-fill {
    height: 12px;
    width: 0;
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

.blue {
    background-color: lightskyblue;
}

</style>
