let body = document.querySelector('body');

let parent = document.createElement('div');
parent.className = 'parent';

let child = document.createElement('div');
child.className = 'child';

parent.appendChild(child);
body.appendChild(parent)


///test request function

// let HackerAPirequest = async () => {
//     let response =  await fetch ('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty');
    

//     let data = await response.json();


   
    
    
//     let newChild = document.createElement('div');
//     newChild.className = 'child';

//     let linkChild = document.createElement('a')


// newChild.innerText = data.title;
// linkChild.href = data.url
// parent.appendChild(linkChild);
// linkChild.innerText = data.title

//}

//HackerAPirequest();


// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

let HackerAPirequest2 = async () => {
    let response =  await fetch ('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');

    let data = await response.json();
    console.log(data[1])

//    ----------------------------------------------------------------
        
        for (let i = 0; i < 100; i++) {
         fetch (`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
         .then(res=>
                    {  return res.json()  
                    
                    })  .then(newdata=>{
                        console.log(newdata)
                        

                         let newChild = document.createElement('div');
                         let newChildTwo = document.createElement('div')
                         let linkChild = document.createElement('a')
                           
                         //Add class
                         newChild.className = 'box zone green';
                           
                            
                        //    appending div to body
                            body.appendChild(newChild)
                            
                        //   adding url to href attribute of created a element
                            linkChild.href = newdata.url
                            // making the inner text the title so that the title is clickable to link
                            linkChild.innerText =`${newdata.title}`
                            //opens link in new tab
                            linkChild.setAttribute('target','_blank');
                             //appended link to div 
                            newChild.appendChild(linkChild)


                            // -----------------------------------------------//
                            //added score data and class to a second div
                            newChildTwo.innerText = `\nAuthor-${newdata.by} /`
                            newChildTwo.className = 'red'
                          //added author data and appended second div to body
                            newChildTwo.innerText += `  \nScore-${newdata.score}   `
                           newChildTwo.innerText +=  `\nComments-${newdata.descendants}`
                            body.appendChild(newChildTwo)
        
                              
                                 
                        


                        })
        
    
    }
        
}


    
   


 HackerAPirequest2()


// for (let i = 0; i < array.length; i++) {
//     let response2 =  await fetch (`https://hacker-news.firebaseio.com/v0/${i}.json?print=pretty`);
//     let data = await response.json();
    
// }
