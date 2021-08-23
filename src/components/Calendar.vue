<template>
  <!--  Calendar  -->
  <div id="calendar" class="dash-widget">
    <ul id="month-and-year" class="dash-widget-header">
      <li class="prev" @click="shift_calendar(-1)">&#10094;</li>
      <li>{{ month }}, <span id="year">{{ year }}</span></li>
      <li class="next" @click="shift_calendar(1)">&#10095;</li>
    </ul>
    <ul id="weekdays">
      <li>Su</li>
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
    </ul>
    <ul id="days" v-if="month_day_amt > 0">
      <li v-for="blank_day in starting_weekday" :key="blank_day"></li>
      <li v-for="day in month_day_amt" :key="day"
          :class="{ 'current-day': day == current_date }">{{ day }}</li>
      <li v-for="blank_day in month_end_padding" :key="blank_day"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      // Labels for the top of the calendar:
      month: '[month]',
      year: '[year]',

      current_date: -1,      //  The current date of the month. 
      starting_weekday: -1,  //  The weekday of the 1st of the current month, 0 = monday, etc.
      month_day_amt: -1,     //  The amount of days in the current month. 
      month_end_padding: -1, //  The amount of days after the last day of the month, in the last week of the month.

      month_shift: 0,
      year_shift: 0,
    }
  },

  mounted() {
    this.populate_calendar();
  },

  methods: {

    //  Get data to display the current calendar. 
    populate_calendar() {
      var d = new Date();
      var month_num = d.getMonth() + this.month_shift;
      this.year = d.getFullYear() + this.year_shift;
      d.setMonth(month_num);
      d.setFullYear(this.year);

      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      this.month = months[month_num];
      this.month_day_amt = month_days[month_num];

      //  Getting the current date, if relevant to this month. 
      this.current_date = d.getDate();
      if (this.month_shift != 0 || this.year_shift != 0) {
          this.current_date = -1;
      }

      //  Getting the month's starting week day. 
      d.setDate(1);
      this.starting_weekday = d.getDay();
      
      //  Padding the end of the month
      d.setDate(this.month_day_amt);
      this.month_end_padding = 7 - d.getDay();
    },

    shift_calendar(direction) {
      var d = new Date();
      this.month_shift += direction;
      if (d.getMonth() + this.month_shift >= 12) {
          this.month_shift = 0 - d.getMonth();
          this.year_shift++;
      } else if (d.getMonth() + this.month_shift < 0) {
          this.month_shift = 11 - d.getMonth();
          this.year_shift--;
      }
      this.populate_calendar();
    }

  }
}
</script>

<style scoped>

@import url('../assets/styling/dash-widget.css');

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
.current-day {
  font-weight: bold;
  color: #F87600;
  text-decoration: underline;
}
</style>
