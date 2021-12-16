<template>
    <div>
        <div v-if="side === 'left'">
            <vertical-progress />
        </div>
        <div class="flex-container"></div>
        <div :class="`tire ${color}`"></div>
        <div :class="`grip ${gripSlipRatioColor}`"></div>
        <div :class="`grip ${gripSlipAngleColor}`"></div>
        <div :class="`grip ${gripCombinedColor}`"></div>
        <div v-if="side === 'right'">
            <vertical-progress />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import VerticalProgress from '@/components/VerticalProgress';

export default defineComponent({
    name: 'TireSuspension',
    components: {
        VerticalProgress,
    },
    props: {
        side: String,
        values: Object,
    },
    data() {
        return {
            color: '',
            gripSlipRatioColor: '',
            gripSlipAngleColor: '',
            gripCombinedColor: '',
            suspensionValue: 0,
            tireTemp: 0,
        };
    },
});
</script>

<style scoped>

.tire {
    width: 50%;
    height: 50%;
}
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
