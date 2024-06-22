// let redMore = document.getElementById("red");
let redAll = document.querySelectorAll("#red");
// console.log(redMore);
console.log(redAll);

document.addEventListener("click" , function (element , caption )
{
    if(element.target.id == "red") {
        let newdiv = document.createElement("div");
        newdiv.classList.add("newdiv");
        document.body.appendChild(newdiv);



        let  data = document. createElement("div");
        data.classList.add("deatils");
        data.innerHTML = `
        <p> <span> Position :  </span>  Damascus </p>
        <p> <span> Area : </span> 500 M </p>
        <p> <span> Price : </span> 4000 $ </p>
        <p> 4 living room   1 prking  1 back yarda </p>
        `;
        newdiv.appendChild(data);

        let divbutton = document.createElement("div");
        divbutton.classList.add("divButton");
        newdiv.appendChild(divbutton);

        let clearButton = document.createElement("span");
        clearButton.classList.add("clear");
        clearButton.textContent = "clear" ;
        // console.log(clearButton)
        divbutton.appendChild(clearButton);
        
        let addButton = document.createElement("span");
        addButton.classList.add("add");
        addButton.textContent = "add to curt" ;
        divbutton.appendChild(addButton);
        console.log(addButton)

        document.addEventListener("click" , function(element , caption) {
            if(element.target.classList.contains("clear")){
                // console.log(element.target);
                newdiv.remove();
            }
        });

        document.addEventListener("click" , function(element ,caption){

            if(element.target.classList.contains("add")){
            addButton.remove();
            clearButton.remove();
            data.remove();
            let newform = document.createElement("div");
            newform.classList.add("form");
            newdiv.appendChild(newform);
            newform.innerHTML = `
            
            <div class="content">
                <h2></h2>
                <form action="">
                    <input class="input" type="text" name="" placeholder="Your Name" id="">
                    <input class="input" type="email" placeholder="Your Email" name="" id="" >
                    <input class="input" type="text" placeholder="Your Phone" name="" id="">
                    <textarea class="input" name="" placeholder="Your National NUmber" id="" cols="30" rows="10"></textarea>
                    <input type="submit" name="" value="send" id="">
                </form>
            </div>
            
            `
            }
        });
    }
    document.addEventListener("click" , function(e) {
        if(e.target.classList.contains("submit")){

            newdiv.remove();
        }
    })
})