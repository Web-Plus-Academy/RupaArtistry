// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background opacity on scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        if (scrolled > 100) {
            header.style.background = 'hsla(34, 25%, 96%, 0.95)';
            header.style.backdropFilter = 'blur(16px)';
        } else {
            header.style.background = 'hsla(34, 25%, 96%, 0.8)';
            header.style.backdropFilter = 'blur(12px)';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.stat-card, .product-card, .story-card');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add click handlers for buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });



    // Mobile menu toggle (if needed)
    // const createMobileMenu = () => {
    //     const header = document.querySelector('.header-content');
    //     const nav = document.querySelector('.nav');

    //     // Create mobile menu button
    //     const mobileMenuBtn = document.createElement('button');
    //     mobileMenuBtn.innerHTML = '☰';
    //     mobileMenuBtn.className = 'mobile-menu-btn';
    //     mobileMenuBtn.style.cssText = `
    //         display: block;
    //         background: none;
    //         border: none;
    //         font-size: 1.5rem;
    //         color: var(--primary);
    //         cursor: pointer;
    //         transition: var(--transition-smooth);
    //     `;

    //     // Insert mobile menu button
    //     header.insertBefore(mobileMenuBtn, nav);

    //     // Mobile menu styles
    //     nav.style.cssText = `
    //         position: absolute;
    //         top: 100%;
    //         left: 0;
    //         right: 0;
    //         background: var(--background);
    //         border-top: 1px solid var(--border);
    //         flex-direction: column;
    //         padding: 1rem;
    //         transform: translateY(-100%);
    //         opacity: 0;
    //         pointer-events: none;
    //         transition: var(--transition-smooth);
    //     `;

    //     let isMenuOpen = false;

    //     mobileMenuBtn.addEventListener('click', () => {
    //         isMenuOpen = !isMenuOpen;

    //         if (isMenuOpen) {
    //             nav.style.transform = 'translateY(0)';
    //             nav.style.opacity = '1';
    //             nav.style.pointerEvents = 'auto';
    //             mobileMenuBtn.innerHTML = '✕';
    //         } else {
    //             nav.style.transform = 'translateY(-100%)';
    //             nav.style.opacity = '0';
    //             nav.style.pointerEvents = 'none';
    //             mobileMenuBtn.innerHTML = '☰';
    //         }
    //     });

    //     // Close mobile menu when clicking nav links
    //     nav.addEventListener('click', () => {
    //         if (window.innerWidth < 768) {
    //             isMenuOpen = false;
    //             nav.style.transform = 'translateY(-100%)';
    //             nav.style.opacity = '0';
    //             nav.style.pointerEvents = 'none';
    //             mobileMenuBtn.innerHTML = '☰';
    //         }
    //     });

    //     // Handle window resize
    //     window.addEventListener('resize', () => {
    //         if (window.innerWidth >= 768) {
    //             nav.style.cssText = 'display: flex; gap: 2rem;';
    //             mobileMenuBtn.style.display = 'none';
    //         } else {
    //             nav.style.cssText = `
    //                 position: absolute;
    //                 top: 100%;
    //                 left: 0;
    //                 right: 0;
    //                 background: var(--background);
    //                 border-top: 1px solid var(--border);
    //                 flex-direction: column;
    //                 padding: 1rem;
    //                 transform: translateY(-100%);
    //                 opacity: 0;
    //                 pointer-events: none;
    //                 transition: var(--transition-smooth);
    //             `;
    //             mobileMenuBtn.style.display = 'block';
    //         }
    //     });
    // };

    // // Initialize mobile menu for smaller screens
    // if (window.innerWidth < 768) {
    //     createMobileMenu();
    // }

    // window.addEventListener('resize', () => {
    //     if (window.innerWidth < 768 && !document.querySelector('.mobile-menu-btn')) {
    //         createMobileMenu();
    //     }
    // });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .mobile-menu-btn {
        display: none !important;
    }
    
    @media (max-width: 767px) {
        .mobile-menu-btn {
            display: block !important;
        }
        
        .nav {
            display: none !important;
        }
    }
`;

document.head.appendChild(style);



function catmullRom2bezier(points) {
    if (points.length < 2) return '';
    const path = [];
    path.push(`M ${points[0].x} ${points[0].y}`);
    for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i - 1] || points[i];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = points[i + 2] || p2;
        const c1x = p1.x + (p2.x - p0.x) / 6;
        const c1y = p1.y + (p2.y - p0.y) / 6;
        const c2x = p2.x - (p3.x - p1.x) / 6;
        const c2y = p2.y - (p3.y - p1.y) / 6;
        path.push(`C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`);
    }
    return path.join(' ');
}


const svg = document.getElementById('thread');
const glowPath = document.getElementById('threadGlow');
const mainPath = document.getElementById('threadMain');


function resizeViewBox() {
    svg.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
}
resizeViewBox();
window.addEventListener('resize', resizeViewBox);


const points = [];
let maxPoints = 64;
const state = { x: innerWidth / 2, y: innerHeight / 2, vx: 0, vy: 0, tx: innerWidth / 2, ty: innerHeight / 2 };


window.addEventListener('pointermove', e => { state.tx = e.clientX; state.ty = e.clientY; });


function tick() {
    const dx = state.tx - state.x;
    const dy = state.ty - state.y;
    state.vx = state.vx * 0.8 + dx * 0.2;
    state.vy = state.vy * 0.8 + dy * 0.2;
    state.x += state.vx;
    state.y += state.vy;
    points.push({ x: state.x, y: state.y });
    while (points.length > maxPoints) points.shift();


    if (points.length > 1) {
        const d = catmullRom2bezier(points);
        glowPath.setAttribute('d', d);
        mainPath.setAttribute('d', d);
        const speed = Math.hypot(state.vx, state.vy);
        const w = Math.max(1, Math.min(8, 2 + speed * 0.15));
        glowPath.setAttribute('stroke-width', w * 2);
        mainPath.setAttribute('stroke-width', w);
    }
    requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

function bookNow() {
    Swal.fire({
        title: 'Confirm Booking',
        text: "Do you want to confirm your booking?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#25D366', // WhatsApp green
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Book Now!'
    }).then((result) => {
        if (result.isConfirmed) {
            const phoneNumber = "+918886200010";
            const message = "Hello! I would like to book a Realistic Customized Pencil Art.";
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, "_blank");
        }
    });
}

// SweetAlert2 Launching Soon Popup
function openLaunchingSoon(productName, imageUrl) {
    Swal.fire({
        title: "🚀 Launching Soon!",
        html: `
        <img src="${imageUrl}" alt="${productName}" style="width:100px; height:auto; border-radius:8px; margin-bottom:12px;">
            <p style="font-size:16px; color:#444; margin-top:10px;">
                Our <b>${productName}</b> collection is on the way.<br>
                Click below to be the first to know when it’s live!
            </p>
        `,
        confirmButtonText: "📱 Notify Me",
        confirmButtonColor: "#ff695cff",
        background: "#fff",
        showCloseButton: true, // X button at the corner
        allowOutsideClick: false,
        allowEscapeKey: true
    }).then((result) => {
        if (result.isConfirmed) {
            let phoneNumber = "919573537417"; // Your WhatsApp number
            let message = `Hi, I would like to be notified when the "${productName}" collection launches!`;
            let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        }
    });
}

// Attach to buttons
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".product-card .btn-full").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            // if (index === 0) openLaunchingSoon("Thread Bangles", "./images/thread-bangles.jpg");
            // if (index === 1) openLaunchingSoon("Customized Pencil Art", "./images/art.png");
             if (index === 2) openLaunchingSoon("Resin Arts", "./images/resin-arts.jpg");
            if (index === 3) openLaunchingSoon("Thread Earrings", "./images/thread-earrings.jpg");
        });
    });
});

const thread = document.getElementById("thread");
const toggleBtn = document.getElementById("thread-toggle");

toggleBtn.addEventListener("click", () => {
    if (thread.style.display === "none") {
        thread.style.display = "block";
        toggleBtn.textContent = "✨ Hide Thread";
        toggleBtn.style.backgroundColor = "black"
        toggleBtn.style.color = "white"
    } else {
        thread.style.display = "none";
        toggleBtn.textContent = "✨ Show Thread";
        toggleBtn.style.backgroundColor = "white"
        toggleBtn.style.color = "black"
    }
});

// Default: thread is ON, button says hide
toggleBtn.textContent = "✨ Hide Thread";

