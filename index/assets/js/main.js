function updateTabs() {
  let base = document.getElementsByTagName("header")[0];
  let link = window.location.hash;

  let all = base.querySelectorAll("li a[href]");
  for (let i = 0; i < all.length; i++) {
    all[i].parentElement.classList.remove("is-active");
  }
  let result = base.querySelector(`li a[href="${link}"]`);
  result.parentElement.classList.add("is-active");
}

window.addEventListener("load", updateTabs);
window.addEventListener("popstate", updateTabs);
