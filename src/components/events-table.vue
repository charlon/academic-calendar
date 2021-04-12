<template>
  <ul>

    <template v-for="q in myQuarters" v-bind:key="q.quarter">
      <li>{{ q.quarter }} {{ q.year }}</li>
    </template>
    
  </ul>

  <div class="">
    <table class="table table-bordered table-sm">


      <!-- build the table header for the given calendar years i.e. 2020-2021 -->
      <thead class="thead-light">
        <tr>
          <th rowspan="2" class="align-top"></th>
          <!-- loop through quarters -->
          <template v-for="q in myQuarters" v-bind:key="q.quarter">
            <th v-if="q.quarter == 'Summer'" colspan="3" class="align-top">{{ q.quarter }} {{ q.year }}</th>
            <th v-else rowspan="2" class="align-top">{{ q.quarter }} {{ q.year }}</th>
          </template>
        </tr>
        <tr class="small">
          <th class="">Full-term</th>
          <th class="">A-term</th>
          <th class="">B-term</th>
        </tr>
      </thead>

      

      <tbody>
        <tr>
          <td style="width: 30%">Instruction begins</td>
          <td id="autumn" class="text-nowrap">Sep 30, 2020</td>
          <td id="winter" class="text-nowrap">Jan 4, 2021</td>
          <td id="spring" class="text-nowrap">Mar 29, 2021</td>
          <td id="full" class="text-nowrap">Jun 21, 2021</td>
          <td id="aterm" class="text-nowrap">Jun 21, 2021</td>
          <td i="bterm" class="text-nowrap">Jul 22, 2021</td>
        </tr>
        <tr>
          <td class="">Last Day of Instruction</td>
          <td id="autumn" class="text-nowrap">Dec 11, 2020</td>
          <td id="winter" class="text-nowrap">Mar 12, 2021</td>
          <td id="spring" class="text-nowrap">Jun 4, 2021</td>
          <td id="full" class="text-nowrap">Aug 20, 2021</td>
          <td id="aterm" class="text-nowrap">Jul 21, 2021</td>
          <td i="bterm" class="text-nowrap">Aug 20, 2021</td>
        </tr>
        <tr>
          <td class="">Final Examination Week</td>
          <td id="autumn" class="text-nowrap">Dec 12-18, 2020</td>
          <td id="winter" class="text-nowrap">Mar 13-19, 2021</td>
          <td id="spring" class="text-nowrap">Jun 7-11, 2021</td>
          <td id="full" colspan="3">Typically the last class day of class</td>
        </tr>
      </tbody>

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
          <td class="">Bothell Campus</td>
          <td id="autumn" class="text-nowrap"></td>
          <td id="winter" class="text-nowrap"></td>
          <td id="spring" class="text-nowrap">Jun 13, 2021</td>
          <td id="full" class="text-nowrap"></td>
          <td id="aterm" class="text-nowrap"></td>
          <td id="bterm" class="text-nowrap"></td>
        </tr>
        <tr>
          <td class="">Tacoma Campus</td>
          <td id="autumn" class="text-nowrap"></td>
          <td id="winter" class="text-nowrap"></td>
          <td id="spring" class="text-nowrap">Jun 11, 2021</td>
          <td id="full" class="text-nowrap"></td>
          <td id="aterm" class="text-nowrap"></td>
          <td id="bterm" class="text-nowrap"></td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th colspan="7" class="border-0">Quarter Breaks (subcategory)</th>
        </tr>
        <tr>
          <td style="width: 30%">Winter Break</td>
          <td id="autumn" class="text-nowrap">Dec 19, 2020-Jan 3, 2021</td>
          <td id="winter" class="text-nowrap"></td>
          <td id="spring" class="text-nowrap"></td>
          <td id="full" class="text-nowrap"></td>
          <td id="aterm" class="text-nowrap"></td>
          <td i="bterm" class="text-nowrap"></td>
        </tr>
        <tr>
          <td class="">Spring Break</td>
          <td id="autumn" class="text-nowrap"></td>
          <td id="winter" class="text-nowrap">Mar 20-28, 2021</td>
          <td id="spring" class="text-nowrap"></td>
          <td id="full" class="text-nowrap"></td>
          <td id="aterm" class="text-nowrap"></td>
          <td id="bterm" class="text-nowrap"></td>
        </tr>
        <tr>
          <td class="">Summer Break</td>
          <td id="autumn" class="text-nowrap"></td>
          <td id="winter" class="text-nowrap"></td>
          <td id="spring" class="text-nowrap">Jun 12-20, 2021</td>
          <td id="full" class="text-nowrap"></td>
          <td id="aterm" class="text-nowrap"></td>
          <td id="bterm" class="text-nowrap"></td>
        </tr>
        <tr>
          <td class="">Autumn Break</td>
          <td id="autumn" class="text-nowrap"></td>
          <td id="winter" class="text-nowrap"></td>
          <td id="spring" class="text-nowrap">Jun 11, 2021</td>
          <td id="full" colspan="3" class="text-nowrap">Aug 21-Sep 28, 2021</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Calendars from "../assets/calendars.json";

export default {
  data() {
    return {
      myQuarters: [
        { quarter: "Autumn", year: 2020 },
        { quarter: "Winter", year: 2021 },
        { quarter: "Spring", year: 2021 },
        { quarter: "Summer", year: 2021 },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.css";

h2 {
  color: palevioletred !important;
}
</style>
  

