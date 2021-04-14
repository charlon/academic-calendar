<template>
  <h2>Contents</h2>
    <ul>
      <li
        v-for="category in categories"
        v-bind:key="category.label"
      >
        {{ category.label }}
      </li>
    </ul>
    <p>
      See UW Online Learning for drop and refund information associated with
      Online Learning courses offered by UW Professional &amp; Continuing
      Education.
    </p>
</template>

<script>
import Calendar from "../assets/calendar.json";

export default {
  data() {
    return {
      categories: Calendar.categories
    };
  },
};
</script>


<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.css";

// bootrap and uw.css overrides
/*
h2 {
  font-size: 2.8rem;
  font-weight: bold;
}*///

</style>
  
