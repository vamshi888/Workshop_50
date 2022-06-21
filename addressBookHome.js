window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
  });
  
  const createInnerHtml = () => {
    if (contactList.length == 0) {
      return;
    }
    const headerHtml = `<tr>
      <th>Full Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      </tr>`;
    let innerHtml = `${headerHtml}`;
    for (let contact of contactList) {
      innerHtml = `${innerHtml} 
          <tr>
          <td>${contact._name}</td>
          <td>${contact._address}</td>
          <td>${contact._city}</td>
          <td>${contact._state}</td>
          <td>${contact._zip}</td>
          <td>${contact._phoneNumber}</td>
          <td>
              <img src="delete-black-18dp.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
              <img src="create-black-18dp.svg" alt="update" id="${contact._id}" onclick="update(this)">
          </td>
          </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
  };
  
  let contactList = [
    {
      _id: 1,
      _name: "Vamshi",
      _phoneNumber: "91 9525563244",
      _address: "kengeri",
      _city: "Bangalore",
      _state: "Karnataka",
      _zip: "567766",
    },
    {
      _id: 2,
      _name: "Krishna",
      _phoneNumber: "91 9445566344",
      _address: "Jubliee hills",
      _city: "Hyderabad",
      _state: "Telangana",
      _zip: "566667",
    },
  ];