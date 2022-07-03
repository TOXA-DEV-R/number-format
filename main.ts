/** @format */

const input = document.querySelector<HTMLInputElement>("[data-form-input]");

function inputControlPhoneNumber(): void {
  const numberPattern = new RegExp(/[^0-9\(\)\+\s]/gi);
  const divisionPattern = new RegExp(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/gi);

  const value =
    "+998" +
    this.value
      .replace(numberPattern, "")
      .replace(divisionPattern, "$1 ($2) $3-$4-$5");

  if (this.value.length < 14) {
    this.value = value;
  } else {
    this.value = this.value.slice(0, 19);
  }
}

input?.addEventListener("input", inputControlPhoneNumber);
