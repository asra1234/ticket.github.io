







window.onload=function(){
    if(localStorage){
        document.getElementById("form").addEventListener('submit',function(){
            let date=document.getElementById("select-date").value;
            let checkin=document.getElementById("checkin").value;
            let checkout=document.getElementById("checkout").value;
            let foreingneradult=document.getElementById("1").value;
            let foreignerchild=document.getElementById("2").value;
            let sladult=document.getElementById("3").value;
            let slchild=document.getElementById("4").value;
            let infant=document.getElementById("5").value;

            localStorage.setItem("date",date);
            localStorage.setItem("duration",duration);
            localStorage.setItem("checkin",checkin);
            localStorage.setItem("checkout",checkout);
            localStorage.setItem("fadult",foreingneradult);
            localStorage.setItem("fchild",foreignerchild);
            localStorage.setItem("sladult",sladult);
            localStorage.setItem("slchild",slchild);
            localStorage.setItem("infant",infant);

        })
    }
}

const dateInput = document.getElementById('date');
const timeSelect = document.getElementById('time');

const prices = {
    "ForeignerAdult": { normal: 10, peak: 13 },
    "ForeignerChild": { normal: 5, peak: 8 },
    "SLAdult": { normal: 4, peak: 6 },
    "SLChild": { normal: 2, peak: 3 },
    "Infant": { normal: 0, peak: 0 } 
};



document.addEventListener("DOMContentLoaded", function(){
     
    const peakHours=[10,11,12,15,16,17,18];
    
    let number=[
        {"type":" localStorage.getItem(fadult)"},
        {"type":"localStorage.getItem(fchild)"},
        { "type": "localStorage.getItem(sladult)"},
        { "type":"localStorage.getItem(slchild)"},
        {"type":"localStorage.getItem(infant)"}
    ]
   
})

function Duration(){
    let total=0;
   let peakhours=0;
   let nonpeakhours=0;

   for (let i = checkin.value; i <= checkout.value; i++) {
     arr.push(i);

    if (peakHours.includes(i)) {
        peakhours++;
        
    } else {
        nonpeakhours++;
        
    }
    
   }
   total+=calculate(true,number,peakhours);
   total+=calculate(false,number,nonpeakhours);

}
function calculate(peakhours,number,Duration){
    let Total=0;

    for (let entry of number) {
        if (peak) {
            Total+=number(entry.id).peak*entry.total*Duration;
            
        } else {
            Total+=number(entry.id).normal*entry.total*Duration;
        }
        
    }
    return Total;
}
















/*// Get references to HTML elements
const dateInput = document.getElementById('date');
const timeSelect = document.getElementById('time');
const ticketTable = document.getElementById('ticketTable');
const summaryTable = document.getElementById('summaryTable');

// Define ticket prices
const prices = {
  'SL Adult': { normal: 4, peak: 6 },
  'SL Child': { normal: 2, peak: 3 },
  'Foreigner Adult': { normal: 10, peak: 13 },
  'Foreigner Child': { normal: 5, peak: 8 },
  'Infant': { normal: 0, peak: 0 }
};

// Function to calculate total charges
function calculateTotalCharges(ticketQuantities) {
  let total = 0;
  for (const category in ticketQuantities) {
    total += (ticketQuantities[category].normal * prices[category].normal);
    total += (ticketQuantities[category].peak * prices[category].peak);
  }
  return total;
}

// Function to update the summary table
function updateSummaryTable() {
  // Get selected date and time
  const selectedDate = dateInput.value;
  const selectedTime = timeSelect.value;

  // Get ticket quantities from form input (you need to update this part based on your form structure)
  const ticketQuantities = {
    'SL Adult': { normal: 2, peak: 0 },
    'SL Child': { normal: 3, peak: 0 },
    'Foreigner Adult': { normal: 1, peak: 0 },
    'Foreigner Child': { normal: 2, peak: 0 },
    'Infant': { normal: 0, peak: 0 }
  };

  // Calculate total payable amount
  const totalPayable = calculateTotalCharges(ticketQuantities);

  // Update the summary table
  summaryTable.innerHTML = `
    <tr>
      <td>Date</td>
      <td>${selectedDate}</td>
    </tr>
    <tr>
      <td>Time</td>
      <td>${selectedTime}</td>
    </tr>
    <!-- Add rows for Duration, Tickets, Charges, and Total Payable -->
  `;
}

// Event listener for date and time changes
dateInput.addEventListener('change', updateSummaryTable);
timeSelect.addEventListener('change', updateSummaryTable);

// Call the updateSummaryTable function to initialize the summary table
updateSummaryTable();





//summary table

/*document.addEventListener("DOMContentLoaded", function() {
  const selectedDateInput = document.getElementById("select-date");
  const ticketsTable = document.getElementById("tickets-table");
  const totalPayable = document.getElementById("total-paypal");
  const continueButton = document.getElementById("continue-button");

  // Sample pricing data
  const prices = {
    "Foreigner Adult": { normal: 10, peak: 13 },
    "Foreigner Child": { normal: 5, peak: 8 },
    "SL Adult": { normal: 4, peak: 6 },
    "SL Child": { normal: 2, peak: 3 },
    "Infant": { normal: 0, peak: 0 } //infants are free
  };

  // Sample peak hours
  const peakHours = [3, 4, 5]; // Adjust the peak hours accordingly

  // Function to update tickets table and total payable
  function updateSummary() {
    const date = selectedDateInput.value;
    const duration = parseInt(document.getElementById("duration").value);

    const ticketData = [
      // Format: [Ticket Category, Quantity]
      ["Foreigner Adult", parseInt(document.getElementById("f-adult").value)],
      ["Foreigner Child", parseInt(document.getElementById("f-child").value)],
      ["SL Adult", parseInt(document.getElementById("sladult").value)],
      ["SL Child", parseInt(document.getElementById("slchild").value)],
      ["Infant", parseInt(document.getElementById("infant").value)]
      // Add other ticket categories here
    ];

    const tableBody = document.getElementById("tickets-table");
    tableBody.innerHTML = "";

    // Calculate total payable
    let total = 0;

    // Create and populate the tickets table
    for (const [category, quantity] of ticketData) {
      if (quantity > 0) {
        const row = tableBody.insertcolumn();
        const cellCategory = row.insertCell();
        const cellDate = row.insertCell();
        const cellTime = row.insertCell();
        const cellDuration = row.insertCell();
        const cellQuantity = row.insertCell();
        const cellPrice = row.insertCell();

        const normalPrice = prices[category].normal * quantity * duration;
        const peakPrice = peakHours.includes(duration) ? prices[category].peak * quantity * duration : 0;
        const price = normalPrice + peakPrice;

        cellCategory.innerHTML = category;
        cellDate.innerHTML = date;
        cellTime.innerHTML = document.getElementById("duration").options[duration - 1].text;
        cellDuration.innerHTML = `${Duration} hour(s)`;
        cellQuantity.innerHTML = quantity;
        cellPrice.innerHTML = `$${price}`;

        total += price;
      }
    }

    totalPayable.innerHTML = `$${total}`;
    continueButton.disabled = total === 0;
    // Enable the "Continue with purchase" button if total payable is greater than 0
  }

  // Add event listeners
  selectedDateInput.addEventListener("change", updateSummary);
  document.getElementById("Duration").addEventListener("change", updateSummary);
  document.getElementById("f-adult").addEventListener("change", updateSummary);
  document.getElementById("f-child").addEventListener("change", updateSummary);
  document.getElementById("sladult").addEventListener("change", updateSummary);
  document.getElementById("slchild").addEventListener("change", updateSummary);
  document.getElementById("infant").addEventListener("change", updateSummary);
  

  continueButton.addEventListener("click", function() {
    window.location.href = "details.html";
  });

  // Update summary initially
  updateSummary();
});