document.querySelectorAll(".wow").forEach((wow) => {
    const btnPlus = wow.querySelector(".plus");
    const btnMinus = wow.querySelector(".minus");
    const input = wow.querySelector('input[type="number"]');
  
    btnPlus.addEventListener("click", () => {
      let value = Number(input.value) || 0; 
      if (value < 10) {
        input.value = value + 1;
      }else{
        input.value = 10;
      }
    });
  
    btnMinus.addEventListener("click", () => {
      let value = Number(input.value);
      if (value > 1) {
        input.value = value - 1;
      } else {
        input.value = 1;
      }
    });
  });