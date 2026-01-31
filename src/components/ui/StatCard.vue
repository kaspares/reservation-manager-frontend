<template>
    <div class="stats shadow">
    <div class="stat bg-base-300">
        <div class="stat-title text-xl">{{ title }}</div>
        <div class="stat-value">{{ value }}</div>
        <div class="stat-desc" v-if="desc">{{ desc }}</div>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        }
    }
}
</script>