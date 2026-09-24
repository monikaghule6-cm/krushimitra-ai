const STORAGE_KEY = "krushimitraAuthUser";

function getUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch (error) {
    return null;
  }
}

function saveUser(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function clearUser() {
  localStorage.removeItem(STORAGE_KEY);
}

function renderSignedInState(user) {
  const badge = document.querySelector(".user-badge");
  const loginButton = document.querySelector(".nav-actions .primary-btn, .nav-actions a.primary-btn");

  if (badge) {
    badge.textContent = user?.name || user?.email?.split("@")[0] || "Farmer";
  }

  if (loginButton) {
    loginButton.textContent = "Sign Out";
    loginButton.href = "#";
    loginButton.dataset.mode = "logout";
  }
}

function renderSignedOutState() {
  const badge = document.querySelector(".user-badge");
  const loginButton = document.querySelector(".nav-actions .primary-btn, .nav-actions a.primary-btn");

  if (badge) {
    badge.textContent = "Guest";
  }

  if (loginButton) {
    loginButton.textContent = "Farmer Login";
    loginButton.href = "login.html";
    loginButton.dataset.mode = "login";
  }
}

function syncAuthUI() {
  const user = getUser();
  if (user) {
    renderSignedInState(user);
  } else {
    renderSignedOutState();
  }
}

const authTabs = document.querySelectorAll(".auth-tab");
const authForm = document.getElementById("authForm");
const authStatusEl = document.getElementById("authStatus");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const nameField = document.getElementById("nameField");

let authMode = "login";

function setAuthMode(mode) {
  authMode = mode;

  if (nameField) {
    nameField.classList.toggle("hidden", mode !== "signup");
  }

  authTabs.forEach((tab) => {
    const isActive = tab.dataset.mode === mode;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  if (authSubmitBtn) {
    authSubmitBtn.textContent = mode === "signup" ? "Create Account" : "Login";
  }
}

if (authTabs.length) {
  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => setAuthMode(tab.dataset.mode));
  });
}

if (authForm) {
  authForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("authName")?.value.trim() || "Farmer";
    const email = document.getElementById("authEmail")?.value.trim();
    const password = document.getElementById("authPassword")?.value.trim();

    if (!email || !password) {
      if (authStatusEl) {
        authStatusEl.textContent = "Please enter both email and password.";
      }
      return;
    }

    if (authMode === "signup" && !name) {
      if (authStatusEl) {
        authStatusEl.textContent = "Please enter your full name.";
      }
      return;
    }

    const user = { name, email, password };
    saveUser(user);
    renderSignedInState(user);

    if (authStatusEl) {
      authStatusEl.textContent = authMode === "signup"
        ? "Account created successfully."
        : "Login successful.";
    }

    authForm.reset();
    setAuthMode("login");
  });
}

const homeLoginButton = document.querySelector(".nav-actions .primary-btn, .nav-actions a.primary-btn");
if (homeLoginButton) {
  homeLoginButton.addEventListener("click", (event) => {
    const user = getUser();

    if (user) {
      event.preventDefault();
      clearUser();
      renderSignedOutState();

      if (authStatusEl) {
        authStatusEl.textContent = "Signed out successfully.";
      }
    }
  });
}

syncAuthUI();
setAuthMode(authMode);
