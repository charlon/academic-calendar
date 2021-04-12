<template>
  <div style="outline: dashed 2px #ccc">
   
    <h1 class="mb-4"><span class="text-danger">{{ calendar.years }}</span> Academic Calendar</h1>

    <h2>Contents</h2>
    <ul>
      <li v-for="category in categories" v-bind:key="category.category" class="text-danger">{{ category.category }}</li>
    </ul>

    <p>See UW Online Learning for drop and refund information associated with
      Online Learning courses offered by UW Professional &amp; Continuing Education.
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
import Calendars from "../assets/calendars.json";
import EventsTable from "../components/events-table.vue";

export default {
  name: "App",
  data() {
    return {
      calendar : { "years": "2020-2021" },
      categories: [
        { "category": "Calendar Summary"},
        { "category": "Dates of Instruction"},
        { "category": "University Holidays"},
        { "category": "Application Deadlines"},
        { "category": "Registration Deadlines"},
        { "category": "Adding/Dropping Courses or Withdrawl"},
        { "category": "Tuition/Fee Assessment"},
        { "category": "Grade Deadlines"},
      ]
    }
  },
  components: {
    "events-table": EventsTable,
  },
};
</script>

<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.css";

// bootrap and uw.css overrides
h1 {
  font-size: 3.7rem; // 37px
  font-weight: bold;
}

h2 {
  font-size: 2.8rem;
  font-weight: bold;
}

</style>