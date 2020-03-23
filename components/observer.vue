<!-- Wrapper of IntersectionObserver API -->

<template>
  <div class="observer block"/>
</template>

<script>
    export default {
        props: ['options'],
        data: () => ({
            observer: null
        }),
        mounted() {
            const options = this.options || {}
            this.observer = new IntersectionObserver(([entry]) => {
                if (entry) {
                    this.$emit("intersect")
                }
            }, options)
            this.observer.observe(this.$el)
        },
        destroyed() {
            this.observer.disconnect()
        }
    }
</script>