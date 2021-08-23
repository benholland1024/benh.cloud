<template>
  <div class="text-center">
    <br/><br/>

    <div class="container-center flex space-between">
        <div style="width:48%">

          <calendar></calendar>

        </div>
        <div style="width:48%">

            <!--  Blog  -->
            <div id="blog" class="dash-widget">
                <div id="blog-title" class="dash-widget-header">Blog</div>
                <div id="blog-link-container">
                    <a href="/wiki">Wiki base</a>
                    <br/>
                    <a href="/wiki-categories">Page categories...</a>
                    <a href="/wiki-index">Complete page index...</a>
                    <a href="/wiki-editor" id="create-new-page">Create new page...</a>
                </div>
            </div>

        </div>
    </div>
    <br /><br />

    <!--  Time tracker  -->
    <div id="time-tracker" class="dash-widget">
        <div id="time-tracker-title" class="dash-widget-header">
            Time tracker
        </div>
        <div class="day-label" id="today-date">Today -- August 20</div>
        <div class="day-container">
            <div class="entry labels">
                <span class="description">description of time use</span>
                <span class="time-area">time spent</span>
                <span class="button-area"></span>
            </div>
            <div class="current-entry">
                <input type="text" placeholder="What are you working on?" id="current-task" class="description"/>
                <div class="time-area" id="current-timer-display">0:00:00</div>
                <img src="/general/play_button.png" id="play-button" class="button-area" onclick="start_timer()">
                <img src="/general/pause_button.png" id="pause-button" class="button-area hidden" onclick="stop_timer()">
            </div>
            <div id="entries">
                <span class="description"></span>
                <span class="time"></span>          <!--  These will all be replaced via JS  -->
                <span class="button-area"></span>
            </div>
        </div>
    </div>

    <br /><br />
    <div class="divider-line"></div>
    <br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue'

export default {
  name: 'Dash',
  components: {
    Calendar
  },
  data() {
    return {
      publicPath: process.env.BASE_URL, //  Links to /public
    }
  }
}
</script>

<style scoped>
/*  General dashboard widget features */
.dash-widget {
    box-shadow: 0px 2px 10px rgba(0,0,0,.5);
}
.dash-widget-header {
    background: #fafafa;
    color: #4698A8;
    border-bottom: solid 1px #466EA8;
}
.dark-mode .dash-widget-header {
    background:rgb(30, 30, 30);
}
.dark-mode .dash-widget {
    box-shadow: 0px 2px 10px rgba(0,0,0,1);
    background: rgb(41, 41, 41);
}


/*  Blog:    */
#blog {
    height: 250px;
    font-family: sans-serif;
    font-size: 14px;
}
#blog-title {
    width: 100%;
    font-size: 14px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
#blog-link-container {
    padding: 10px;
}
#blog-link-container a {
    margin-bottom: 5px;
    display: block;
}

/*  Time tracker:  */
#time-tracker {
    /*  border: solid 1px #466EA8; */
    height: 250px;
    font-family: sans-serif;
    box-shadow: 0px 2px 10px rgba(0,0,0,.5);
}
#time-tracker-title {
    width: 100%;
    font-size: 14px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.day-label {
    width: 100%;
    text-align: center;
    font-size: 10px;
    margin: 3px 0px;
}
.day-container {
    border-top: solid 1px #466EA8;
    border-bottom: solid 1px #466EA8;
}
.current-entry {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
}
.description {
    border: none;
    display: block;
    width: 175px;
}
input.description {
    border-bottom: solid 1px gray;
    outline: none;
    transition-duration: .2s;
    background: none;
}
input.description:focus {
    border-bottom: solid 1px rgb(41, 41, 41);
}
.dark-mode input.description {
    color: white;
}
.time-area {
    font-size: 12px;
}
.button-area {
    position: relative;
    cursor: pointer;
    /* opacity: .5; */
    width: 30px;
}
.hidden {
    display: none;
}
.entry {
    display: flex;
    font-size: 12px;
    justify-content: space-around;
    padding: 10px;
    background: #fafafa;
}
.dark-mode .entry, .dark-mode .labels, .dark-mode .labels span {
    background:rgb(30, 30, 30);
}

.labels, .labels span {
    font-size: 10px;
    color: gray;
    background: #fafafa;
}

</style>