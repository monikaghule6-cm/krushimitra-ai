const authForm = document.getElementById("authForm");
const authStatus = document.getElementById("authStatus");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const nameField = document.getElementById("nameField");
const resetPasswordBtn = document.getElementById("resetPasswordBtn");
const authTabs = document.querySelectorAll(".auth-tab");
let authMode = "login";

const messages = {
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/user-not-found": "No account was found with this email.",
  "auth/wrong-password": "Incorrect password.",
  "auth/invalid-credential": "Email or password is incorrect.",
  "auth/email-already-in-use": "This email is already registered.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/too-many-requests": "Too many attempts. Please try again later."
};

function showStatus(message, isError = false) {
  if (!authStatus) return;
  authStatus.textContent = message;
  authStatus.style.color = isError ? "var(--danger)" : "var(--green-900)";
}

function setAuthMode(mode) {
  authMode = mode;
  nameField?.classList.toggle("hidden", mode !== "signup");
  authSubmitBtn.textContent = mode === "signup" ? "Create Account" : "Login";
  document.getElementById("authPassword")?.setAttribute(
    "autocomplete",
    mode === "signup" ? "new-password" : "current-password"
  );
  authTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.mode === mode));
}

authTabs.forEach((tab) => tab.addEventListener("click", () => setAuthMode(tab.dataset.mode)));

authForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  const name = document.getElementById("authName")?.value.trim() || "Farmer";
  const remember = document.getElementById("rememberMe")?.checked;

  if (!email || !password || (authMode === "signup" && !name)) {
    showStatus("Please complete all required fields.", true);
    return;
  }

  authSubmitBtn.disabled = true;
  try {
    await auth.setPersistence(
      remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION
    );

    if (authMode === "signup") {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({ displayName: name });
      showStatus("Account created successfully. Redirecting...");
    } else {
      await auth.signInWithEmailAndPassword(email, password);
      showStatus("Login successful. Redirecting...");
    }
    setTimeout(() => { window.location.href = "index.html"; }, 700);
  } catch (error) {
    showStatus(messages[error.code] || error.message || "Authentication failed.", true);
  } finally {
    authSubmitBtn.disabled = false;
  }
});

resetPasswordBtn?.addEventListener("click", async () => {
  const email = document.getElementById("authEmail")?.value.trim();
  if (!email) {
    showStatus("Enter your email first to reset your password.", true);
    return;
  }
  try {
    await auth.sendPasswordResetEmail(email);
    showStatus("Password reset email sent. Check your inbox.");
  } catch (error) {
    showStatus(messages[error.code] || "Unable to send reset email.", true);
  }
});

const userBadge = document.querySelector(".user-badge");
const loginButton = document.querySelector(".nav-actions .primary-btn");
if (typeof auth !== "undefined") {
  auth.onAuthStateChanged((user) => {
    if (!userBadge || !loginButton) return;
    userBadge.textContent = user ? (user.displayName || user.email) : "Guest";
    loginButton.textContent = user ? "Sign Out" : "Farmer Login";
    loginButton.href = user ? "#" : "login.html";
    loginButton.onclick = user ? async (event) => {
      event.preventDefault();
      await auth.signOut();
      window.location.reload();
    } : null;
  });
}

setAuthMode("login");
