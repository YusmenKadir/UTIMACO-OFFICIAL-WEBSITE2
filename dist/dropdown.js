const app = new Vue({
  el: "#app",
  data: {
    arr: [
      {
        position: "Product Marketing Manager (m/f/x)",
        unit: "Information Security",
        location: "Campbell, USA",
      },

      {
        position: "System Engineer – Cloud Expert (m/f/x)",
        unit: "Telecommunication Solutions",
        location: "Aachen",
      },

      {
        position: "(Senior) Security and Certification Architect (m/f/x)",
        unit: "Information Security",
        location: "Aachen",
      },

      {
        position: "MarCom Marketing Manager (m/f/x) – EMEA/ AMS/ APAC",
        unit: "Corporate Unit",
        location: "EMEA/ AMS/ APAC",
      },

      {
        position: "Sales Account Manager (m/f/x)",
        unit: "Information Security",
        location: "Aachen",
      },

      {
        position: "Product Marketing Manager (m/f/x)",
        unit: "Information Security",
        location: "Aachen",
      },

      {
        position: "Technical Support Engineer (m/f/x)",
        unit: "Telecommunication Solutions",
        location: "Farnborough, UK",
      },

      {
        position: "Software Architect (m/f/x)",
        unit: "US Office",
        location: "",
      },

      {
        position: "Sourcing Manager (m/f/x)",
        unit: "Corporate Unit",
        location: "",
      },

      {
        position: "Maintenance Engineer (m/f/x) – Middle East",
        unit: "Telecommunication Solutions",
        location: "",
      },

      {
        position: "Manager (m/f/x) – Software Development",
        unit: "Information Security",
        location: "Aachen",
      },

      {
        position: "Sales Account Manager (m/f/x) – Telecommunications",
        unit: "Telecommunication Solutions",
        location: "Aachen",
      },

      {
        position: "Partner & IPR Manager (m/f/x)",
        unit: "Telecommunication Solutions",
        location: "Aachen",
      },

      {
        position: "Innovation Manager (m/f/x)",
        unit: "Telecommunication Solutions",
        location: "Aachen",
      },

      {
        position: "Quality Assurance Engineer (m/f/x)",
        unit: "Telecommunication Solutions",
        location: "Aachen",
      },
      {
        position: "Pre Sales Engineer / System Engineer (m/f/x)",
        unit: "Information Security",
        location: "Aachen",
      },
    ],
    arr2: [],
  },

  methods: {
    filterPositions(e) {
      if (e.target.value === "Position") {
        this.arr = this.arr2;
      } else {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter(
          (el) => el.position === e.target.value
        ));
      }
    },

    filterLocations(e) {
      if (e.target.value === "Location") {
        this.arr = this.arr2;
      } else {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter(
          (el) => el.location === e.target.value
        ));
      }
    },

    filterUnits(e) {
      if (e.target.value === "Business Unit") {
        this.arr = this.arr2;
      } else {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter((el) => el.unit === e.target.value));
      }
    },
  },

  computed: {},

  mounted() {
    this.arr2 = this.arr;
  },
});
