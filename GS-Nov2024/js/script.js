document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".fade-container");

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target.classList.remove("hide");
            } else {
                entry.target.classList.add("hide");
                entry.target.classList.remove("show");
            }
        });
    };
    r
    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    containers.forEach(container => {
        container.classList.add("fade-container");
        observer.observe(container);
    });
});
