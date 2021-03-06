<template>
  <div class="blah">
    <table class="table table-bordered">
      <colgroup>
        <col id="event" />
        <col id="autumn" />
        <col id="winter" />
        <col id="spring" class="table-current" />
        <col id="summer-full" />
        <col id="summer-a" />
        <col id="summer-b" />
      </colgroup>

      <!-- build the table header for the given calendar years i.e. 2020-2021 -->
      <thead>
        <tr>
          <th class="align-top table-event"></th>
          <!-- loop through quarters array and generate header -->
          <template v-for="quarter in quarters" v-bind:key="quarter.label">
            <th v-if="!quarter.terms" class="align-top table-header">
              {{ quarter.label }} {{ quarter.year }}
            </th>
            <template v-else>
              <th
                v-for="(term, i) in quarter.terms"
                :key="i"
                class="align-top table-header"
              >
                <span :class="{ invisible: term !== quarter.full_term }"
                  >{{ quarter.label }} {{ quarter.year }}</span
                >
                <span class="d-block small">
                  {{ term }}
                </span>
              </th>
            </template>
          </template>
        </tr>
      </thead>

      <!-- top level category -->
      <tbody>
        <tr
          v-for="(eventData, i) in tabulatedEventDates"
          :key="i"
          class="table-row"
        >
          <td class="table-event">{{ eventData.label }}</td>
          <td
            v-for="(cell, j) in eventData.cells"
            :key="j"
            :colspan="cell.colspan"
            class="table-quarter"
            :class="[cell.quarter === 'Spring' ? 'table-current' : '']"
          >
            {{ cell.label }} {{ cell.quarter }}
          </td>
        </tr>
      </tbody>

      <!-- for each subcategory... create a new tbody -->
      <tbody>
        <tr>
          <th colspan="7" style="font-size: 1.6rem">Subcategory</th>
        </tr>
        <tr class="table-row">
          <td class="table-event">Event name</td>
          <td id="autumn" class="table-quarter"></td>
          <td id="winter" class="table-quarter"></td>
          <td id="spring" class="table-quarter">
            {{ formatDate("2021-06-12") }}
          </td>
          <td id="full" class="table-quarter"></td>
          <td id="aterm" class="table-quarter"></td>
          <td i="bterm" class="table-quarter"></td>
        </tr>
        <tr class="table-row">
          <td class="table-event">Really long event name</td>
          <td id="autumn" class="table-quarter"></td>
          <td id="winter" class="table-quarter"></td>
          <td id="spring" class="table-quarter">
            {{ formatDate("2021-06-21") }} - {{ formatDate("2021-08-08") }}
          </td>
          <td id="full" class="table-quarter"></td>
          <td id="aterm" class="table-quarter"></td>
          <td i="bterm" class="table-quarter"></td>
        </tr>
      </tbody>
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
    tabulatedEventDates() {
      let events = [];

      this.filteredEvents.forEach((event) => {
        let eventData = {
          label: event.label,
          cells: [],
        };
        this.quarters.forEach((quarter) => {
          if (!quarter.terms) {
            // If the quarter does not have terms
            let selectedQuarterData = event.quarters.find(
              (eData) => eData.quarter === quarter.label
            );

            // push one cell spanning the quarter
            eventData.cells.push({
              label: this.eventDataFormatter(selectedQuarterData),
              colspan: 1,
            });
          } else {
            let labelForTerm = {};
            // Tries to create a label for each term
            event.quarters
              .filter((eData) => eData.quarter === quarter.label)
              .forEach((eData) => {
                labelForTerm[eData.term] = this.eventDataFormatter(eData);
              });

            let onlyFullTermHasLabel = quarter.terms
              // Check every term to not have a label or be the full term
              .every(
                (term) => !labelForTerm[term] || term === quarter.full_term
              );
            if (labelForTerm[quarter.full_term] && onlyFullTermHasLabel) {
              // Pushes a single cell spanning the whole quarter if only the
              // 'full_term' term has a label
              eventData.cells.push({
                label: labelForTerm[quarter.full_term],
                //colspan: quarter.terms.length,
              });
            } else {
              // Otherwise push a cell for each term spanning only that term
              quarter.terms.forEach((term) => {
                eventData.cells.push({
                  label: labelForTerm[term],
                  colspan: 1,
                });
              });
            }
          }
        });
        events.push(eventData);
      });

      return events;
    },
  },
  methods: {
    eventDataFormatter(eventData) {
      if (!eventData) return "";
      let fmt = "";
      if (eventData.start_date) {
        fmt = eventData.start_date;
        fmt = this.formatDate(fmt);
      }
      if (eventData.end_date) {
        fmt += ` - ${this.formatDate(eventData.end_date)}`;
      }
      if (eventData.note) {
        fmt = eventData.note;
      }
      return fmt;
    },
    formatDate(date) {
      let fmtDate = "";
      // format datetime to correct format (e.g. Sep 20, 2021)
      fmtDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      return fmtDate;
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

/*
.table {
  border: none;
}
*/

.table-event {
  //border-right: 2px solid rgb(222, 226, 230);
  min-width: 200px;
}

.table-header,
.table-quarter {
  width: 130px;
}

.table-hover {
  background-color: #f5f5f5;
}

.table-current {
  background-color: lemonchiffon;
  border: 2px solid rgb(222, 226, 230);
}
</style>
