const userData = [
  {
    id: "1234",
    firstName: "Vannessa",
    lastName: "Pasa-an",
    occupation: "Software Engineer",
    profilePicture: "some url"
  },
  {
    id: "1234",
    firstName: "Karen",
    lastName: "Carabuena",
    occupation: "Software Engineer",
    profilePicture: "some url"
  },
  {
    id: "1234",
    firstName: "Riche",
    lastName: "Jimenez",
    occupation: "Software Engineer",
    profilePicture: "some url"
  },
  {
    id: "1234",
    firstName: "Jayson",
    lastName: "Custodio",
    occupation: "Software Engineer",
    profilePicture: "some url"
  },
  {
    id: "1234",
    firstName: "Adrian",
    lastName: "Sumagang",
    occupation: "Software Engineer",
    profilePicture: "some url"
  },
  {
    id: "1234",
    firstName: "Rolito",
    lastName: "Valles",
    occupation: "Software Engineer",
    profilePicture: "some url"
  },
  {
    id: "1234",
    firstName: "Selena",
    lastName: "Gomez",
    occupation: "Artist",
    profilePicture: "some url"
  },
  {
    id: "1234",
    firstName: "Conor",
    lastName: "Maynard",
    occupation: "Singer",
    profilePicture: "some url"
  },
  {
    id: "1234",
    firstName: "Kathryn",
    lastName: "Bernardo",
    occupation: "Artist",
    profilePicture: "some url"
  },
  {
    id: "1234",
    firstName: "Daniel",
    lastName: "Padilla",
    occupation: "Artist",
    profilePicture: "some url"
  }
];

const tableElement = document.getElementById("users");

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", event => {
  const searchText = searchInput.value.toLowerCase();
  console.log(searchText);

  if (searchText) {
    const filterUser = userData.filter((user) => {
      return 
        user.firstName.toLowerCase().includes(searchText ) ||
        user.lastName.toLowerCase().includes(searchText) ||
        user.occupation.toLowerCase().includes(searchText);
      
      //  console.log(filterUser);
    });
    clearRows();
    addRows(filterUser);
  } else {
    clearRows();
    addRows(userData);
  }
});

const clearRows = () => {
  const tbody = tableElement.children[1];
  Array.from(tbody.children).forEach(row => {
    row.remove();
  });
};

const addRows = user => {
  const forEachCallbackfn = function(user) {
    const rowElement = document.createElement("tr");
    rowElement.classList = "row";

    const id = document.createElement("td");
    const firstName = document.createElement("td");
    const lastName = document.createElement("td");
    const occupation = document.createElement("td");

    id.textContent = user.id;
    firstName.textContent = user.firstName;
    lastName.textContent = user.lastName;
    occupation.textContent = user.occupation;

    rowElement.appendChild(id);
    rowElement.appendChild(firstName);
    rowElement.appendChild(lastName);
    rowElement.appendChild(occupation);

    tableElement.children[1].appendChild(rowElement);
    // console.log(user);
  };
  userData.forEach(forEachCallbackfn);
};

addRows(userData);
