<template>
  <div class="dashboard">
    <div class="text-h5 text-left mb-2">
      MOC #{{ $route.params.id }} - Approval
    </div>
    <v-divider></v-divider>
    <v-row class="mt-2" align="center">
      <v-col cols="12" sm="7">
        <v-text-field label="MOC Title" v-model="title" disabled />
      </v-col>
      <v-col cols="12" sm="5">
        <v-text-field v-model="number" label="MOC Number" disabled />
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
          label="Category"
          :items="changeTypes"
          v-model="category"
          disabled
        ></v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select
          label="MOC Type"
          :items="mocTypes"
          v-model="type"
          disabled
        ></v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select
          label="Plant"
          :items="plants"
          v-model="plant"
          disabled
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12">
        <div class="text-h6 text-left mb-2">Attachments:</div>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card>
          <v-card-title> Study Report </v-card-title>
          <v-card-subtitle class="pb-0 pt-1">
            Process Study Report, Technical Study Report, etc.
          </v-card-subtitle>
          <v-card-actions class="pt-0">
            <v-btn color="success" text> View </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card>
          <v-card-title> DCR Initiation & Screening Form</v-card-title>
          <v-card-subtitle class="pb-0 pt-1">
            SHEM 09.00 - F.01A
          </v-card-subtitle>
          <v-card-actions class="pt-0">
            <v-btn color="success" text> View </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card>
          <v-card-title>
            DCR Initiation Form for Perm/Temp Change
          </v-card-title>
          <v-card-subtitle class="pb-0 pt-1">
            SHEM 09.00 - F.01B
          </v-card-subtitle>
          <v-card-actions class="pt-0">
            <v-btn color="success" text> View </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12">
        <v-btn
          color="primary"
          class="mr-4"
          type="submit"
          block
          :disabled="waitingApproval"
          @click="waitingApproval = true"
        >
          {{
            waitingApproval
              ? "Approved. FC Stage In Progress"
              : "Approve CDP Stage"
          }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MOCA",
  data: () => ({
    title: "",
    number: null,
    category: "",
    type: "",
    plant: "",
    waitingApproval: false,
    changeTypes: [
      "Category 1: Design Change",
      "Category 2A: Operator Instruction Change",
      "Category 2B: Maintenace Instruction Change",
      "Category 4: Calamity Equipment Change",
    ],
    mocTypes: ["Permanent MOC", "Emergency MOC", "Temporary MOC"],
    plants: [
      "MTBE-1",
      "MTBE-2",
      "MTBE-3",
      "U&O",
      "PP-1",
      "PP-2",
      "PP-3",
      "S&PH",
      "Other",
    ],
  }),
  mounted: function () {
    this.title = "Test MOC";
    this.number = this.$route.params.id;
    this.category = "Category 1: Design Change";
    this.type = "Permanent MOC";
    this.plant = "U&O";
  },
};
</script>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
