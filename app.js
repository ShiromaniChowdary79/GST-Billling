if(window.scrollY>60){
    document.querySelector("#scroll-top").classList.add("active");
  }else{
    document.querySelector("#scroll-top").classList.remove("active");
  }
   
   function loader(){
     document.querySelector(".loader").classList.add("fade-out");
  }
  function fadeOut(){
    setInterval(loader,3000);
  }
  window.onload = fadeOut();
  
  const swiftUpElements = document.querySelectorAll('.swift-up-text');
  
  swiftUpElements.forEach(elem => {
  
      const words = elem.textContent.split(' ');
      elem.innerHTML = '';
  
      words.forEach((el, index) => {
          words[index] = `<span><i>${words[index]}</i></span>`;
      });
  
      elem.innerHTML = words.join(' ');
  
      const children = document.querySelectorAll('span > i');
      children.forEach((node, index) => {
          node.style.animationDelay = `${index * .2}s`;
      });
  
  });
  
  function calculation(){
      let CustomerName=document.getElementById("CustomerName").value;
      let CustomerAddress=document.getElementById("CustomerAddress").value;
      let MobileNumber=document.getElementById("MobileNumber").value;
      
  
      let MuttonBiryani=document.getElementById("MuttonBiryani").value;
      let CheeseCake=document.getElementById("CheeseCake").value;
      let NutsOverloadIcecream=document.getElementById("NutsOverloadIcecream").value;
      let ColdDrink=document.getElementById("ColdDrink").value;
  
  
      document.getElementById("Name").innerHTML = (`Customer Name: ${CustomerName}`)
      document.getElementById("Address").innerHTML = (`Customer Address : ${CustomerAddress}`)
      document.getElementById("Number").innerHTML = (`Mobile Number : ${MobileNumber}`)
      
  
      document.getElementById("Biryani").innerHTML = (`Mutton Biryani : ${MuttonBiryani}`)
      document.getElementById("Cake").innerHTML = (`Cheese Cake : ${CheeseCake}`)
      document.getElementById("Icecream").innerHTML = (`Nuts Over load Icecream : ${NutsOverloadIcecream}`)
      document.getElementById("Drink").innerHTML = (`ColdDrink: ${ColdDrink}`)
  
      let items=[parseInt(MuttonBiryani),parseInt(CheeseCake),parseInt(NutsOverloadIcecream),parseInt(ColdDrink)];
      let sum=0;
      for(let i=0;i<items.length;i++){
          sum+=items[i];
      }
      document.getElementById("Total").innerHTML = (`Total without gst : ${sum}`);
  
      let gst=sum*18/100;
      document.getElementById("GST").innerHTML=(`GST 18% : ${gst}`);
  
     
      let tip = 0;
  
     if (sum <= 500) {
      tip = 50;
    } else if (sum > 500 && sum <= 1000) {
      tip = 100;
    } else if (sum > 1000 && sum <= 2000) {
      tip = 150;
    } else {
      tip = 200;
    }
     document.getElementById("Tip").innerHTML=(`Tip : ${tip}`);
      let TotalAmount=sum+gst+tip;
      document.getElementById("WithGST").innerHTML=(`TOTAL WITH GST : ${TotalAmount}`);
  
     
  }
  calculation();
  
  
  
  