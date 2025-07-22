function addRecom() {
    const text= document.getElementById("recom").value.trim();
    if(text == ""){
        alert("please enter a valid recommendation");
        return;
    }else{
        alert('recommendation submitted with success');
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("rec");
    newDiv.style.width = "250px";
    newDiv.style.border = "1px solid #ccc";
    newDiv.innerHTML = `<p>"${text}"</p>`;
    document.getElementById("rcmmdtns").appendChild(newDiv);
    document.getElementById("newRecommendation").value = "";
}