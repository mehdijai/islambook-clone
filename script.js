let zekerCounter = document.querySelectorAll(".zekr-counter");
let zekerReset = document.querySelectorAll(".zekr-reset");

zekerReset.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    var t = e.target.closest('div[class^="zekr-counter"]'),
      n = t.getElementsByClassName("count-down")[0],
      o = n.dataset.count;
    return (o = zeroPad(o, 99 < o ? 3 : 2)), (n.innerHTML = o), t.classList.add("alert-info"), !1;
  });
});

zekerCounter.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    const t = e.target;
    let n = t.getElementsByClassName("count-down")[0];
    let o = n.dataset.count;
    let i = parseInt(n.textContent);

    return (
      0 == (i = isNaN(i) ? 0 : i) ||
        (i == o && t.classList.add("alert-info"),
        0 == i
          ? (i = o)
          : 1 == i
          ? (i--,
            setTimeout(function () {
              n.innerHTML = o;
            }, 18e5),
            setTimeout(function () {
              t.classList.remove("alert-info");
            }, 18e5))
          : i--,
        (i = zeroPad(i, 99 < i ? 3 : 2)),
        (n.innerHTML = i)),
      !1
    );
  });
});

function zeroPad(n, width, z) {
  return String(n).padStart(width, "0");
}
