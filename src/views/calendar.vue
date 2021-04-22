<template>
  <div>
    <h1 class="mb-4 font-weight-bold">
      <span class="">{{ years }}</span> Academic Calendar
    </h1>

    <calendar-contents />

    <p class="text-danger">Current Quarter (static): {{ current  }}</p>
    <p class="text-danger">Current Quarter (dynamic): {{ currentQuarter }}</p>

    <!-- build a table for every category -->
    <template v-for="category in categories" v-bind:key="category.label">
      <h2 class="mt-5 font-weight-bold">{{ category.label }}</h2>
      <p v-if="category.note" class="">{{ category.note }}</p>
      <calendar-table :category="category.label" />
    </template>

  </div>

  <h2 class="mt-5 font-weight-bold">Holidays and Observances</h2>
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
import Calendar from "../assets/calendar.json";
import CalendarContents from "../components/calendar-contents.vue";
import CalendarTable from "../components/calendar-table.vue";

export default {
  name: "App",
  data() {
    return {
      years: Calendar.start_year + "-" + (Calendar.start_year + 1),
      categories: Calendar.categories,

      current: 'Spring'

      // TODO: filter events by category
      //events: Calendar.events.filter()

    };
  },
  computed: {
    currentQuarter() {
      
      // TODO: use today's date to calculate current quarter 
      let today = new Date();

      // filter event to just Instruction Begins
      let eventData = Calendar.events.filter((f) =>
        f.label.includes("Instruction Begins")
      );

      let quarters = eventData[0].quarters

      // if today >= instruction begins AND <= NEXT instruction begins
      return quarters;

    },
  },
  components: {
    "calendar-contents": CalendarContents,
    "calendar-table": CalendarTable,
  },
};
</script>

<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.css";

// bootrap and uw.css overrides
/*
h1 {
  font-size: 3.7rem; // 37px
  font-weight: 800;
}

h2 {
  font-size: 2.8rem;
  font-weight: 800;
}*/

</style>