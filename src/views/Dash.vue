<template>
  <div class="text-center">
    <br/><br/>

    <div class="container-center flex space-between">
      <div style="width:48%">

        <calendar></calendar>

      </div>
      <div style="width:48%">

        <blog-overview></blog-overview>

      </div>
    </div>
    <br /><br />

    <time-tracker></time-tracker>

    <br /><br />
    <div class="divider-line"></div>
    <br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue';
import BlogOverview from '@/components/BlogOverview.vue';
import TimeTracker from '@/components/TimeTracker.vue';

export default {
  name: 'Dash',
  components: {
    Calendar,
    BlogOverview,
    TimeTracker
  },
  data() {
    return {
      publicPath: process.env.BASE_URL, //  Links to /public
    }
  }
}
</script>

<style scoped>


</style>