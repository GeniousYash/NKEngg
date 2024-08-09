const navbar = ()=>{
     return(
          `
                <div class="bsct-main-top">
                  <div class="bsct-left">
                    <p>( An ISO 14001:2015, ISO 45001:2018 Certified Company )</p>
                  </div>
                  <div class="bsct-right>
                    <div>
                      <p href="tel:+919213720158"> <i class="fa-solid fa-phone-volume"></i> &nbsp; +919213720158</p>
                    </div>
                    <div>
                      <p href="mailto:nkengg@nkengg.co.in"> <i class="fa-regular fa-envelope"></i> &nbsp; nkengg@nkengg.co.in</p>
                    </div>
                  </div>
                </div>

                
               <div class="nav">
                    <div class="menu-toggle"><p>Menu</p></div>
                    <p>Contact Us</p>
               </div>
               <div class="nav-container">
                 <div class="menu-container">
                   <div class="menu">
                     <div class="menu-main">
                       <div class="menu-top">
                         <div class="menu-top-title">
                           <p>discover</p>
                         </div>
                         <div class="menu-top-content">
                            <div class="logo-div">
                              <img class="navlogo" src="./images/logo/nklogo.png" alt="NKEnggLogo"/>
                              <h3>N.K. Engg Dies And Tools</h3>
                            </div>
                           <div class="menu-item">
                             <div class="menu-item-link">
                               <div class="bg-hover"></div>
                               <a href="./">Home</a>
                             </div>
                           </div>
                           <div class="menu-item">
                             <div class="menu-item-link">
                               <div class="bg-hover"></div>
                               <a href="./about.html">About Us</a>
                             </div>
                           </div>
                           <div class="menu-item">
                             <div class="menu-item-link">
                               <div class="bg-hover"></div>
                               <a href="./deals.html">Products</a>
                             </div>
                           </div>
                           <div class="menu-item">
                             <div class="menu-item-link">
                               <div class="bg-hover"></div>
                               <a href="./contact.html">Contact Us</a>
                             </div>
                           </div>
                           <div class="menu-item" id="active">
                             <div class="menu-item-link">
                               <div class="bg-hover"></div>
                               <a href="./gallery.html">Gallery</a>
                             </div>
                           </div>
                           <div class="menu-item">
                             <div class="menu-item-link">
                               <div class="bg-hover"></div>
                               <a href="./blog.html">Blogs</a>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div class="menu-bottom">
                         <div class="menu-sub-item">
                           <div class="menu-content"><p>Linked In</p></div>
                           <div class="menu-content"><p>Instagram</p></div>
                         </div>
                         <div class="menu-sub-item">
                           <div class="menu-content"><p>X</p></div>
                           <div class="menu-content"><p>Facebook</p></div>
                         </div>
                         <div class="menu-sub-item">
                           <div class="menu-content"><p>Estd. In</p></div>
                           <div class="menu-content"><p>2003</p></div>
                         </div>
                       </div>
                     </div>
                     <div class="menu-sidebar">
                       <div class="close-btn">
                         <ion-icon name="close-sharp"></ion-icon>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
          `
     )
}


export default navbar;