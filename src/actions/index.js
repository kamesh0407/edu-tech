// import { auth, provider, storage} from "../firebase";
// import db from "../firebase";
// import { SET_USER } from "./actionType"; 
// export const setUser = (payload) => ({
//     type: SET_USER,
//     user: payload,
// });

// import { storageOrigin } from "firebase-tools/lib/api"

// // export function signInAPI(){
// //     return (dispatch) => {
// //         auth.signInWithPopupp(provider).then((payload) => {
// //             dispatch(setUser(payload.user));
// //         })
// //         .catch((error) => alert(error.message));
// //     };
// // }


// export function postArticleAPR(payload){
//     return(dispatch) => {
//         if(payload.image != ""){
//             const upload = storage
//             .ref(`images/${payload.image.name}`)
//             .put(payload.image);
//         upload.on("state_changed",(snapshot) =>{
//             const progress = (snapshot.bytesTransferred / snapshot.totalButes) * 100;
//             console.log(`Progress: $(progress)%`)
//         if(snapshot.state === "RUNNING"){
//             console.log(`Progress: $(progress)%`);
//         }
//         }, error => console.log(error.code),
//          async ()=> {
//             const downloadURL = await upload.snapshot.ref.getDownloadURL();
//         db.collection("articles").add({
//             actor:{
//                 description: payload.user.email,
//                 title: payload.user.displayName,
//                 date: payload.timestamp,
//                 image: payload.user.photoURL,

//             },
//             video: payload.video,
//             sharedImg: downloadURL,
//             comments: 0,
//             description: payload.description,
//         });
//         });       
       
//      }
//     };
// }