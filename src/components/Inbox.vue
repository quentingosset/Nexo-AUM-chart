<template>
  <div class="dashboard">
    <div class="text-h5 text-left mb-2">Inbox</div>
    <v-divider></v-divider>
    <v-row class="mt-2" align="center">
      <v-col cols="12" sm="12">
        <v-data-table
          class="elevation-2"
          :headers="headers"
          :items="items"
          search
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small @click="viewMOC(item)" class="mr-2">mdi-eye</v-icon>
            <v-icon small @click="viewMOC(item)">mdi-pencil</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MOC",
  data: () => ({
    headers: [
      { text: "MOC #", value: "id" },
      { text: "Title", value: "title" },
      { text: "Initiated On", value: "createdOn" },
      { text: "Initiator", value: "initiator" },
      { text: "Assigned To", value: "assignedTo" },
      { text: "Stage", value: "stage" },
      { text: "Pending With", value: "pendingWith" },
      { text: "Actions", value: "actions" },
    ],
    items: [
      {
        id: "500000010849",
        title: "Replacing steam traps",
        createdOn: "April 14, 2021",
        initiator: "Mishal Al-Ghamdi",
        assignedTo: "Mohammed Al-Shammri",
        stage: "FC",
        pendingWith: "Ali Al-Sayed",
      },
      {
        id: "500000002819",
        title: "Utilization of portable compressors",
        createdOn: "April 2, 2021",
        initiator: "Khaled Ibn Rubbian",
        assignedTo: "Mohammed Al-Shammri",
        stage: "FC",
        pendingWith: "Ali Al-Sayed",
      },
      {
        id: "500000010012",
        createdOn: "March 22, 2021",
        title: "Installing additional supports for 200-P-06",
        initiator: "Yusif Al-Ansari",
        assignedTo: "Mohammed Al-Shammri",
        stage: "AFC",
        pendingWith: "Ali Al-Sayed",
      },
      {
        id: "500000008819",
        createdOn: "January 7, 2021",
        title: "Implementing HAZOP recommendation",
        initiator: "Musaed Al-Jameel",
        assignedTo: "Mamdouh Al-Enazi",
        stage: "CDP",
        pendingWith: "Ali Al-Sayed",
      },
      {
        id: "500000010102",
        createdOn: "August 17, 2020",
        title:
          "Implementing asset inventory system to IZ CyberSecurity network",
        initiator: "Hermes Garcia",
        assignedTo: "Mamdouh Al-Enazi",
        stage: "CDP",
        pendingWith: "Ali Al-Sayed",
      },
    ],
  }),
  mounted() {},
  methods: {
    viewMOC(item) {
      this.$router.push("/mocsa/" + item.id);
    },
  },
};
</script>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
