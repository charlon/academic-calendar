<template>
  <div style="outline: dashed 2px #ccc">
    <h1 class="mb-4">
      <span class="">{{ years }}</span> Academic Calendar
    </h1>

    <calendar-contents />

    <!-- build a table for every category -->
    <template v-for="category in categories" v-bind:key="category.label">
      <h2 class="mt-5">{{ category.label }}</h2>
      <p v-if="category.note" class="">{{ category.note }}</p>
      <calendar-table :category="category.label" />
    </template>

  </div>

  <h2 class="mt-5">Holidays and Observances</h2>
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

      // TODO: filter events by category
      //events: Calendar.events.filter()

    };
  },
  computed: {

  },
  components: {
    "calendar-contents": CalendarContents,
    "calendar-table": CalendarTable,
  },
};
</script>

<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.css";

h1 {
  font-size: 3.7rem; // 37px
  font-weight: bold;
}

h2 {
  font-size: 2.8rem;
  font-weight: bold;
}
</style>