function sendMail(e) {
    e.preventDefault();
    emailjs.init(`2Uql9M7zeuydWs_1a`)
    var params = {
        nombre: document.querySelector("#nombre").value,
        email: document.querySelector("#email").value,
        asunto: document.querySelector("#asunto").value,
        mensaje: document.querySelector("#mensaje").value,
    };

    var serviceId = "service_p1uf9pp";
    var templateId = "template_69n332q";

    emailjs.send(serviceId, templateId, params)
        .then(function (response) {
            Swal.fire({
                title: '¡Éxito!',
                text: 'Tu mensaje ha sido enviado correctamente.',
                icon: 'success',
                confirmButtonText: 'Genial',
                width: '600px',
                padding: '3em',
            }).then((result) => {
                if (result.isConfirmed || result.isDismissed) {
                    location.reload();
                }
            });
        })
        .catch(function (error) {
            console.error("Error sending email:", error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
                icon: 'error',
                confirmButtonText: 'Entendido',
                width: '600px',
                padding: '3em',
            }).then((result) => {
                if (result.isConfirmed || result.isDismissed) {
                    location.reload();
                }
            });
        });
}


function descargarCV(e) {
    e.preventDefault();
    const downloadLink = e.currentTarget.href;

    Swal.fire({
        title: 'Descarga en curso...',
        text: 'El CV está siendo descargado.',
        icon: 'info',
        showConfirmButton: false,
        timer: 2000
    }).then(() => {
        const tempLink = document.createElement('a');
        tempLink.href = downloadLink;
        tempLink.setAttribute('download', '');
        tempLink.style.display = 'none';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    });
}

function loadParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 5,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#000000'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                },
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 10,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 1,
                    sync: false
                }
            },
            line_linked: {
                enable: false, // Desactiva las líneas entre las estrellas
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2, // Ajusta la velocidad de movimiento
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });

}

function initializeGalleryCarousel() {
    const galleryItems = document.querySelectorAll('.gallery__item');

    galleryItems.forEach(item => {
        let currentImageIndex = 0;
        const images = item.querySelectorAll('.gallery__image');
        const prevButton = item.querySelector('.gallery__nav--prev');
        const nextButton = item.querySelector('.gallery__nav--next');

        // Suponiendo que cada gallery__item tendrá varias imágenes para el carrusel
        function showImage(index) {
            images.forEach(img => img.style.display = 'none');
            images[index].style.display = 'block';
        }

        prevButton.addEventListener('click', () => {
            if (currentImageIndex > 0) {
                currentImageIndex--;
            } else {
                currentImageIndex = images.length - 1;
            }
            showImage(currentImageIndex);
        });

        nextButton.addEventListener('click', () => {
            if (currentImageIndex < images.length - 1) {
                currentImageIndex++;
            } else {
                currentImageIndex = 0;
            }
            showImage(currentImageIndex);
        });

        showImage(currentImageIndex); // Mostrar la primera imagen al cargar
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    const sendBtn = document.getElementById('sendBtn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', descargarCV);
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const nombre = document.querySelector("#nombre").value;
            const email = document.querySelector("#email").value;
            const asunto = document.querySelector("#asunto").value;
            const mensaje = document.querySelector("#mensaje").value;

            if (!nombre || !email || !asunto || !mensaje) {
                alert("Por favor, complete todos los campos obligatorios.");
                return;
            }

            sendMail(e);
        });
    }
    loadParticles()
    initializeGalleryCarousel();
});
