let customerContainer = document.querySelector('.container')

function customerDirectoryCard(customer){
  let customerCard = document.createElement('div');
  let customerPhoto = document.createElement('img');
  let customerName = document.createElement('h2');
  let customerEmail = document.createElement('address');
  let customerInfo = document.createElement('ul');
  let address1 = document.createElement('li');
  let address2 = document.createElement('li');
  let dob = document.createElement('li')
  let regDate = document.createElement('li');

  let customerNameText = customer.name.first.charAt(0).toUpperCase() + customer.name.first.slice(1) 
  + " " + customer.name.last.charAt(0).toUpperCase() + customer.name.last.slice(1);
  
  customerCard.classList.add("customer-card");
  customerPhoto.classList.add("customer-photo");
  customerName.classList.add("customer-name");
  customerInfo.classList.add("customer-info");
  customerEmail.classList.add("customer-email");
  address1.classList.add("address1");
  address2.classList.add("address2");
  dob.classList.add("dob");
  regDate.classList.add("reg-date");

  customerName.innerText = customerNameText;
  customerPhoto.src = customer.picture.large;
  customerEmail.innerText = customer.email;
  address1.innerText = customer.location.street.number + " " + customer.location.street.name; 
  address2.innerText = customer.location.city + ", " + nameToAbbr(customer.location.state) + " " + customer.location.postcode;
  dob.innerText = "DOB: " + moment(customer.dob.date).format("MMM D, YYYY") ;
  regDate.innerText = "Customer since: " + moment(customer.registered.date).format("MMM D, YYYY");

  customerInfo.appendChild(address1);
  customerInfo.appendChild(address2);
  customerInfo.appendChild(dob);
  customerInfo.appendChild(regDate);


  customerCard.appendChild(customerPhoto);
  customerCard.appendChild(customerName);
  customerCard.appendChild(customerEmail);
  customerCard.appendChild(customerInfo);

  customerContainer.appendChild(customerCard)
  }

let database = customers.map((customer) => customerDirectoryCard(customer))