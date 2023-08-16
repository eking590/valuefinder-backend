import express from 'express'
import Post from '../../models/Post/Index.js'





export const updatePost = async(req, res) => {
    const id = req.body.id
    const user_id = req.user._id; 
    const findPost = await Post.findOne({ _id: id }); 
    const newContact = {
        user_id: req.user._id,  
        firstName: req.user.firstName, 
        lastName: req.user.lastName
       }
    if(findPost){
       const newme = findPost.numberOfApplicants
       let check = newme.find(user => user.user_id == user_id)
       if(check === undefined){
        newme.push(newContact)
        findPost.save()
        res.status(409).send({ msg: "Application Submitted"})
       }else{
        res.status(201).send({msg : "You have applied for this Job already"})
       }
 
    }else{
       res.status(403).json('post not found')
    }

    }
//     // if(!findId){
//     //     res.status(404).json({ msg: "Id not found!!" })

//     } 
//    //get current user 

    
 
   


  

 
// // res.json({ updatedReq });

// }


// export const updatePost = async(req, res) => {
   
//     const id = req.body.id
//     const user_id = req.user._id; 
//     const findPost = await Post.findOne({ _id: id }); 
    
//     const newContact = {
//         user_id,   
//         firstName: req.user.firstName, 
//         lastName: req.user.lastName
    
//        }  
    

    
//        if(findPost) {
        
//         const allupdate = findPost.numberOfApplicants
//         const mapped = allupdate.map((item)=>{
//             return {...newContact,...item}
//         })
//         console.log("this is map", mapped)
//         console.log("thiis is all update", allupdate)
//        findPost.numberOfApplicants = mapped 
//        await findPost.save()
//        res.status(201).send({ msg: "Application Submitted", findPost})
//        }else{
//         res.status(403).json('post not found')
//        }

//     }