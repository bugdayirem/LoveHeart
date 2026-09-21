// JavaScript source code


const heart = document.getElementById("heart");

const total = 100;
const scales = [15, 9, 9, 9, 9];
for (let s = 0; s < scales.length; s++) {
    for (let i = 0; i < total; i++) {
        const t = (i / total) * Math.PI * 2;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t);

        const text = document.createElement("span");
        text.innerText = "I Love You";
        text.className = "love";
        text.style.animationDelay = `${i * 0.02}s`;
        const scale = scales[s];

        let centerX = 300;
        let centerY = 300

        if (s === 1) {
            // sol üst küçük kalp
            centerX = -80;
            centerY = 80;
        }

        if (s === 2) {
            // sað üst küçük kalp
            centerX = 680;
            centerY = 80;
        }

        if (s === 3) {
            // sol alt küçük kalp
            centerX = -80;
            centerY = 520;
        }

        if (s === 4) {
            // sað alt küçük kalp
            centerX = 680;
            centerY = 520;
        }
        text.style.left = centerX + x * scale + "px";
        text.style.top = centerY - y * scale + "px";
        text.style.transform = 'translate(-50%, -50%) rotate(${t}rad)';
        heart.appendChild(text);
    }
}
 