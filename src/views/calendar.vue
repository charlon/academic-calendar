<template>
  <div style="outline: dashed 2px #ccc">
    <h1 class="mb-4">
      <span class="text-danger">{{ calendar.range }}</span> Academic Calendar
    </h1>

    <h2>Contents</h2>
    <ul>
      <li
        v-for="category in categories"
        v-bind:key="category.label"
        class="text-danger"
      >
        {{ category.label }}
      </li>
    </ul>
    <p>
      See UW Online Learning for drop and refund information associated with
      Online Learning courses offered by UW Professional &amp; Continuing
      Education.
    </p>

    <template v-for="category in categories" v-bind:key="category.label">
      <h2 class="mt-5 text-danger">{{ category.label }}</h2>
      <p v-if="category.note" class="text-danger">{{ category.note }}</p>
      <calendar-category />
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
import Calendars from "../assets/calendars.json";
import CalendarCategory from "../components/calendar-category.vue";

export default {
  name: "App",
  data() {
    return {
      calendar: { range: "2020-2021" },
      categories: [
        { label: "Calendar Summary" },
        { label: "Dates of Instruction" },
        {
          label: "University Holidays",
          note:
            "Classes are not in session on the following holidays. All offices and most University buildings are also closed.",
        },
        { label: "Application Deadlines" },
        { label: "Registration Deadlines" },
        { label: "Adding/Dropping Courses or Withdrawl" },
        { label: "Tuition/Fee Assessment" },
        {
          label: "Grade Deadlines",
          note:
            "Autumn registration for students dropped Spring 2020 will be canceled on Aug 21, 2020.",
        },
      ],
    };
  },
  components: {
    "calendar-category": CalendarCategory,
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