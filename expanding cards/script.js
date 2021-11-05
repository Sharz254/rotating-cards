const sections = document.querySelectorAll(".section");



// Foreach section when clicked
sections.forEach((section) => {
    section.addEventListener("click", () => {

        // remove active class from all other section and
        // add it to the selected section
        sections.forEach((section) => {
            section.classList.remove("active");
        });
        section.classList.add("active");
    });
});