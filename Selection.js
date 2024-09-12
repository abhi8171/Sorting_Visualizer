const container = document.querySelector(".data-container");

function generateBars(num = 12) {
  for (let i = 0; i < num; i++) {
    const value = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    bar.style.transform = `translateX(${i * 30}px)`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = value;
    bar.appendChild(barLabel);
    container.appendChild(bar);
  }
}

async function selectionSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  const totalBars = bars.length;
  let min_idx = 0;

  for (let i = 0; i < totalBars; i++) {
    min_idx = i;

    bars[i].style.backgroundColor = "darkblue";

    for (let j = i + 1; j < totalBars; j++) {
      bars[j].style.backgroundColor = "red";

      await new Promise((resolve) => setTimeout(resolve, delay));

      const val1 = parseInt(bars[j].childNodes[0].innerHTML);
      const val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

      if (val1 < val2) {
        if (min_idx !== i) {
          bars[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
        bars[j].style.backgroundColor = "rgb(24, 190, 255)";
      }
    }

    [bars[min_idx].style.height, bars[i].style.height] = [bars[i].style.height, bars[min_idx].style.height];
    [bars[min_idx].childNodes[0].innerText, bars[i].childNodes[0].innerText] = [bars[i].childNodes[0].innerText, bars[min_idx].childNodes[0].innerText];

    await new Promise((resolve) => setTimeout(resolve, delay));

    bars[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
    bars[i].style.backgroundColor = "rgb(49, 226, 13)";
  }

  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";
}

async function bubbleSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  const totalBars = bars.length;

  for (let i = 0; i < totalBars; i++) {
    for (let j = 0; j < totalBars - i - 1; j++) {
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";

      await new Promise((resolve) => setTimeout(resolve, delay));

      const val1 = parseInt(bars[j].childNodes[0].innerHTML);
      const val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

      if (val1 > val2) {
        [bars[j].style.height, bars[j + 1].style.height] = [bars[j + 1].style.height, bars[j].style.height];
        [bars[j].childNodes[0].innerText, bars[j + 1].childNodes[0].innerText] = [bars[j + 1].childNodes[0].innerText, bars[j].childNodes[0].innerText];
      }

      bars[j].style.backgroundColor = "rgb(24, 190, 255)";
      bars[j + 1].style.backgroundColor = "rgb(24, 190, 255)";
    }
    bars[totalBars - i - 1].style.backgroundColor = "rgb(49, 226, 13)";
  }

  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";
}

function generate() {
  // Clear the container and generate new bars
  container.innerHTML = "";
  generateBars();
}

function disable() {
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
}

function startSort(sortType) {
  disable();
  if (sortType === "selection") {
    selectionSort();
  } else if (sortType === "bubble") {
    bubbleSort();
  }
}

generateBars();
