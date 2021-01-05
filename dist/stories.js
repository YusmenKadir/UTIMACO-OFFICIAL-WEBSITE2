const app = new Vue({
  el: "#app4",
  data: {
    arr: [
      {
        title: "Irdeto",
        image: "./img/UTIMACO CASE STUDIES/irdeto_logo.png",
        category: "Media",
        href:"./irdeto.html",
        content:
          "With Utimaco we have a partnership that fulfils our requirements both from a technological and operational standpoint. The solution is robust and but we also benefit from the logistical and...",
      },

      {
        title: "HashiCorp",
        image:
          "./img/UTIMACO CASE STUDIES/HashiCorp_PrimaryLogo_Black.png_h_250",
        category: "Automation Software",
        href:"./hashicorp.html",
        content:
          "HashiCorp and Utimaco have partnered to provide an integrated solution for customers for a comprehensive security solution to centralize secrets management with regulatory compliance in-mind.",
      },

      {
        title: "Nask",
        image: "./img/UTIMACO CASE STUDIES/NASK_kolor_(4).png",
        href:"./nask.html",
        category: "Security",
        content:
          "The implementation of cryptographic hardware solutions in highly individual systems often requires individual support from the vendor: “Basically, we decided to go for Utimaco because they wanted to..",
      },

      {
        title: "Axfood",
        image: "./img/UTIMACO CASE STUDIES/Axfood_logo.png",
        category: "Retail",
        href:"./axfood.html",
        content:
          "With its multiple brands and store locations, Axfood manages unprecedented amounts of data, but was able to successfully alter their infrastructure and complete the deployment of Utimaco’s HSM...",
      },

      {
        title: "Halcom",
        image: "./img/UTIMACO CASE STUDIES/halcom.png",
        category: "Digital Banking",
        content:
          "Moreover, Utimaco was quick to respond and flexible in discussing the solution Halcom was interested in. Utimaco truly turned out to be the HSM provider of choice, above all for their flexibility and cost-efficiency. ",
      },

      {
        title: "Inwebo",
        image: "./img/UTIMACO CASE STUDIES/inwebo-logo-png.png",
        category: "Security",
        content:
          "Utimaco’s FIPS-certified hardware security module generates and stores the secure cryptographic keys that are required for authenticating one person via one or several devices, for example their car or their phone.",
      },

      {
        title: "MQA",
        image: "./img/UTIMACO CASE STUDIES/UNAMAS-MQA.jpg",
        category: "Science",
        content:
          "Utimaco provides a FIPS-certified hardware security module (HSM) that generates and stores cryptographic keys, and generates secure digital signatures that authenticate the audio data. Using the custom capabilities...",
      },
      {
        title: "Silver Spring Networks",
        image: "./img/UTIMACO CASE STUDIES/silver-spring-logo.jpg",
        category: "Networking",
        content:
          "An HSM enables a hardware-based solution to check the authenticity of every command received by a smart meter, preventing abuse by third parties. This system leverages asymmetrical cryptography...",
      },

      {
        title: "Ministry of Justice and Security",
        image:
          "./img/UTIMACO CASE STUDIES/Ministerie_van_Justitie_en_Veiligheid_Logo.png",
        category: "Government",
        content:
          "The experience gained from working with Utimaco, their expertise in the area of ICAO, as well as their comprehensive support of the required algorithms for choosing to collaborate...",
      },
      {
        title: "SVC",
        image: "./img/UTIMACO CASE STUDIES/svc_logo.png",
        category: "Insurance",
        content:
          "To protect patient health records, a multi-layered PKI was used: certificates are issued and stored on smartcards and other tokens. This enables different stakeholder to authenticate themselves to sign,encrypt... ",
      },
      {
        title: "Nexus",
        image:
          "./img/UTIMACO CASE STUDIES/04-Nexus-Logo-Tagline-Hrz-3-Rows-H400pxl-1024x302.png",
        category: "Security",
        content:
          "Greenwave uses the neXus cloud-based Certificate Service to create, deploy and administer certificates, which is the foundation of the security solution. NeXus Certificate Service is based on..",
      },
      {
        title: " Randtronics",
        image: "./img/UTIMACO CASE STUDIES/randtronics-logo.png",
        category: "Security",
        content:
          "As inherent Root of Trust for their data privacy management program, Randtronics relies on Utimaco Hardware Security Modules to generate, store and manage cryptographic keys safely...",
      },
      {
        title: "C2 Company",
        image: "./img/UTIMACO CASE STUDIES/c2.png",
        category: "Networking",
        content:
          "Utimaco provided a FIPS-certified hardware security module (physical level 4) that is used to generate and store secure encrypted keys and digital certificates, used to verify that a particular...",
      },
      {
        title: "EIUS",
        image: "./img/UTIMACO CASE STUDIES/EIUS_logo.png",
        category: "E-services",
        content:
          "The CryptoServer Se Gen2 was integrated into existing EIUS applications relying on the JCA/JCE cryptographic framework by replacing the existing security provider with the Utimaco CryptoServer provider.",
      },
      {
        title: "EScrypt",
        image: "./img/UTIMACO CASE STUDIES/logo_big-escrypt.png",
        category: "Security",
        content:
          "Using the comfortable development environment, the CryptoServer SDK, the security experts of ESCRYPT have implemented a customized firmware module to ensure a comprehensive and...",
      },
      {
        title: "KTU",
        image: "./img/UTIMACO CASE STUDIES/ktu-logo-lt-pilnas.png",
        category: "Science",
        content:
          "With the help and guidance of Utimaco partner Altacom, the Kaunas University of Technology successfully deployed a hardware-based DNSSEC Signing solution to ensure.lt top-level domain administration..",
      },
    ],
    links: [
      "All",
      "Retail",
      "Security",
      "Media",
      "Automation Software",
      "Digital Banking",
      "Science",
      "Networking",
      "Insurance",
      "Government",
      "E-services",
    ],
    arr2: [],
  },

  methods: {
    sortStories(val) {
      if (val === "All") {
        return (this.arr = this.arr2);
      }
      if (val === "Retail") {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter((item) => item.category === val));
      }
      if (val === "Security") {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter((item) => item.category === val));
      }
      if (val === "Media") {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter((item) => item.category === val));
      }
      if (val === "Automation Software") {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter((item) => item.category === val));
      }
      if (val === "Digital Banking") {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter((item) => item.category === val));
      }
      if (val === "Science") {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter((item) => item.category === val));
      }
      if (val === "Networking") {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter((item) => item.category === val));
      }
      if (val === "Insurance") {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter((item) => item.category === val));
      }
      if (val === "Government") {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter((item) => item.category === val));
      }
      if (val === "E-services") {
        this.arr = this.arr2;
        return (this.arr = this.arr.filter((item) => item.category === val));
      }
    },
  },

  mounted() {
    this.arr2 = this.arr;
  },
});



// const app2 = new Vue({
//   el:'#app-more-stories',
//   data:{

//   },


// }); 