
window.setTimeout(function () {
    $(".cookie-bar").addClass('show')
}, 5000);

$('.cookie-bar .btn, .cookie-bar .btn-close').on('click', function () {
    $(".cookie-bar").removeClass('show')
});

(function () {
  const quantityContainers = document.querySelectorAll(".quantity-content");

  quantityContainers.forEach((container) => {
    const minusBtn = container.querySelector(".minus");
    const plusBtn = container.querySelector(".plus");
    const inputBox = container.querySelector(".input-box");

    updateButtonStates();

    // Attach event listeners
    minusBtn.addEventListener("click", () => {
      decreaseValue(inputBox, minusBtn, plusBtn);
    });

    plusBtn.addEventListener("click", () => {
      increaseValue(inputBox, minusBtn, plusBtn);
    });

    inputBox.addEventListener("input", () => {
      handleQuantityChange(inputBox, minusBtn, plusBtn);
    });

    function updateButtonStates() {
      const value = parseInt(inputBox.value);
      minusBtn.disabled = value <= 1;
      plusBtn.disabled = value >= parseInt(inputBox.max);
    }

    function decreaseValue(inputBox, minusBtn, plusBtn) {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.max(value - 1, 1);
      inputBox.value = value;
      updateButtonStates();
    }

    function increaseValue(inputBox, minusBtn, plusBtn) {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
      inputBox.value = value;
      updateButtonStates();
    }

    function handleQuantityChange(inputBox, minusBtn, plusBtn) {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : value;
      inputBox.value = value;
      updateButtonStates();
    }
  });
})();