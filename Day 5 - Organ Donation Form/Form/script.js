document.addEventListener("DOMContentLoaded", function () {
  var genderSelect = document.getElementById("gender");
  var bloodSelect = document.getElementById("blood");
  var organsSelect = document.getElementById("organs");
  var dobInput = document.getElementById("dob");
  var contactInput = document.getElementById("contact");

  genderSelect.insertAdjacentHTML(
    "afterbegin",
    '<option value="" disabled selected>Enter Gender</option>'
  );
  bloodSelect.insertAdjacentHTML(
    "afterbegin",
    '<option value="" disabled selected>Enter Blood Type</option>'
  );
  organsSelect.insertAdjacentHTML(
    "afterbegin",
    '<option value="" disabled selected>Enter Organs to Donate</option>'
  );

  contactInput.addEventListener("input", function (event) {
    event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10);
  });
});
