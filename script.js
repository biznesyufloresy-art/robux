async function findUser(){
const name = document.getElementById("username").value;

const res = await fetch("https://users.roblox.com/v1/usernames/users",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({usernames:[name]})
});

const data = await res.json();

if(!data.data.length){
alert("Nie znaleziono użytkownika");
return;
}

const id = data.data[0].id;

const avatar = await fetch(
`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${id}&size=420x420&format=Png`
);

const avatarData = await avatar.json();

document.getElementById("avatar").src =
avatarData.data[0].imageUrl;

document.getElementById("name").innerText = name;
document.getElementById("profile").classList.remove("hidden");
}

function gift(){
const amount = document.getElementById("amount").value;
const name = document.getElementById("name").innerText;

const status = document.getElementById("status");

status.innerText = "Sending Robux...";

setTimeout(()=>{
status.innerText =
`✅ Wysłano ${Number(amount).toLocaleString()} Robux do ${name}`;
},2000);
}
