<template>
  <v-container fluid class="main footer">
    <h2 class="white--text text-left pa-5 my-5">
      Got a question? Call 000-***-***-9856
    </h2>
    <v-row align-content="center" style="min-width: 90%">
      <!-- <v-col class="d-flex justify-center"> -->
      <v-col offset-sm="1" cols="6" sm="3">
        <ul style="list-style: none" class="caption white--text">
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
      </v-col>
      <v-col cols="6" sm="3">
        <ul style="list-style: none" class="caption white--text">
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
      </v-col>
      <v-col cols="6" sm="3">
        <ul style="list-style: none" class="caption white--text">
          <li>Account</li>
          <li>Ways Of Seeing</li>
          <li>Corporate Information</li>
          <li>Only On VTube</li>
        </ul></v-col
      >
      <v-col cols="6" sm="2">
        <ul style="list-style: none" class="caption white--text">
          <li>Media Center</li>
          <li>Terms Of Use</li>
          <li>Contact Us</li>
        </ul></v-col
      >
      <!-- </v-col> -->
    </v-row>
    <h2 class="body-2 white--text my-16 ml-5 text-left">
      Copywrite &#169;Shahab
    </h2>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 100px;
  // padding: 50px 100px 40px 250px;
}

ul li:not(:last-child) {
  margin: 20px 0px;
}
</style>
