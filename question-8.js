// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

async function fetchData() {
  try {
    let respon = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await respon.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

let newUser = fetchData();

console.log(newUser);
