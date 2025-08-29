let coin = 100;
//call-add-to-history
document.querySelectorAll("#callBtn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();

    const number = e.target.getAttribute("data-target")
    const numberId = document.getElementById(number).innerText;
    const nameId = number+'1';
    const name = document.getElementById(nameId).innerText;
    const time = new Date().toLocaleTimeString();

    const div = document.createElement("div");
    div.className = "dynamic-box bg-gray-100 mb-2 shadow-md p-4 rounded-lg flex flex-col";

    div.innerHTML = `
      <div class="font-bold">${name}</div>
      <div class="text-gray-600 flex justify-between">
        <div>${numberId}</div>
        <div>${time}</div>
      <div>
    `;

    //coin-count
    const count = document.getElementById('coin');

    if(coin >= 20){
      coin -= 20;
      count.innerText = coin; 
      alert('Calling'+ name+ numberId)
      document.getElementById("input-container").appendChild(div);
    }else{
      alert('Not Enough coins to make a call')
}});
});

//heart-add
let cnt = 0;
document.querySelectorAll('#hrt').forEach((btn) => {
btn.addEventListener('click',function (e){
  e.preventDefault();
  cnt+=1;
  document.getElementById('txt').innerText = cnt;
});
});

    
//copy section
let txt = 0;
const text = document.getElementById('copy');
document.querySelectorAll('#copyBtn').forEach((btn) => {
btn.addEventListener('click',function (e){
  e.preventDefault();
  txt += 1;
  text.innerText = txt+'Copy';
  alert('Number Copied')
});
});
document.querySelectorAll('#copyBtn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('data-target');
    const text = document.getElementById(targetId).innerText.replace('Copy','').trim();

    navigator.clipboard.writeText(text);
  });
});

// Clear History
document.getElementById("clearBtn").addEventListener("click", () => {
  document.querySelectorAll(".dynamic-box").forEach(el => el.remove());
});


