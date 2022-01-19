import "./newuser.css"

export default function NewUser() {
    return (
        <div className="newuser">
           <h1 className="newusertitle">New User</h1>
           <form  className="newuserform">
               <div className="newuseritem">
               <label >Username</label>
               <input type="text" placeholder="Anna@42"/>
               </div>
               <div className="newuseritem">
                   <label >Full Name</label>
                   <input type="text" placeholder="Anna Joseph" />
               </div>
               <div className="newuseritem">
                   <label >Email</label>
                   <input type="email" placeholder="Anna@hotmail.com" />
               </div>
               <div className="newuseritem">
                   <label >Password</label>
                   <input type="password" placeholder="password" />
               </div>
               <div className="newuseritem">
                   <label >Phone</label>
                   <input type="text" placeholder="+65 8888 8888" />
               </div>
               <div className="newuseritem">
                   <label >Address</label>
                   <input type="text" placeholder="Delhi | India" />
               </div>
               <div className="newuseritem">
                   <label >Gender</label>
                   <div className="newuserGender">
                   <input type="radio" name="gender" id="male" value="male" />
                   <label htmlFor="male">Male</label>
                   <input type="radio" name="gender" id="female" value="female" />
                   <label htmlFor="female">Female</label>
                   <input type="radio" name="gender" id="other" value="other" />
                   <label htmlFor="other">Other</label>
                   </div>
               </div>
               <div className="newuseritem">
                   <label >Active</label>
                   <select name="active" id="active" className="newuserselect">
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
               </div>
           </form>
               <button className="newuserbutton">Create</button>
        </div>
    )
}
