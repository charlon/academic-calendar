<template>
  <div class="blah">
    <table class="table table-bordered table-sm">
      <!-- build the table header for the given calendar years i.e. 2020-2021 -->
      <thead>
        <tr>
          <th class="align-top"></th>
          <!-- loop through quarters array and generate header -->
          <template v-for="quarter in quarters" v-bind:key="quarter.label">
            <th class="align-top text-secondary" style="width:150px;">
              <span
                :class="
                  quarter.term == 'A-term' || quarter.term == 'B-term'
                    ? 'invisible'
                    : ''
                "
                >{{ quarter.label }} {{ quarter.year }}</span
              >
              <span v-if="quarter.label == 'Summer'" class="d-block small">
                {{ quarter.term }}
              </span>
            </th>
          </template>
        </tr>
      </thead>

      <!-- top level category -->
      <tbody>
        <tr v-for="(event, i) in filteredEvents" :key="i">
          <td>{{ event.label }}</td>
          <td v-for="(quarter, j) in quarters" :key="j" style="width:150px;">
            {{
              eventForQuarter(event, quarter)
                ? eventForQuarter(event, quarter).start_date
                : ""
            }}
            {{
              eventForQuarter(event, quarter)
                ? eventForQuarter(event, quarter).end_date
                : ""
            }}
            {{
              eventForQuarter(event, quarter)
                ? eventForQuarter(event, quarter).note
                : ""
            }}
          </td>
        </tr>
      </tbody>
      <!--
        <tr>
          <td class="">Final Examination Week</td>
          <td id="autumn" class="text-nowrap">Dec 12-18, 2020</td>
          <td id="winter" class="text-nowrap">Mar 13-19, 2021</td>
          <td id="spring" class="text-nowrap">Jun 7-11, 2021</td>
          <td id="full" colspan="3">Typically the last class day of class</td>
        </tr> 
        -->

      <!-- for each subcategory... create a new tbody --
      <tbody>
        <tr>
          <th colspan="7" class="border-0">Commencement (subcategory)</th>
        </tr>
        <tr>
          <td style="width: 30%">Seattle Campus</td>
          <td id="autumn" class="text-nowrap"></td>
          <td id="winter" class="text-nowrap"></td>
          <td id="spring" class="text-nowrap">Jun 12, 2021</td>
          <td id="full" class="text-nowrap"></td>
          <td id="aterm" class="text-nowrap"></td>
          <td i="bterm" class="text-nowrap"></td>
        </tr>
         <tr>
          <td style="width: 30%">Bothell Campus</td>
          <td id="autumn" class="text-nowrap"></td>
          <td id="winter" class="text-nowrap"></td>
          <td id="spring" class="text-nowrap">Jun 12, 2021</td>
          <td id="full" class="text-nowrap"></td>
          <td id="aterm" class="text-nowrap"></td>
          <td i="bterm" class="text-nowrap"></td>
        </tr>
      </tbody> -->
    </table>
  </div>
</template>

<script>
import Calendar from "../assets/calendar.json";

export default {
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      quarters: Calendar.quarters,
    };
  },
  computed: {
    filteredEvents() {
      // filter events by category
      return Calendar.events.filter((f) => f.category.includes(this.category));
    },
  },
  methods: {
    eventForQuarter(event, quarter) {
      return event.quarters.find(
        (qData) =>
          // Checkes if the term is defined, if it is then check it it matches
          (!quarter.term || qData.term === quarter.term) &&
          // Checks if the quarter label matches
          qData.quarter === quarter.label
      );
    },
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
}*/

.blah {
  td { font-size: 1.5rem !important; } 
}
</style>
  
