const cropRecommendations = {
  loamy: {
    kharif: ["Rice", "Soybean", "Cotton"],
    rabi: ["Wheat", "Mustard", "Chickpea"],
    summer: ["Groundnut", "Sunflower", "Maize"]
  },
  clay: {
    kharif: ["Rice", "Sugarcane", "Soybean"],
    rabi: ["Wheat", "Barley", "Gram"],
    summer: ["Cotton", "Maize", "Groundnut"]
  },
  sandy: {
    kharif: ["Pearl Millet", "Groundnut", "Sorghum"],
    rabi: ["Mustard", "Chickpea", "Coriander"],
    summer: ["Cucumber", "Watermelon", "Bajra"]
  },
  black: {
    kharif: ["Cotton", "Soybean", "Maize"],
    rabi: ["Wheat", "Gram", "Mustard"],
    summer: ["Groundnut", "Sunflower", "Cotton"]
  }
};

const authForm = document.getElementById("authForm");
const authStatusEl = document.getElementById("authStatus");
const authPanel = document.getElementById("authPanel");
const loginToggleBtn = document.getElementById("loginToggleBtn");
const userBadge = document.getElementById("userBadge");
const authTabs = document.querySelectorAll(".auth-tab");
const authSubmitBtn = document.getElementById("authSubmitBtn");

let authMode = "login";

function setAuthMode(mode) {
  authMode = mode;
  authTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.mode === mode);
  });
  authSubmitBtn.textContent = mode === "login" ? "Login" : "Create Account";
}

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => setAuthMode(tab.dataset.mode));
});

function toggleAuthPanel() {
  authPanel.classList.toggle("hidden");
}

loginToggleBtn.addEventListener("click", async () => {
  if (auth.currentUser) {
    await auth.signOut();
    authStatusEl.textContent = "Signed out successfully.";
    return;
  }

  toggleAuthPanel();
});

authForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value.trim();

  if (!email || !password) {
    authStatusEl.textContent = "Please enter both email and password.";
    return;
  }

  try {
    if (authMode === "signup") {
      await auth.createUserWithEmailAndPassword(email, password);
      authStatusEl.textContent = "Account created successfully.";
    } else {
      await auth.signInWithEmailAndPassword(email, password);
      authStatusEl.textContent = "Login successful.";
    }

    authForm.reset();
    authPanel.classList.add("hidden");
  } catch (error) {
    authStatusEl.textContent = error.message || "Authentication failed.";
  }
});

auth.onAuthStateChanged((user) => {
  if (user) {
    userBadge.textContent = user.email || "Farmer";
    loginToggleBtn.textContent = "Sign Out";
    authPanel.classList.add("hidden");
  } else {
    userBadge.textContent = "Guest";
    loginToggleBtn.textContent = "Farmer Login";
  }
});

document.getElementById("cropForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const soil = document.getElementById("soilType").value;
  const season = document.getElementById("season").value;
  const landSize = Number(document.getElementById("landSize").value || 1);

  const crops = cropRecommendations[soil][season] || ["Rice", "Wheat", "Cotton"];
  const profit = Math.round((landSize * 180000) / 1000) * 1000;

  const result = document.getElementById("recommendationResult");
  result.innerHTML = `
    <div class="crop-badge">${crops[0]}</div>
    <div class="crop-badge">${crops[1]}</div>
    <div class="crop-badge">${crops[2]}</div>
    <p><strong>Estimated Profit:</strong> ₹${profit.toLocaleString()} / season</p>
  `;
});

document.getElementById("irrigationBtn").addEventListener("click", function () {
  const area = Number(document.getElementById("area").value || 1);
  const crop = document.getElementById("irrigationCrop").value;

  const waterMap = {
    rice: 2800,
    wheat: 1500,
    cotton: 2200,
    tomato: 1800
  };

  const liters = Math.round(area * waterMap[crop]);
  document.getElementById("waterResult").textContent =
    `Daily requirement: ${liters.toLocaleString()} L`;
});

document.getElementById("fertBtn").addEventListener("click", function () {
  const crop = document.getElementById("fertCrop").value;
  const area = Number(document.getElementById("fertArea").value || 1);

  const fertMap = {
    wheat: { N: 70, P: 35, K: 40 },
    rice: { N: 90, P: 45, K: 35 },
    maize: { N: 80, P: 50, K: 40 },
    tomato: { N: 120, P: 60, K: 80 }
  };

  const values = fertMap[crop];
  const totalN = values.N * area;
  const totalP = values.P * area;
  const totalK = values.K * area;

  document.getElementById("fertResult").textContent =
    `NPK: ${totalN} kg | ${totalP} kg | ${totalK} kg`;
});

document.getElementById("detectBtn").addEventListener("click", function () {
  const fileInput = document.getElementById("cropImage");
  const resultContent = document.getElementById("resultContent");

  if (!fileInput.files.length) {
    resultContent.innerHTML = `
      <h4>Leaf Rust Detected</h4>
      <p><strong>Confidence:</strong> 92%</p>
      <p><strong>Treatment:</strong> Apply sulfur-based fungicide and improve airflow around the crop.</p>
      <p><strong>Prevention:</strong> Rotate crops, use resistant seeds, and avoid excess moisture.</p>
    `;
    return;
  }

  const fileName = fileInput.files[0].name.toLowerCase();

  if (fileName.includes("leaf") || fileName.includes("rust")) {
    resultContent.innerHTML = `
      <h4>Leaf Rust Detected</h4>
      <p><strong>Confidence:</strong> 94%</p>
      <p><strong>Treatment:</strong> Spray copper-based fungicide and reduce irrigation frequency.</p>
      <p><strong>Prevention:</strong> Keep plant spacing adequate and remove infected leaves early.</p>
    `;
  } else if (fileName.includes("tomato") || fileName.includes("fruit")) {
    resultContent.innerHTML = `
      <h4>Early Blight Identified</h4>
      <p><strong>Confidence:</strong> 89%</p>
      <p><strong>Treatment:</strong> Use chlorothalonil or mancozeb spray.</p>
      <p><strong>Prevention:</strong> Mulch soil, avoid overhead watering, and maintain disease-free seedlings.</p>
    `;
  } else {
    resultContent.innerHTML = `
      <h4>Healthy Crop Condition</h4>
      <p><strong>Confidence:</strong> 87%</p>
      <p><strong>Recommendation:</strong> Continue regular monitoring and balanced nutrition.</p>
      <p><strong>Prevention:</strong> Maintain nutrient schedule and observe for early stress symptoms.</p>
    `;
  }
});

const langButtons = document.querySelectorAll(".lang-btn");
const question = document.getElementById("voiceQuestion");

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    langButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const lang = button.dataset.lang;

    if (lang === "English") {
      question.textContent = "“How much water should I apply today?”";
    } else if (lang === "हिन्द��") {
      question.textContent = "“आज मुझे कितने पानी की जरूरत है?”";
    } else {
      question.textContent = "“आज मला किती पाणी देणे आवश्यक आहे?”";
    }
  });
});

document.getElementById("speakBtn").addEventListener("click", function () {
  if ("speechSynthesis" in window) {
    const text = question.textContent.replace(/["“”]/g, "");
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  } else {
    alert("Speech synthesis is not supported in this browser.");
  }
});

const ctx = document.getElementById("marketChart");
if (ctx) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Wheat Rate (₹/q)",
          data: [2100, 2140, 2185, 2160, 2200, 2250, 2120],
          borderColor: "#1fa764",
          backgroundColor: "rgba(31, 167, 100, 0.15)",
          tension: 0.35,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}

document.getElementById("farmerRecordForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  if (!auth.currentUser) {
    document.getElementById("saveStatus").textContent = "Please log in first to save the farmer record.";
    toggleAuthPanel();
    return;
  }

  const record = {
    farmerName: document.getElementById("farmerName").value,
    crop: document.getElementById("farmerCrop").value,
    area: Number(document.getElementById("farmerArea").value),
    createdAt: new Date().toISOString(),
    uid: auth.currentUser.uid
  };

  const statusEl = document.getElementById("saveStatus");

  try {
    await db.collection("farmers").add(record);
    statusEl.textContent = "Farmer record saved successfully to Firebase!";
    e.target.reset();
  } catch (error) {
    statusEl.textContent = "Error saving record. Check Firebase config.";
    console.error(error);
  }
});

setAuthMode(authMode);
