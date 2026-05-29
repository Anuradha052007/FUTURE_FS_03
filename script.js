
const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const name =
  document.getElementById("name").value;

  alert(
    "✅ Thank You " + name +
    "! Your table has been booked successfully."
  );

  form.reset();

});
