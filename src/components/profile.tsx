// import image from "@assets/images/image1.jpg"
import Image from "next/image";
import Image1 from "/@assets/images/image1.jpg";
function ProfilePage(){ 
    return ( 
        <div>Profile Page info 
            <Image  src="https://images.unsplash.com/photo-1649400513967-61768dc494ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="100" height="100"
            />
             <Image   src={"/Image1.jpg"} alt="pic" width={100} height={100} />
        </div>
    )
}
export default ProfilePage;