// response = fetch('something')

// fetch ka mainly 2 work hai 
// first : ek part jata hai browser/node ke api request ko handle krne ke liye
//  isme se jati hai ek network request , hm direct network request nhi bhej skte ,
//  uske liye resources chaiye , jo browser /node provide krta hai 

//  ab network pe ya to data jaegi ya nhi jaegi ,
//   ab kuch bhi response aaegi , wo onfulfilled array mein store hoga 
//   ab request agar fail ho , kuch response aaya hi nhi ,
//   to wo onRejection array mein jaega

//   important :  agar koi error network request ke baad aa rhi jaise (404) 
//                iska mtlb wo response aae hai , to wo onfulfilled mein hi jaegi

//                agar koi network request hi nhi ho paa rhi tb wo reject mein jaegi
  
//           network request ke baad jo bhi data array mein store hue hai ,
//           wo as a response return hoti hai
         

// second : second part variables ke liye meomory mein space reserve krta hai
// 2 array create hota hai 
// 1. onfulfilled[]  //ye promise ka resolve hai
// 2. onRejection[]  // ye reject hai
// iss dono array mein direct value push krna allow nhi hai 
// ye range mein nhi hote , inko direct access nhi kr skte ,
// ye private fields hote hain