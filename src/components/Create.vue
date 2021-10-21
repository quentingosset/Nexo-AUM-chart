<template>
  <div class="createMoc">
    <div class="text-h5 text-left mb-2">Initiate MOC</div>
    <v-divider></v-divider>
    <v-row class="mt-2" align="center">
      <v-col cols="12" sm="7">
        <v-text-field
          label="MOC Title"
          v-model="title"
          :disabled="this.number != null"
        />
      </v-col>
      <v-col cols="12" sm="5">
        <v-text-field
          v-model="number"
          label="MOC Number"
          messages="This will be automatically generated once the MOC is initiated"
          disabled
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
          label="Category"
          :items="changeTypes"
          v-model="category"
          :disabled="this.number != null"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select
          label="MOC Type"
          :items="mocTypes"
          v-model="type"
          :disabled="this.number != null"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select
          label="Plant"
          :items="plants"
          v-model="plant"
          :disabled="this.number != null"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="12" v-if="!number">
        <v-btn
          color="primary"
          class="mr-4"
          type="submit"
          :loading="submitting"
          block
          :disabled="
            submitting ||
            title == '' ||
            category == '' ||
            type == '' ||
            plant == ''
          "
          @click="submit"
        >
          {{ submitting ? "Generating MOC Number..." : "Initiate MOC" }}
        </v-btn>
      </v-col>
      <v-col cols="12" sm="12" v-else>
        <v-btn
          color="success"
          class="mr-4"
          block
          type="submit"
          @click="proceed"
        >
          Proceed with MOC #{{ this.number }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    title: "",
    number: null,
    category: "",
    type: "",
    plant: "",
    submitting: false,
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
  methods: {
    submit: function () {
      this.submitting = true;
      setTimeout(() => {
        this.number = "500000011192";
        this.submitting = false;
      }, 1000);
    },
    proceed: function () {
      this.$router.push("/mocs/" + this.number);
    },
  },
};
</script>

<style scoped>
</style>
