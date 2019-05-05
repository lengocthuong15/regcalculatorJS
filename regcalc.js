$(".button").click(function() {
  if (this.value == 0)
  {
    this.value = "1";
    this.style.backgroundColor = "#4CAF50";
  }
  else
  {
    this.value = "0";
    this.style.backgroundColor = "white";
  }
});

