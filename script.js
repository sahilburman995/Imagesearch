         const apikey = "lj9oej-7i4fm2NPWkAU_moXTtfgEV3CU6LNJ5pXAnBw";
    
        const form1 = document.querySelector("form");
        const inputd = document.getElementById("search-input");
        const searchresult = document.querySelector(".container");
        const morebutton=document.getElementById("show-more")

    
        let inputdata = "";
        let page = 1;
    
        async function searchimage() {
            try {
                inputdata = inputd.value;
                const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${apikey}`;
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
    
                const results = data.results;
                if (page === 1) {
                    searchresult.innerHTML = "";
                }
    
                results.map((result) => {
                    const imagewrapper = document.createElement("div");
                    imagewrapper.classList.add("firstitem");
                    const image = document.createElement("img");
                    image.src = result.urls.small;
                    image.alt = result.alt_description;
                  

                    const imagelink = document.createElement("a");
                    imagelink.href = result.links.html;
                    imagelink.textContent = result.alt_description;
                    imagewrapper.appendChild(image);
                    imagewrapper.appendChild(imagelink);
                    searchresult.appendChild(imagewrapper);
                });
    
                page++;
            } catch (error) {
                console.log(error);
            }
        }
    
        form1.addEventListener('submit', (event) => {
            event.preventDefault();
            page = 1;
            searchimage();

            morebutton.addEventListener('click',()=>{
                searchimage();
            })
        });

        let count=0;
        const mycount=document.getElementById('counter')
        const countdiv = document.createElement("div");
       
        mycount.appendChild(countdiv)
       
        countdiv.textContent=count;
        morebutton.addEventListener('click',()=>{
            count=count+1;
            countdiv.textContent=`${count}`;
        })
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        
        darkModeToggle.addEventListener('change', () => {
            body.classList.toggle('dark-mode');
        });
        