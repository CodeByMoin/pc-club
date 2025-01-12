document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });
      item.classList.toggle("active");
    });
  });
  if (typeof AOS !== "undefined") {
    const eventCard = document.querySelector(".event-card");
    if (eventCard) {
      eventCard.setAttribute("data-aos", "fade-up");
      eventCard.setAttribute("data-aos-duration", "1000");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== "undefined") {
    const elements = {
      ".mission-statement": "fade-up",
      ".vision-block": "fade-up",
      ".goal-item": "fade-up",
      ".impact-card": "fade-up",
    };

    for (const [selector, animation] of Object.entries(elements)) {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.setAttribute("data-aos", animation);
        element.setAttribute("data-aos-delay", (index * 100).toString());
        element.setAttribute("data-aos-duration", "1000");
      });
    }
  }

  const countElements = document.querySelectorAll(".impact-number");

  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute("data-count"));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };
    updateCounter();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  countElements.forEach((element) => observer.observe(element));
});

AOS.init({
  duration: 1000,
  once: true,
});
