const app = new Vue({
    el: "#app-blogs",
    data: {
      arr: [
        {
          date: "13/May 2020",
          title:
            "Reshaping the Payment Industry After COVID-19",
          content:
            "The global COVID-19 crisis is unlike anything in modern history a major disruptive force that has prompted an immediate response to safeguard lives. As this health crisis has continued to spread, companies around the world have worked to continue operations by establishing...",
        },
  
        {
          date: "21/Apr 2020",
          title:
            "The Atalla Secure Configuration Assistant and Concepts of Hyper-Security",
          content:
            "The notion of hyper-security in the era of Information Technology security and for the general security of computer systems is still an experimental concept. It is a set of ideas rather than a well-defined term. Here we shall define hyper-security simply as the...",
        },
  
        {
          date: "09/Apr 2020",
          title:
            "Integration, Automation and Open API in Banking Infrastructure to Accelerate Service Innovation",
          content:
            "Banks have started a process of reinventing their value proposition as a highly automated and integrated platform for a continuously innovating portfolio of financial services. Payment is key to this and in the same time under threat by external market...",
        },
  
        {
          date: "02/Apr 2020",
          title:
            "Remote Management in the Age of Global Disruptions",
          content:
            "As the world comes to terms with the COVID-19 pandemic and social distancing becomes a focal point in flattening the curve, businesses around the globe are confronted with challenges associated with remote management. In this climate, working remotely has...",
        },
  
        {
          date: "10/Jun 2020",
          title:
            "7 Steps to Reduce Total Cost of Ownership Around HSMs",
          content:
            "The financial market undergoes significant changes. This article will look at how the choice of a suitable HSM and crypto strategy will support and enable a fast, targeted and enforced pursuit of the corporate goals. Severe competition and increasingly volatile...",
        },
  
        {
          date: "26/May 2020",
          title:
            "Itan Barmes (Deloitte) - We need to Face the Quantum Risk Now!",
          content:
            "Itan Barnes is part of Deloitte's cyber risk services team which helps companies to mitigate the quantum risk. Itan emphasizes the urgency of preparing company and infrastructure.Mr. Barmes is a cybersecurity expert with a strong focus on cryptography...",
        },
  
        {
          date: "19/May 2020",
          title: "Michele Mosca - Ramping Up The PQC Transition Process with Internal and External Stakeholders",
          content:
            "Michele Mosca (University of Waterloo / evolutionQ) advises CIOs and CISOs on how to get prepared for the post quantum era. This requires defined people in charge and enough time to get all changes implemented...",
        },
  
        {
          date: "04/May 2020",
          title: "Michael Engel - Encrypting Retail Banking Services for End-to-End Security (video)",
          content:
            "Diebold Nixdorf is a solution provider of end to end solutions to financial service organizations. In this video, Michael Engel explains, why he is partners with Utimaco for that critical element of encryption technology in financial services across the...",
        },
      ],
      term: "",
      error: false,
    },
  
    computed: {
      filterBlogs() {
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
  