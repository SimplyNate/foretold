<template>
    <div>
        <div v-if="side === 'left'">
            <vertical-progress />
        </div>
        <div :class="`tire ${color}`"></div>
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
            suspensionValue: 0,
            tireTemp: 0,
        };
    },
});
</script>

<style scoped>

.tire {

}
</style>
