<template>
  <!--  Calendar  -->
  <div id="calendar" class="dash-widget">
    <ul id="month-and-year" class="dash-widget-header">
      <li class="prev" onclick="shift_calendar(-1)">&#10094;</li>
      <li><span id="month">[Month]</span>, <span id="year">[Year]</span></li>
      <li class="next" onclick="shift_calendar(1)">&#10095;</li>
    </ul>
    <ul id="weekdays">
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
      <li>Su</li>
    </ul>
    <ul id="days">
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
    
  }
}
</script>

<style scoped>
/*  Calendar:   */
ul {
  list-style-type: none;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0px;
}
#calendar {
  height: 250px;
  width: 100%;
  font-family: sans-serif;
}
.prev, .next {
  cursor: pointer;
}
.prev:hover, .next:hover {
  filter: brightness(120%);
}
#month-and-year {
  width: calc(100% - 20px);
  font-size: 14px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0px;
  padding: 0px 10px 0px 10px;
}
#weekdays {
  width: 100%;
  display: flex;
  color: gray;
  justify-content: space-around;
  margin: 10px 0px;
  font-size: 14px;
}
#days {
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
}
#days li {
  width: 13%;
  text-align: center;
  margin-top: 5px;
}
#current-day {
  font-weight: bold;
  color: #F87600;
  text-decoration: underline;
}
</style>
