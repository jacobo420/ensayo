/* Sistema de autenticación simulado (100% en el navegador con localStorage).
   No hay backend real: sirve para demostrar la interfaz de registro / login.
   Para producción real, conecta esto a un backend con contraseñas hasheadas. */

const AUTH_KEY = "extracultural_users";
const SESSION_KEY = "extracultural_session";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}

function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

function setSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email }));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function registerUser({ name, email, password }) {
  const users = getUsers();
  if (users.some((u) => u.email === email)) {
    return { ok: false, message: "Ya existe una cuenta registrada con ese correo." };
  }
  users.push({ name, email, password });
  saveUsers(users);
  setSession({ name, email });
  return { ok: true };
}

function loginUser({ email, password }) {
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return { ok: false, message: "Correo o contraseña incorrectos." };
  }
  setSession(user);
  return { ok: true, user };
}

function logoutUser() {
  clearSession();
}

function updateAuthUI() {
  const session = getSession();
  const loginBtn = document.getElementById("open-login-btn");
  const userChip = document.getElementById("user-chip");
  const userNameSpan = document.getElementById("user-name");

  if (!loginBtn || !userChip || !userNameSpan) return;

  if (session) {
    loginBtn.classList.add("hidden");
    userChip.classList.remove("hidden");
    userNameSpan.textContent = session.name.split(" ")[0];
  } else {
    loginBtn.classList.remove("hidden");
    userChip.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateAuthUI();

  const modal = document.getElementById("auth-modal");
  const openBtn = document.getElementById("open-login-btn");
  const closeBtn = document.getElementById("close-modal-btn");
  const tabLogin = document.getElementById("tab-login");
  const tabRegister = document.getElementById("tab-register");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const logoutBtn = document.getElementById("logout-btn");

  const openModal = (tab = "login") => {
    if (!modal) return;
    modal.classList.add("open");
    document.body.classList.add("no-scroll");
    switchTab(tab);
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.classList.remove("no-scroll");
  };

  const switchTab = (tab) => {
    if (!tabLogin || !tabRegister) return;
    const isLogin = tab === "login";
    tabLogin.classList.toggle("active", isLogin);
    tabRegister.classList.toggle("active", !isLogin);
    loginForm.classList.toggle("hidden", !isLogin);
    registerForm.classList.toggle("hidden", isLogin);
  };

  openBtn?.addEventListener("click", () => openModal("login"));
  closeBtn?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  tabLogin?.addEventListener("click", () => switchTab("login"));
  tabRegister?.addEventListener("click", () => switchTab("register"));

  document.querySelectorAll("[data-open-register]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openModal("register");
    })
  );

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    const errorEl = document.getElementById("login-error");

    const result = loginUser({ email, password });
    if (result.ok) {
      errorEl.textContent = "";
      updateAuthUI();
      closeModal();
      showToast(`¡Bienvenido/a de nuevo, ${result.user.name.split(" ")[0]}!`);
      loginForm.reset();
    } else {
      errorEl.textContent = result.message;
    }
  });

  registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value;
    const errorEl = document.getElementById("register-error");

    if (name.length < 2) {
      errorEl.textContent = "Ingresa tu nombre completo.";
      return;
    }
    if (password.length < 6) {
      errorEl.textContent = "La contraseña debe tener al menos 6 caracteres.";
      return;
    }

    const result = registerUser({ name, email, password });
    if (result.ok) {
      errorEl.textContent = "";
      updateAuthUI();
      closeModal();
      showToast(`¡Cuenta creada! Bienvenido/a, ${name.split(" ")[0]} 🎉`);
      registerForm.reset();
    } else {
      errorEl.textContent = result.message;
    }
  });

  logoutBtn?.addEventListener("click", () => {
    logoutUser();
    updateAuthUI();
    showToast("Sesión cerrada. ¡Vuelve pronto!");
  });

  window.openAuthModal = openModal;
});

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => toast.classList.remove("show"), 3200);
}
