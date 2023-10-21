let customerContainer = document.querySelector('.container')

function customerDirectoryCard(customer){
  let customerCard = document.createElement('div');
  let customerPhoto = document.createElement('img');
  let customerName = document.createElement('h2');
  let customerEmail = document.createElement(`address`);
  let customerInfo = document.createElement('p')
  customerName.innerText = `${customer.name.first} ${customer.name.last}`;
  customerPhoto.src = `${customer.picture.large}`;
  customerEmail.innerText = `${customer.email}`;
  customerInfo.innerText = `${customer.location.street.number} ${customer.location.street.name} 
  ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}
  DOB: ${customer.dob.date}
  Customer since: ${customer.registered.date}`;
  customerCard.appendChild(customerPhoto);
  customerCard.appendChild(customerName);
  customerCard.appendChild(customerEmail);
  customerCard.appendChild(customerInfo);
  customerContainer.appendChild(customerCard)
  }

let database = customers.map((customer) => customerDirectoryCard(customer))