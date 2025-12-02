document.addEventListener("DOMContentLoaded", () => {
  // elements
  const input = document.getElementById("resumeInput");
  const dropzone = document.getElementById("dropzone");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const clearBtn = document.getElementById("clearBtn");
  const output = document.getElementById("output");

  let selectedFile = null;

  // click dropzone to open file selector
  dropzone.addEventListener("click", (e) => {
    // if clicked directly on label, open file input
    if (input) input.click();
  });

  // when a file is chosen via dialog
  input.addEventListener("change", () => {
    if (!input.files || input.files.length === 0) return;
    selectedFile = input.files[0];
    output.innerHTML = <strong style="color:var(--accent)">Selected:</strong> ${selectedFile.name};
  });

  // drag visuals
  ["dragenter", "dragover"].forEach(evt => {
    dropzone.addEventListener(evt, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("drop-active");
    });
  });

  ["dragleave", "drop", "dragend"].forEach(evt => {
    dropzone.addEventListener(evt, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("drop-active");
    });
  });

  // handle actual dropped files
  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.remove("drop-active");

    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      input.files = dt.files; // set the input's files (so change event and form work)
      selectedFile = dt.files[0];
      output.innerHTML = <strong style="color:var(--accent)">Selected:</strong> ${selectedFile.name};
    }
  });

  // Clear button
  clearBtn.addEventListener("click", () => {
    selectedFile = null;
    input.value = "";
    output.textContent = "Please choose a resume file first.";
  });

  // Analyze button — demo behavior (no backend)
  analyzeBtn.addEventListener("click", () => {
    if (!selectedFile) {
      output.textContent = "Please choose a resume file first.";
      return;
    }

    // show loader text
    output.innerHTML = <strong>Analyzing resume...</strong>;

    // simulate server processing
    setTimeout(() => {
      const sample = {
        score: 86,
        skills: ["JavaScript", "React", "Node.js", "MongoDB"],
        suggestions: ["Add Certifications", "Use bullet points for achievements"]
      };

      output.innerHTML = `
        <div><strong>Score:</strong> <span style="color:var(--accent)">${sample.score}</span></div>
        <div style="margin-top:8px"><strong>Skills Matched:</strong> ${sample.skills.join(", ")}</div>
        <div style="margin-top:8px"><strong>Suggestions:</strong> ${sample.suggestions.join(", ")}</div>
      `;
    }, 1100);
  });

  // --- subtle particle background on canvas (optional but like your screenshot)
  (function initCanvasParticles(){
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = innerWidth;
    let H = canvas.height = innerHeight;

    window.addEventListener("resize", () => {
      W = canvas.width = innerWidth;
      H = canvas.height = innerHeight;
    });

    const particles = [];
    const COUNT = Math.max(20, Math.round((W * H) / 150000));

    function rand(min, max){ return Math.random() * (max - min) + min; }

    for (let i=0;i<COUNT;i++){
      particles.push({
        x: rand(0, W),
        y: rand(0, H),
        r: rand(0.6, 3.2),
        a: rand(0, Math.PI*2),
        v: rand(0.02, 0.45),
        alpha: rand(0.03, 0.18)
      });
    }

    function step(){
      ctx.clearRect(0,0,W,H);
      for (let p of particles){
        p.x += Math.cos(p.a) * p.v;
        p.y += Math.sin(p.a) * p.v;
        p.a += 0.0008;

        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        g.addColorStop(0, rgba(160,120,255,${p.alpha}));
        g.addColorStop(1, rgba(160,120,255,0.02));

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fill();
      }
      requestAnimationFrame(step);
    }
    step();
  })();

});
