document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.getElementById("navbar-toggler");
  const menu = document.getElementById("navbar-menu");

  // Toggle menu saat hamburger diklik
  toggler.addEventListener("click", function () {
    menu.classList.toggle("active");
    toggler.classList.toggle("active");
  });

  // Smooth scroll untuk anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Tutup menu mobile setelah klik
      menu.classList.remove("active");
      toggler.classList.remove("active");
    });
  });

  // Update active navigation saat scroll
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });

  // Form handling
  document.querySelectorAll(".contact-form").forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const successMessage = document.createElement("div");
      successMessage.className = "success-message";
      successMessage.textContent =
        "Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.";

      form.appendChild(successMessage);
      this.reset();

      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    });
  });
});

// Testimonial interactions
document.addEventListener("DOMContentLoaded", function () {
  // Like button functionality
  document.querySelectorAll(".like-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const icon = this.querySelector("i");
      const count = parseInt(this.textContent.trim());

      if (icon.classList.contains("far")) {
        // Like
        icon.classList.remove("far");
        icon.classList.add("fas");
        this.classList.add("liked");
        this.innerHTML = `<i class="fas fa-heart"></i> ${count + 1}`;
      } else {
        // Unlike
        icon.classList.remove("fas");
        icon.classList.add("far");
        this.classList.remove("liked");
        this.innerHTML = `<i class="far fa-heart"></i> ${count - 1}`;
      }
    });
  });

  // Retweet button functionality
  document.querySelectorAll(".retweet-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const icon = this.querySelector("i");
      const count = parseInt(this.textContent.trim());

      if (icon.classList.contains("fa-retweet")) {
        // Retweet
        this.innerHTML = `<i class="fas fa-retweet"></i> ${count + 1}`;
        this.style.color = "#17bf63";

        // Show notification
        showNotification("Tweet berhasil di-retweet!");
      }
    });
  });

  // Share button functionality
  document.querySelectorAll(".share-btn").forEach((button) => {
    button.addEventListener("click", function () {
      showNotification("Link testimoni telah disalin!");

      // Copy to clipboard simulation
      const tweetText =
        this.closest(".testimonial-card").querySelector(
          ".tweet-content p"
        ).textContent;
      navigator.clipboard.writeText(tweetText).then(() => {
        console.log("Text copied to clipboard");
      });
    });
  });

  // Reply button functionality
  document.querySelectorAll(".reply-btn").forEach((button) => {
    button.addEventListener("click", function () {
      showNotification("Fitur balasan akan segera hadir!");
    });
  });

  // Notification function
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.opacity = "1";
      notification.style.transform = "translateY(0)";
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transform = "translateY(-20px)";
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
});

// Add notification styles
const style = document.createElement("style");
style.textContent = `
  .notification {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #1da1f2;
    color: white;
    padding: 15px 25px;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 10000;
    font-weight: 500;
  }
`;
document.head.appendChild(style);

// Add animation for business cards
document.addEventListener("DOMContentLoaded", function () {
  const businessCards = document.querySelectorAll(".business-card");

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  // Set initial state and observe
  businessCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Add click handler for buttons
  document.querySelectorAll(".btn-outline").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      // Show notification
      showNotification("Halaman detail akan segera hadir!");
    });
  });

  // Notification function
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.opacity = "1";
      notification.style.transform = "translateY(0)";
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transform = "translateY(-20px)";
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
});

// Add animation for news cards
document.addEventListener("DOMContentLoaded", function () {
  const newsCards = document.querySelectorAll(".news-card");

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  // Set initial state and observe
  newsCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Add click handler for buttons
  document.querySelectorAll(".btn-outline").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      // Show notification
      showNotification("Halaman detail berita akan segera hadir!");
    });
  });

  // Notification function
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.opacity = "1";
      notification.style.transform = "translateY(0)";
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transform = "translateY(-20px)";
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
});

// Portfolio interactions
document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(".service-item");
  const valueItems = document.querySelectorAll(".value-item");

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  // Animate service items
  serviceItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
  });

  // Animate value items
  valueItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
  });
});

// Portfolio Slider
document.addEventListener("DOMContentLoaded", function () {
  const sliderTrack = document.getElementById("slider-track");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const indicators = document.querySelectorAll(".indicator");

  let currentSlide = 0;
  const totalSlides = slides.length;
  let autoSlideInterval;

  // Function to go to a specific slide
  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const translateX = -currentSlide * 100;
    sliderTrack.style.transform = `translateX(${translateX}%)`;

    // Update indicators
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide);
    });
  }

  // Function to go to next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
  }

  // Function to go to previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
  }

  // Start auto slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  // Stop auto slide
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Event listeners
  nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  // Indicator click events
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      goToSlide(index);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // Pause auto slide on hover
  sliderTrack.addEventListener("mouseenter", stopAutoSlide);
  sliderTrack.addEventListener("mouseleave", startAutoSlide);

  // Initialize
  goToSlide(0);
  startAutoSlide();
});

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // reset
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // aktifkan yg dipilih
    tab.classList.add("active");
    const target = tab.getAttribute("data-target");
    document.getElementById(target).classList.add("active");
  });
});

// Contact form handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Create mailto link
    const mailtoLink = `abayworemax@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\nTelepon: ${phone}\n\n${message}`
    )}`;

    // Kirim tanpa pindah tab
    const hiddenLink = document.createElement("a");
    hiddenLink.href = waURL;
    hiddenLink.target = "hiddenFrame";
    document.body.appendChild(hiddenLink);

    // Open email client
    window.location.href = mailtoLink;

    // Munculin notifikasi sukses
    const notif = document.getElementById("notif");
    notif.style.display = "block";
    notif.style.opacity = "1";

    // Sembunyiin notif setelah 3 detik
    setTimeout(() => {
      notif.style.opacity = "0";
      setTimeout(() => (notif.style.display = "none"), 500);
    }, 3000);

    // Reset form
    e.target.reset();
  });

  // Add animation for contact cards
  const infoCards = document.querySelectorAll(".info-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  infoCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
});
