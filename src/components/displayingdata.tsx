import Image from "next/image";
function DisplayingData(){ 
  const user = { 
    name:"iqra",
    role:"student",
    email:"example@gmail.com",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    imageurl1:"https://images.unsplash.com/photo-1649400513967-61768dc494ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  return( 
    <div >Display Data 
      <div>Name:{user.name}</div>
      <div>Role:{user.role}</div>
      <div>Email:{user.email}</div>
  <Image  src={user.imageUrl} alt="" width={user.imageSize} height={100}/>
  <div>Name:{user.name}</div>
      <div>Role:{user.role}</div>
      <div>Email:{user.email}</div>
  <Image  src={user.imageurl1} alt="" width={user.imageSize} height={100}/> 


  </div>       
    
  )
 
}
export default DisplayingData;

