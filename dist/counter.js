const counters = document.querySelectorAll(".counter");
const countersDiv = document.querySelector(".counters");
const speed = 500;

countersDiv.addEventListener("mouseover", () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
    };

    updateCount();
  });
});