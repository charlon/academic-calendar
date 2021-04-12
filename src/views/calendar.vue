<template>
  <div style="outline: dashed 2px #ccc">
    <h1>20xx-20xx Academic Calendar</h1>

    <h2>Contents</h2>
    <ul>
      <li>Event Category 1</li>
      <li>Event Category 2</li>
      <li>Event Category xx</li>
    </ul>
    <p>
      * See UW Online Learning for drop and refund information associated with
      Online Learning courses offered by UW Professional & Continuing Education.
    </p>

    <h2>Event Cateogry 1</h2>
    <p>This is a category note</p>
    <events-table />


    <h2 class="mt-5">Event Category 2</h2>
    <p>This is a category note</p>
    <events-table />

  </div>

  <h2>Holidays and Observances</h2>
  <p>
    For Washington’s holiday and observance calendar, please review the
    Washington State Council of Presidents
    <a
      href="https://councilofpresidents.org/about/holiday-observance-calendar/"
      target="_blank"
      >Holiday and Observance Calendar</a
    >
  </p>
</template>

<script>
import EventsTable from "../components/events-table.vue";

export default {
  name: "App",
  components: {
    "events-table": EventsTable,
  },
};
</script>

<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.css";

h1 { color: lime !important; }
h2 { color: plum !important; }

</style>