const app = new Vue({
  el: "#app2",
  data: {
    arr: [
      {
        date: "03/Dec 2020",
        title:
          "Industry meets research: Utimaco joins the Horizon 2020 project CONCORDIA",
        content:
          "As part of its cooperation with the EU research program, the international provider of IT security solutions is specifically involved in the areas of eHealth and eMobility. Utimaco will thus be supporting innovations that result from...",
      },

      {
        date: "07/Oct 2020",
        title:
          "BPC to become part of Utimaco’s partner program: Secure end-to-end payment accelerates digitalization",
        content:
          "Combination of BPC’s SmartVista platform and Utimaco’s Atalla HSM creates a secure end-to-end solution for the banking and finance sector. Digitalization has long since become the determining factor in all industries",
      },

      {
        date: "30/Sep 2020",
        title:
          "Utimaco Collaborates with Equinix to provide PaymentHSM-as-a-Service via Platform Equinix",
        content:
          "Utimaco will offer Atalla PaymentHSMaaS, one of its premier services offerings, via Platform Equinix. This solution enables customers to move payment keys and hardware security modules (HSM) workloads from...",
      },

      {
        date: "11/Nov 2020",
        title:
          "AGS Transact Technologies and Utimaco partner to provide cyber-defense technology for digital payments in India & South-east Asia",
        content:
          "Under this partnership, the companies will offer crypto-key security solutions to organizations across sectors.Financial services and insurance...",
      },

      {
        date: "09/Jul 2020",
        title:
          "Utimaco sets the stage for the era of post-quantum cryptography with Q-safe",
        content:
          "Utimaco is the first vendor to offer a hardware security module (HSM) that enables companies to protect their systems against quantum computer-based attacks. The Q-safe 1.0 firmware extension combined with Utimaco’s CryptoServer HSM..",
      },

      {
        date: "16/Jun 2020",
        title:
          "eMudhra Joins Utimaco’s U-Trust Partner Program as a Technology Partner",
        content:
          "Utimaco, a leading provider of professional IT security solutions, and eMudhra, a global digital enabler and a premier provider of PKI and Cybersecurity solutions, will work together and jointly offer products in a wide range of specific areas including..",
      },

      {
        date: "02/Apr 2020",
        title: "Utimaco completes acquisition of GEOBRIDGE",
        content:
          "Following the announcement of the acquisition at this year’s RSA conference, the acquisition was approved by the authorities as part of the CFIUS process on March 9 and is legally effective as of March 31. With the completed acquisition, all GEOBRIDGE employees and customers..",
      },

      {
        date: "20/Jan 2020",
        title: "Utimaco wins Fintech Award 2019 for its Block-safe solution",
        content:
          "The award, which was announced in an Award Presentation Ceremony in Hongkong on 17 January, recognizes Utimaco’s Block-safe Hardware Security Module (HSM) which secures sensitive identities, keys and data used in blockchain-based distributed computing...",
      },
    ],
    term: "",
    error: false,
  },

  computed: {
    filterNews() {
      return this.arr.filter((item) => {
        const success = item.content
          .toLowerCase()
          .match(this.term.toLowerCase());
        if (success) {
          return success;
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 500);
        }
      });
    },
  },
});
