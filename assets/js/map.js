document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = ` <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0"
        marginwidth="0" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.4678772640464!2d-3.0264309233057323!3d43.3253975735697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5983b630dfc9%3A0x313cc5c8e04a12b8!2sPe%C3%B1ota%20Kalea%2C%204%2C%2048980%20Portugalete%2C%20Bizkaia!5e0!3m2!1ses!2ses!4v1702583059753!5m2!1ses!2ses"></iframe>`;
    }, 500)
})